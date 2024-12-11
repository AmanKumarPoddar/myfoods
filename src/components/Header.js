import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  // useEffect(() => {
  //   alert("useEffect triggered");
  // }, [btnNameReact]);
  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center mx-1 my-0 bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-3">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-3">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-3 font-bold text-xl">
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            onClick={function () {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            className="login"
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
