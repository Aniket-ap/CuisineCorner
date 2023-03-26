import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Loader from "./Loader";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const params = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5925306&lng=88.2953339&restaurantId=${params.id}`
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    // setRestaurantMenu(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
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
    // console.log(filterItemCategory[0]?.card?.card?.itemCards);
    setRestaurantMenu(filterItemCategory[0]?.card?.card?.itemCards);
  }

  return restaurantDetails.length === 0 ? (
    <div className="shimmer-container">
      {Array.from({ length: 5 }, (_, i) => (
        <Loader key={i} />
      ))}
    </div>
  ) : (
    <div className="res-details-container">
      <div className="res-details">
        <h1>{restaurantDetails ? restaurantDetails.name : ""}</h1>
        <img
          src={`${IMG_CDN_URL}${restaurantDetails.cloudinaryImageId}`}
          className="res-details-img"
          alt="res-img"
        />
        <p>Ratings: {restaurantDetails.avgRating}</p>
        <p>Cuisines: {restaurantDetails.cuisines.join(", ")}</p>
        <p>Cost For Two People: {restaurantDetails.costForTwoMessage}</p>
      </div>
      <div className="res-menu">
        {restaurantMenu &&
          restaurantMenu.map((r) => (
            <div key={r?.card?.info?.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <div>
                  <h4>{r?.card?.info?.name}</h4>
                  <h4>₹{Math.round(r?.card?.info?.price / 100)}</h4>
                  <p>{r?.card?.info?.description}</p>
                </div>
                <img
                  src={`${IMG_CDN_URL}${r?.card?.info?.imageId}`}
                  alt="menu-img"
                  style={{ width: "100px" }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
