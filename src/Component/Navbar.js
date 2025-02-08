import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import "./common.css";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.value);

  return (
    <div className="navbar-cont">
      <NavLink to="/">
        <CiShop className="icon" />
      </NavLink>

      <div className="navbar-2-cont">
        <p>
          {location.pathname == "/"
            ? "home"
            : location.pathname.split("/").at(-1)}
        </p>
        <NavLink to="/cart" className="nav-cart-cont">
          <FaCartArrowDown className="icon" />
          <p>{cartItems.length > 0 ? cartItems.length : null}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
