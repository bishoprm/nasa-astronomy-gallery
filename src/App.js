import React, { useEffect, useState } from "react";
import "./App.scss";
import { getNASAPictures } from "./NasaAPI";
import ImageCard from "./components/ImageCard";
import SelectDate from "./components/SelectDate";
import moment from "moment-timezone";

function App() {
  const [pictures, updatePictures] = useState(null);
  const [date, setDate] = useState(20);

  // the API is set in EST so I used momentjs instead of the getDate method.
  // Otherwise it will break if a user elsewhere uses it after midnight
  useEffect(() => {
    const startDate = moment.tz("America/New_York").subtract("days", date);
    const endDate = moment.tz("America/New_York");
    getNASAPictures(startDate, endDate).then((res) => {
      updatePictures(res);
    });
  }, [date]);

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>NASA’s Astronomy Picture of the Day </h1>
        <p>
          Every day NASA features a photograph from our universe. Explore the
          most recent photos!
        </p>
      </header>
      <SelectDate handleChangeDate={handleChangeDate} />
      <div className="container">
        {pictures &&
          pictures.map((picture) => (
            <div key={picture.date}>
              {picture.media_type === "image" && <ImageCard {...picture} />}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
