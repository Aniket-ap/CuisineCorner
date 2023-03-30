import React, { useState } from "react";

const AddRemoveItem = ({ handleRemoveItem, handleAddItem }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div class="text-center w-[118] mt-1 border-2 rounded-md">
        <button
          class="text-gray-800 font-extrabold px-3"
          onClick={() => {
            handleRemoveItem();
            if (count > 0) {
              setCount((count) => count - 1);
            }
          }}
        >
          -
        </button>
        <button
          class="text-green-800 font-bold px-2 m-1 text-sm border-x-2 align-middle"
          disabled=""
        >
          {count}
        </button>
        <button
          class="text-green-800 font-extrabold px-3"
          onClick={() => {
            handleAddItem();
            setCount((count) => count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default AddRemoveItem;
