import React from "react";
import { IMG_CDN_URL } from "../../config";

const RestaurantMenuCard = ({ r }) => {
  return (
    <>
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[420px] h-auto m-5 p-5 cursor-pointer hover:transform hover:scale-105 transition duration-500">
        <div className="w-3/4 px-4 py-2">
          <h3 className="text-lg font-semibold mb-1">{r?.card?.info?.name}</h3>
          <span className="text-sm font-medium text-gray-300">
            ₹{Math.round(r?.card?.info?.price / 100)}
          </span>
        </div>
        <div className="w-1/4 relative">
          <img
            src={`${IMG_CDN_URL}${r?.card?.info?.imageId}`}
            alt="Food Image"
            className="w-full h-24  object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuCard;
