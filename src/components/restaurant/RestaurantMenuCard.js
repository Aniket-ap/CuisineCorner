import React from "react";
import { IMG_CDN_URL } from "../../config";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/redux/slices/cartSlice";
import AddRemoveItem from "./AddRemoveItem";

const RestaurantMenuCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item?.card?.info));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item?.card?.info));
  };

  return (
    <>
      <div class="grid grid-cols-6 justify-center p-2 gap-2 m-2 border-b">
        <div class="col-span-5">
          <span class="font-bold">{item?.card?.info?.name}</span>
          <br />
          <span>₹{Math.round(item?.card?.info?.price / 100)}</span>
          <br />
          <span class="font-small text-sm text-slate-500 font-sans"></span>
        </div>
        <div class="relative justify-self-end ">
          <img
            class="w-[118] rounded-md h-[96] object-cover"
            src={`${IMG_CDN_URL}${item?.card?.info?.imageId}`}
            alt="item"
          />
          <AddRemoveItem
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuCard;
