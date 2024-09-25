import React from "react";
import "./HeroImage.css";

const HeroImage = (props) => {
  return (
    <div
      className="full-width-container"
      style={{
        background: `url(${props.bgImage}) no-repeat bottom center/cover`,
        height: "80vh"
      }}
    >
        <div className="banner-content">
            <h1 className="heading-primary">{props.heading}</h1>
            <p className="text-white">{props.text}</p>
        </div>
    </div>
  );
};

export default HeroImage;