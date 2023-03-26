import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState({});
  const [name, setName] = useState("");
  const params = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5925306&lng=88.2953339&restaurantId=${params.id}`
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info?.name);
    console.log(json?.data);
    setRestaurant(json?.data);
    setName(json?.data?.cards[0]?.card?.card?.info?.name);
  }

  return (
    <div>
      <h1>RestaurantMenu {name ? name : ""}</h1>
    </div>
  );
};

export default RestaurantMenu;
