import React from "react";

export default function ImageCard(props) {
  return (
    <div className="imageCard">
      <span className="imageDate">{props.date}</span>
      <img src={props.url} alt={props.title} />

      <div className="imageDescription">
        <span className="imageDescriptionLeft">{props.title}</span>
        <span className="imageDescriptionRight">{props.copyright}</span>
      </div>
    </div>
  );
}
