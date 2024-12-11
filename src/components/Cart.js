import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m-4 p-4 text-center ">
      <h1 className="text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClick}
          className="p-2 m-2 bg-black text-white rounded-lg"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-gray-600">
            Cart is empty. Add items to the cart!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
