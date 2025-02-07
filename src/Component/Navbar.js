import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import "./common.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-cont">
      <NavLink to="/">
        <CiShop className="icon" />
      </NavLink>

      <div className="navbar-2-cont">
        <p>home</p>
        <NavLink to="/cart">
          <FaCartArrowDown className="icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
