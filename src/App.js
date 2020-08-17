import React, { useEffect, useState } from "react";
import "./App.scss";
import { getNASAPictures } from "./NasaAPI";
import ImageCard from "./components/ImageCard";
import SelectDate from "./components/SelectDate";
import Loading from "./components/Loading";
import moment from "moment-timezone";

function App() {
  const [pictures, updatePictures] = useState([]);
  const [dateFilter, setDateFilter] = useState("lastMonth");

  // the API is set in EST so I used momentjs instead of the getDate method.
  // Otherwise it will break if a user elsewhere uses it after midnight
  useEffect(() => {
    const startDate = moment.tz("America/New_York").subtract("days", 29);
    const endDate = moment.tz("America/New_York");
    getNASAPictures(startDate, endDate).then((res) => {
      updatePictures(res);
    });
  }, []);

  function dateFilterHandler(event) {
    setDateFilter(event.target.value);
  }

  const filterPhotos = pictures.filter((picture, index) => {
    // the amount of photos shown might not equal one per day,
    // since only photos are rendered in this app and sometimes NASA posts videos
    if (dateFilter === "lastMonth") {
      return picture;
    } else if (dateFilter === "lastTwoWeeks" && index >= 14) {
      return picture;
    } else if (dateFilter === "lastWeek" && index >= 23) {
      return picture;
    } else return null;
  });

  function displayPhotos() {
    if (pictures.length === 0) {
      return <Loading />;
    } else {
      return (
        <div className="container">
          {filterPhotos.map((picture) => (
            <div key={picture.date}>
              {picture.media_type === "image" && <ImageCard {...picture} />}
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div>
      <header>
        <h1>NASA’s Astronomy Picture of the Day </h1>
        <p>
          Every day NASA features a photograph from our universe. Explore the
          most recent photos!
        </p>
      </header>
      <SelectDate dateFilterHandler={dateFilterHandler} />
      {pictures && displayPhotos()}
    </div>
  );
}

export default App;
