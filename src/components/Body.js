import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resList from "../config";
import Loader from "./Loader";
import RestaurantCard from "./RestaurantCard";
import {filterData} from "../utils/helper"
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.552082&lng=88.351584&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  }

  const onChangeInput = (e) => {
    setSearchText(e.target.value);
  };

  const isOnline = useOnline()
  if(!isOnline){
    return <h1>🔴 Offline, please check your internet connection</h1>
  }

  return listOfRestaurants.length === 0 ? (
    <div className="shimmer-container">
      {Array.from({ length: 10 }, (_, i) => (
        <Loader key={i} />
      ))}
    </div>
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={onChangeInput}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, listOfRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
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
