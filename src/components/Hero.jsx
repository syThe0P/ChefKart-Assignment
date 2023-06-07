import React from "react";
import "./hero.css";
import backArrow from "../assets/backArrow.svg";
import image from "../assets/image.png";
import date from "../assets/date.svg";
import time from "../assets/time.svg";
import Path from "../assets/Path.svg";
import Group2 from "../assets/Group2.svg";
const hero = () => {
  return (
    <div className="hero">
      <div className="top1">
        <a className="backArrow" href="/">
          <img src={backArrow} alt="backarow" />
        </a>
        <span className="text">Select Dishes</span>
      </div>

      <div className="middle1"></div>

      <div className="box">
        <div className="date">
          <img className="date-logo" src={date} alt="date" />
          <span className="date-text">21 May 2021</span>
        </div>
        <div class="vl"></div>
        <div className="time">
          <img className="time-logo" src={time} alt="time" />
          <span className="time-text">10:30 Pm-12:30 Pm</span>
        </div>
      </div>

      <div className="bottom">
        <div className="category">
          <button className="category-btn-main">Indian</button>
          <button className="category-btn">Indian</button>
          <button className="category-btn">Indian</button>
          <button className="category-btn">Indian</button>
        </div>
      </div>

      <div className="dishes-section">
        <p className="dishes-section-text">Popular Dishes</p>
        <div className="populer-dishes">
          <div className="dishes">
            <img src={image} alt="Group" />
            <div class="overlay">
              <div class="text-dishes">
                <p>Biryani</p>
              </div>
            </div>
          </div>
          <div className="dishes">
            <img src={image} alt="Group" />
            <div class="overlay">
              <div class="text-dishes">
                <p>Biryani</p>
              </div>
            </div>
          </div>
          <div className="dishes">
            <img src={image} alt="Group" />
            <div class="overlay">
              <div class="text-dishes">
                <p>Biryani</p>
              </div>
            </div>
          </div>
          <div className="dishes">
            <img src={image} alt="Group" />
            <div class="overlay">
              <div class="text-dishes">
                <p>Biryani</p>
              </div>
            </div>
          </div>
          <div className="dishes">
            <img src={image} alt="Group" />
            <div class="overlay">
              <div class="text-dishes">
                <p>Biryani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-11"/>
      <div className="top-listItems">
        <div className="top-listItems-left">
          <p className="top-listItems-text">Recommended</p>
          <img className="top-listItems-img" src={Path} alt="path" />
        </div>
        <div className="top-listItems-right">
          <button className="top-listItems-right_btn">Menu</button>
        </div>
      </div>
      <button class="floating-button">
        <img src={Group2} alt="Group2" />
        <span className="btn-text">3 Food Item Selected </span>
        <span>  &#8594; </span>
      </button>
    </div>
  );
};

export default hero;
