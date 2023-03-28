import React from "react";
import { IMG_CDN_URL } from "../../config";

const RestaurantDetailsHeader = ({ restaurantDetails }) => {
  return (
    <>
      <div className="bg-orange-800 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
            <img
              src={`${IMG_CDN_URL}${restaurantDetails.cloudinaryImageId}`}
              alt="Food Name"
              className="w-full h-60 object-contain"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5 px-4">
            <h2 className="text-white text-3xl font-bold mb-4">
              {restaurantDetails ? restaurantDetails.name : ""}
            </h2>
            <div className="flex mb-4">
              <span className="text-white mr-2">Ratings:</span>
              <span className="text-white ml-1">
                {restaurantDetails.avgRating}
              </span>
            </div>
            <div className="flex mb-4">
              <span className="text-white mr-2">Cuisine:</span>
              <span className="text-white">
                {restaurantDetails.cuisines.join(", ")}
              </span>
            </div>
            <div className="flex mb-4">
              <span className="text-white mr-2">Cost For Two People:</span>
              <span className="text-white">
                {restaurantDetails.costForTwoMessage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetailsHeader;
