import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

import car1 from "../assets/images/dashboardImage/carousel/25_yrs_logo.jpg";
import car2 from "../assets/images/dashboardImage/carousel/+2 25 yrs.jpg";
import car3 from "../assets/images/dashboardImage/carousel/Science.jpg";
import car4 from "../assets/images/dashboardImage/carousel/Law1.jpg";
import car5 from "../assets/images/dashboardImage/carousel/Mgmt.jpg";
import car6 from "../assets/images/dashboardImage/carousel/WEB_1.jpg";

const DashboardCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item content="center">
        <img height={600} className="d-block w-100" src={car1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={600} className="d-block w-100" src={car2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={600} className="d-block w-100" src={car3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={600} className="d-block w-100" src={car4} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={600} className="d-block w-100" src={car5} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img height={600} className="d-block w-100" src={car6} alt="" />
      </Carousel.Item>
    </Carousel>
  );
};

export default DashboardCarousel;
