import React, { useEffect, useState } from "react";
import "./App.scss";
import { getNASAPictures } from "./NasaAPI";
import ImageCard from "./components/ImageCard";
import Selector from "./components/Selector";

function App() {
  const [pictures, updatePictures] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!pictures) {
      const startDate = new Date("2020-07-01T08:28:41.917Z");
      const endDate = new Date();
      getNASAPictures(startDate, endDate).then((res) => {
        updatePictures(res);
      });
    }
  }, [pictures]);

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  console.log("date", date);

  return (
    <div>
      <header>
        <h1>NASA’s Astronomy Picture of the Day </h1>
        <p>
          Every day NASA features a photograph from our universe. Explore the
          most recent photos!
        </p>
      </header>
      <Selector handleChangeDate={handleChangeDate} />
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
