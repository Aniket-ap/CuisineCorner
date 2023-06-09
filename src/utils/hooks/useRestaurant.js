import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://kitchenkorner.onrender.com/restaurant-details/${resId}`
    );
    const json = await data.json();
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    // type.googleapis.com/swiggy.presentation.food.v2.ItemCategory
    const filterItemCategory =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c, i) => {
          return (
            c.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );
    setRestaurantMenu(filterItemCategory[0]?.card?.card?.itemCards);
  }

  return [restaurantDetails, restaurantMenu];
};

export default useRestaurant;
