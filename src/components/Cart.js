import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
import GroceryItem from "./GroceryItem";

const Cart = () => {
  const [addShow, SetAddShow] = useState(true);
  const cartItems = useSelector((store) => store.cart.items);
  const cartgrocery = useSelector((store) => store.grocery.items);
  // const dispatch = useDispatch();
  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/12 m-auto">
        {/* <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-black text-white rounded-lg"
        >
          clear cart
        </button> */}
        {/* {cartItems.length === 0 && <h1>cart is empty add items to the cart</h1>} */}
        <ItemList items={cartItems} show={addShow} />
        <GroceryItem items={cartgrocery} />
      </div>
    </div>
  );
};

export default Cart;
