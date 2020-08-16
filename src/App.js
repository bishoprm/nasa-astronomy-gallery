import React, { useEffect, useState } from "react";
import "./App.scss";
import { getNASAPictures } from "./NasaAPI";
import ImageCard from "./components/ImageCard";

function App() {
  const [pictures, updatePictures] = useState(null);
  useEffect(() => {
    if (!pictures) {
      const startDate = new Date("2020-07-01T08:28:41.917Z");
      const endDate = new Date();
      getNASAPictures(startDate, endDate).then((res) => {
        updatePictures(res);
      });
    }
  }, [pictures]);

  console.log(pictures);

  return (
    <div className="container">
      {pictures &&
        pictures.map((picture) => (
          <div key={picture.date}>
            {picture.media_type === "image" && <ImageCard {...picture} />}
          </div>
        ))}
    </div>
  );
}

export default App;
