import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //local state variable - super powerful variable
  //normal js variable
  const arr = useState([]);
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  //whenever state variable update , react triggers a reconciliation cycle (re-rendering the component)
  const [searchText, setSearchText] = useState("");
  const [filterRestro, setFilterRestro] = useState("");
  console.log("state render");

  useEffect(() => {
    fetchData();
    console.log("use effect render");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.925483&lng=77.5500071&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      //optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    setFilterRestro(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log("change");
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the ui

              const filterRestro = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilterRestro(filterRestro);
              setSearchText("");
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here

            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestro.map((restaurant, index) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
