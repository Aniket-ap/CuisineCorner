import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import useRestaurant from "../utils/hooks/useRestaurant";
import RestaurantMenuCard from "./restaurant/RestaurantMenuCard";
import RestaurantDetailsHeader from "./restaurant/RestaurantDetailsHeader";

const RestaurantMenu = () => {
  const params = useParams();

  const [restaurantDetails, restaurantMenu] = useRestaurant(params.id);

  return restaurantDetails.length === 0 ? (
    <div className="shimmer-container">
      <div className="relative w-full h-80">
        <div className="absolute inset-0 bg-white dark:bg-gray-300 animate-pulse" />
      </div>

      {Array.from({ length: 5 }, (_, i) => (
        <Loader key={i} />
      ))}
    </div>
  ) : (
    <div>
      <RestaurantDetailsHeader restaurantDetails={restaurantDetails} />
      <div className="flex flex-wrap justify-center">
        {restaurantMenu &&
          restaurantMenu.map((r) => (
            <div key={r?.card?.info?.id}>
              <RestaurantMenuCard item={r} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
