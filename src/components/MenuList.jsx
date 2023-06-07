import React from "react";
import "./menuList.css";
// import Path from "../assets/Path.svg";
import Mask from "../assets/image.png";
import Group from "../assets/Group.svg";
import Group1 from "../assets/Group1.svg";
import star from "../assets/star.svg";
import {Link } from "react-router-dom"
function MenuList(props) {
  return (
    <div className="RestrauntList">
      {/* <div className="listItems">
       
        </div> */}
        <div className="cardItems">
          <div class="card">
            <div class="card-content">
              <div class="text-content">
                <div className="text-top-content">
                  <h2 class="card-heading">{props.name}</h2>
                  <img src={Group} alt="group" className="top-content-img1" />
                  <div className="star-rating">
                    <span>{props.rating}</span>
                    <img src={star} alt="Star" className="top-content-img2" />
                  </div>
                </div>
                <div className="text-middle-content">
                  <img
                    src={Group1}
                    alt="Group1"
                    className="middle-content-img1"
                  />
                  <img
                    src={Group1}
                    alt="Group1"
                    className="middle-content-img2"
                  />
                  <div class="vl"></div>
                  <span className="middle-content-text">
                    <Link to='/ingredient' style={{textDecoration:'none', color:'inherit'}}>Ingredients</Link>
                  </span>
                </div>
                <p class="text-bottom-content">
                 {props.description}
                </p>
              </div>
              <div class="image-content">
                <img src={Mask} alt="mask" />
                <button class="card-button">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default MenuList;
