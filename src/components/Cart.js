import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart Items</h1>
      <h2>Cart Items length = {items.length}</h2>
      {items.length > 0 ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      ) : null}
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price/100}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
