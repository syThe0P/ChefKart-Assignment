import React from "react";
import "./ingredient.css";
import Path from "../assets/Path.svg";
import Fridge from "../assets/Fridge.png";
const Ingredient = () => {
  return (
    <div className="ingredients">
      <div className="heading">
        <span className="title">Ingredients</span>
        <p className="title-text">For 2 People</p>
      </div>
      <hr />
      <div className="ingredient-cards">
        <div className="ingredient-items">
          <div className="ingredient-item-head">
            <span className="ingredient-item-heading">Vegetables(05)</span>
            <img src={Path} alt="path" />
          </div>
          <div className="ingredient">
            <span className="it">Cauliflower</span>
            <span className="qt">01 pc</span>
          </div>
          <div className="ingredient">
            <span className="it">Tomato</span>
            <span className="qt">10 pc</span>
          </div>
          <div className="ingredient">
            <span className="it">Spinach</span>
            <span className="qt">1/2 Kg</span>
          </div>
        </div>
        <div className="ingredient-items">
          <div className="ingredient-item-head">
            <span className="ingredient-item-heading">Spices(10)</span>
            <img src={Path} alt="path" />
          </div>
          <div className="ingredient">
            <span className="it">Coriander</span>
            <span className="qt">100 gram</span>
          </div>
          <div className="ingredient">
            <span className="it">Mustard Oil</span>
            <span className="qt">1/2 Litr</span>
          </div>
        </div>
        <div className="ingredient-items">
          <div className="ingredient-item-head">
            <span className="ingredient-item-heading2">Appliances</span>
          </div>
          <div className="ingredient2">
            <img src={Fridge} alt="Fridge" />

            <img src={Fridge} alt="Fridge" />

            <img src={Fridge} alt="Fridge" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
