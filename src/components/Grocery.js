import { useEffect, useState } from "react";
import GroceryCard from "./GroceryCard";
import Shimmer from "./Shimmer";

const Grocery = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const info = await fetch(
      "https://grocery-delivery-server-nu.vercel.app/api/products?page=1&limit=12",
    );
    const json = await info.json();
    setData(json);
  };

  return data ? (
    <div className="flex flex-wrap m-10">
      {data.products.map((item, index) => (
        <GroceryCard resData={item} key={index} />
      ))}
    </div>
  ) : (
    <Shimmer />
  );
};
export default Grocery;
