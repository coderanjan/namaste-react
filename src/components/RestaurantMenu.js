import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestraunt";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const  [showIndex,setShowIndex] = useState(0)
  const { resId } = useParams();

  const data = useRestaurantMenu(resId);

  if (data === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    data?.data?.cards[2]?.card?.card.info;
  const { itemCards } =
    data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const categories =
    data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {/* controlled component */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
