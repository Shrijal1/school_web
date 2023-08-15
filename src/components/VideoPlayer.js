import React from "react";
import "../assets/scss/video.scss";
import rivieraVideo from "../assets/videos/rivieraVideo.mp4";

const VideoPlayer = () => {
  return (
    <div className="video_main">
      <video src={rivieraVideo} autoPlay loop muted></video>
    </div>
  );
};

export default VideoPlayer;
