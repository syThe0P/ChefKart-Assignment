import React from "react";
import backArrow from "../assets/backArrow.svg";
import "./hero2.css";
import { Link } from "react-router-dom";
import star from "../assets/star.svg";
import time from "../assets/time.svg";
import ing1 from "../assets/ing1.png";
import ing2 from "../assets/ing2.png";
const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="top">
        <Link to="/">
          <img src={backArrow} alt="backarow" />
        </Link>
      </div>
      <div className="middle">
        <div className="leftComponent">
          <div className="middle-top">
            <div style={{display:'flex', alignItems:'center'}}>
              <span className="middle-top-text">Masala Muglai</span>
              <div className="star-rating">
                <span>4.2</span>
                <img src={star} alt="Star" className="star-rating-img" />
              </div>
            </div>
          </div>
          <div className="middle-middle">
            <p className="middle-middle-text">
              Mughlai Masala is a style of cookery developed in the india
              subcontinent by the imperial kitchens of the Mughal Empire
            </p>
          </div>
          <div className="middle-bottom">
            <img src={time} alt="time" className="middle-bottom-img" />
            <span className="middle-bottom-text">1 Hour</span>
          </div>
        </div>
        <div className="rightComponent">
          
        </div>
        <div className="image-container">
          <img src={ing1} alt="ing1" class="background-image"></img>
          <img src={ing2} alt="ing2" class="foreground-image"></img>
        </div>
      </div>
      <hr className="hr-hero2" />
    </div>
  );
};

export default Hero2;
