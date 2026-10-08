import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Footer = () => {
  return (
    <div className="bg-amber-100">
      
      <div className="flex items-center justify-around">
        <div className="flex items-center gap-5">
          <img src={LOGO_URL} className="w-30" />
          <h1 className="text-2xl">FoodNest</h1>
        </div>
        <h1 className="my-5">Good food,delivered to your door</h1>
        <div className="flex gap-5">
          <Link
            to="/"
            className="hover:underline hover:decoration-amber-500 underline-offset-8"
          >
            home
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:decoration-amber-500 underline-offset-8"
          >
            about
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:decoration-amber-500 underline-offset-8"
          >
            contact
          </Link>
          <Link
            to="grocery"
            className="hover:underline hover:decoration-amber-500 underline-offset-8"
          >
            grocery
          </Link>
        </div>
      </div>
      <hr />
      <div className="text-center">@2026 FoodNest All rights reserved</div>
    </div>
  );
};

export default Footer;
