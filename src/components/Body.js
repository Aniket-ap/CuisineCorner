import { useState, useEffect } from "react";
import resList from "../config";
import Loader from "./Loader";
import RestaurantCard from "./RestaurantCard";

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

  function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
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
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
