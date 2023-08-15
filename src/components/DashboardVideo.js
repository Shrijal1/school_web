import React from "react";
import rivieraCollege from "../assets/videos/RivieraCollege.mp4";

const DashboardVideo = () => {
  return (
    <div>
      <div className="dashboard_Vid_Container">
        <video
          className="dashboard_Video"
          src={rivieraCollege}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default DashboardVideo;
