import { useDispatch } from "react-redux";
import { addItem } from "../utils/grocerySlice";

// name , price , description

const GroceryCard = ({ resData }) => {
  const dispatch = useDispatch();
  const { image, name,  rating, originalPrice } = resData;
  const handleAddItem = (resData) => {
    dispatch(addItem(resData));
  };
  return (
    <div className="flex flex-row">
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-[420px]">
        <img className="rounded-lg" src={image} alt="res-logo" />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        {/* <h4>{description}</h4> */}
        <h4 className="">{rating} Stars</h4>
        <h4 className="">₹{originalPrice}</h4>
        <button
          className="p-2 rounded-2xl bg-amber-300 w-full mt-5 cursor-pointer"
          onClick={() => handleAddItem(resData)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default GroceryCard;

// const RestaurantCard = ({ resData }) => {
//   const { name, cuisines, avgRating, costForTwo } = resData?.info;
//   const { deliveryTime } = resData?.info?.sla;
//   // const { loggedInUser } = useContext(UserContext);
//   return (
//     <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-[550px]">
//       <img
//         className="rounded-lg"
//         src={CDN_URL + resData.info.cloudinaryImageId}
//         alt="res-logo"
//       />
//       <h3 className="font-bold py-4 text-lg">{name}</h3>
//       <h4>{cuisines.join(" ")}</h4>
//       <h4>{avgRating} Stars</h4>
//       <h4>{costForTwo}</h4>
//       <h4>{deliveryTime} minutes</h4>
//       {/* <h4>user : {loggedInUser}</h4> */}
//     </div>
//   );
// };
