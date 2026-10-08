import { LOGO_URL } from "../utils/constant";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

const Header = () => {
  const OnlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // const { loggedInUser } = useContext(UserContext);
  // subscribing to the store using a selector
  // const cartItems = useSelector((store) => store.cart.items);

  // if no dependency array => useEffect is called on every render
  // if dependency is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
  useEffect(() => {}, [btnNameReact]);
  return (
    <div className="flex justify-between sm:bg-pink-300 bg-yellow-100 lg:bg-green-100 shadow-lg m-2 ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {/* <li className="px-4">online status:{OnlineStatus ? "✅" : "❌"} </li> */}
          <>
            <li className="px-4">
              <Link
                to="/"
                className="hover:underline hover:decoration-green-700 underline-offset-6"
              >
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/about"
                className="hover:underline hover:decoration-green-700 underline-offset-6"
              >
                About us
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/contact"
                className="hover:underline hover:decoration-green-700 underline-offset-6"
              >
                contact us
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/grocery"
                className="hover:underline hover:decoration-green-700 underline-offset-6"
              >
                grocery
              </Link>
            </li>
          </>
          <li className="px-4  text-xl">
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="lucide lucide-shopping-cart size-8 text-zinc-900"
                aria-hidden="true"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </Link>
          </li>
          {/* <button
            className="px-4"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button> */}
          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
