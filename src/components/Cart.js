import React from "react";
import { IMG_CDN_URL } from "../config";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItemFromCart } from "../utils/redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const itemQuantityMap = items.reduce((accumulator, item) => {
    accumulator[item.name] = accumulator[item.name] || { ...item, quantity: 0 };
    accumulator[item.name].quantity++;
    return accumulator;
  }, {});

  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const onClickCheckOut = () => {
    alert("Congratulations! Your order has been successfully placed");
  }

  if (items.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/2xempty_cart_yfxml0"
            alt="Empty Cart"
            className="mb-8"
          />
          <p className="mb-4 text-lg font-semibold">Your cart is empty</p>
          <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none">
            <Link to="/">See restaurants near you</Link>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ background: "#E9ECEE" }}>
        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="lg:col-span-8 bg-white text-black"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                <li className="p-4 flex justify-end">
                  {/* <p>Hotel Image</p>
                  <p>Hotel NAme</p>
                  <p>Hotel Location</p> */}
                  {/* In next updated will add Hotel image . name and Location */}
                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={handleClearCart}
                  >
                    Remove All
                  </button>
                </li>

                {Object.values(itemQuantityMap).map((item) => (
                  <div key={item.id} className="px-4">
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          className="h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38"
                          src={`${IMG_CDN_URL}${item.imageId}`}
                          alt={item.name}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="font-medium text-sm text-black sm:text-lg">
                                {item.name} [&#x2715; {item.quantity}]
                              </h3>
                            </div>
                            <div className="mt-1 flex items-end">
                              <p className="text-sm font-medium text-black">
                                ₹ {item.price / 100}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p
                        className="text-red-600 cursor-pointer font-bold"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </p>
                    </li>
                  </div>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium"
              >
                Price Details
              </h2>

              <div>
                <dl className=" space-y-1  px-6 py-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Item Total</dt>
                    <dd className="text-sm font-medium">
                      ₹ {totalPrice / 100}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-sm">Govt Taxes & Other Charges</dt>
                    <dd className="text-sm font-medium">
                      ₹ {((totalPrice / 100) * 0.05).toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="flex text-sm">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700 dark:text-green-400">
                      Free
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4 border-y border-dashed ">
                    <dt className="text-base font-medium">Total Amount</dt>
                    <dd className="text-base font-medium">
                      ₹{" "}
                      {(
                        Number(totalPrice / 100) +
                        Number(((totalPrice / 100) * 0.05).toFixed(2))
                      ).toFixed(2)}
                    </dd>
                  </div>
                </dl>
                <div className="px-6 pb-4">
                  <button className="bg-green-400 w-full text-white p-3 font-bold" onClick={onClickCheckOut}>
                    Checkout
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
