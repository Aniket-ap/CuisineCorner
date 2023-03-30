import React from "react";
import { IMG_CDN_URL } from "../../config";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/redux/slices/cartSlice";

const RestaurantMenuCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item?.card?.info));
  };

  return (
    <>
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[420px] h-auto m-5 p-5 cursor-pointer hover:transform hover:scale-105 transition duration-500">
        <div className="w-3/4 px-4 py-2">
          <h3 className="text-lg font-semibold mb-1">{item?.card?.info?.name}</h3>
          <span className="text-sm font-medium text-gray-300">
            ₹{Math.round(item?.card?.info?.price / 100)}
          </span>
          <div>
            <button onClick={() => handleAddItem()}>Add Item</button>
          </div>
        </div>
        <div className="w-1/4 relative">
          <img
            src={`${IMG_CDN_URL}${item?.card?.info?.imageId}`}
            alt="Food Image"
            className="w-full h-24  object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuCard;
