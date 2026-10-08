import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
  // const {setUserName,loggedInUser} = useContext(UserContext)
  //local state variable - super powerful variable
  //normal js variable
  const arr = useState([]);
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  //whenever state variable update , react triggers a reconciliation cycle (re-rendering the component)
  const [searchText, setSearchText] = useState("");
  const [filterRestro, setFilterRestro] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.925483&lng=77.5500071&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();

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
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return <h1>looks like you are offline !!! please check your internet</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log("change");
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-2lg cursor-pointer"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              //filter logic here

              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setFilterRestro(filteredList);
              console.log(listOfRestaurants);
            }}
          >
          Top Rated Restaurants
          </button>
        </div>
        {/* <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} type="text" className="border border-black p-2" />
        </div> */}
      </div>

      <div className="flex flex-wrap ">
        {filterRestro.map((restaurant, index) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
