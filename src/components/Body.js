import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../config";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const onChangeInput = (e) => {
    setSearchText(e.target.value);
  };

  function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
  }

  return (
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
            setListOfRestraunt(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
