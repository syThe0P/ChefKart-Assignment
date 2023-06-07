import React from "react";
import Hero from "../components/Hero";
import MenuList from "../components/MenuList";
import { dishes } from "../constant/data";
import "../components/menuList.css";

const FirstPage = () => {
  return (
    <>
      <div className="firstPage">
        <Hero />

        {dishes.map((dish) => (
          <MenuList
            name={dish.name}
            rating={dish.rating}
            description={dish.description}
            equipment={dish.equipment}
          />
        ))}
      </div>
    </>
  );
};

export default FirstPage;
