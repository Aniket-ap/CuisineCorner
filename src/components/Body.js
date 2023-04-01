import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import useOnline from "../utils/hooks/useOnline";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Api call
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://kitchenkorner.onrender.com/api/restaurants"
    );
    const json = await data.json();
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  }

  const onChangeInput = (e) => {
    setSearchText(e.target.value);
  };

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <div className="shimmer-container">
      {Array.from({ length: 10 }, (_, i) => (
        <Loader key={i} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col w-auto sm:mx-14 mt-5">
      <div className=" rounded-lg shadow p-4">
        <input
          type="text"
          className="py-1 px-2 mx-2 rounded-md border border-gray-400 text-sm leading-5 focus:outline-none focus:border-orange-500"
          placeholder="Search"
          value={searchText}
          onChange={onChangeInput}
        />
        <button
          className="py-1 px-3 rounded-md bg-orange-500 text-white text-sm leading-5 hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          onClick={() => {
            const data = filterData(searchText, listOfRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.length === 0 && <h1>No Product Found</h1>}
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.data.id}`}
            key={restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
