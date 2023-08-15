import React from "react";
import "../assets/scss/scrollingImage.scss";

/* IMAGES IMPORT */
import pic1 from "../assets/images/gallery/award.jpg";
import pic2 from "../assets/images/gallery/3.jpg";
import pic3 from "../assets/images/gallery/5.jpg";
import pic4 from "../assets/images/gallery/19.jpg";
import pic5 from "../assets/images/gallery/26.jpg";
import pic6 from "../assets/images/gallery/27.jpg";
import pic7 from "../assets/images/gallery/30.jpg";
import pic8 from "../assets/images/gallery/31.jpg";
import pic9 from "../assets/images/gallery/32.jpg";
import pic10 from "../assets/images/gallery/33.jpg";
import pic11 from "../assets/images/gallery/34.jpg";
import pic12 from "../assets/images/gallery/big1.jpg";
import pic13 from "../assets/images/gallery/big2.jpg";
import pic14 from "../assets/images/gallery/big22.jpg";
import pic15 from "../assets/images/gallery/big23.jpg";
import pic16 from "../assets/images/gallery/big28.jpg";
import pic17 from "../assets/images/gallery/big32.jpg";
import pic18 from "../assets/images/gallery/Christmaskg.jpg";

const ScrollingImage = () => {
  return (
    <div className="imgSlider">
      <div className="img_slide_track">
        <div className="imgSlide">
          <img src={pic1} />
        </div>
        <div className="imgSlide">
          <img src={pic2} />
        </div>
        <div className="imgSlide">
          <img src={pic3} />
        </div>
        <div className="imgSlide">
          <img src={pic4} />
        </div>
        <div className="imgSlide">
          <img src={pic5} />
        </div>
        <div className="imgSlide">
          <img src={pic6} />
        </div>
        <div className="imgSlide">
          <img src={pic7} />
        </div>
        <div className="imgSlide">
          <img src={pic8} />
        </div>
        <div className="imgSlide">
          <img src={pic9} />
        </div>
        <div className="imgSlide">
          <img src={pic10} />
        </div>
        <div className="imgSlide">
          <img src={pic11} />
        </div>
        <div className="imgSlide">
          <img src={pic12} />
        </div>
        <div className="imgSlide">
          <img src={pic13} />
        </div>
        <div className="imgSlide">
          <img src={pic14} />
        </div>
        <div className="imgSlide">
          <img src={pic15} />
        </div>
        <div className="imgSlide">
          <img src={pic16} />
        </div>
        <div className="imgSlide">
          <img src={pic17} />
        </div>
        <div className="imgSlide">
          <img src={pic18} />
        </div>
      </div>
    </div>
  );
};

export default ScrollingImage;
