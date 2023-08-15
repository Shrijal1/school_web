import React from "react";
import "../assets/scss/pageHero.scss";
import rivieraVideo from "../assets/videos/rivieraVideo.mp4";

const PagesHero = ({ href }) => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video
        className="pageVideo"
        src={rivieraVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className="content">
        <h1>{href}</h1>
      </div>
    </div>
  );
};

export default PagesHero;
