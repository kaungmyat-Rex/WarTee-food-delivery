import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="main-nav">
      <div className="main-logo">
        <img className="logo-image" src={logo} alt="logo" />
        <h3 className="logo-text">
          WAR TEE <br />
          <span className="logo-text-minor">fast food delivery</span>
        </h3>
      </div>
      <div className="main-menu">
        <ul className="main-menu-ul">
          <li>Home</li>
          <li>Menu List</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="main-icon">
        <ul className="main-icon-ul">
          <li>
            <BiSearchAlt className="search-icon" />
          </li>
          <li>
            <BiShoppingBag className="shop-icon" />
          </li>
          <li>
            <div className="language">
              <div className="english">
                <span>En</span>
              </div>
              <div className="burmese">
                <span>Bm</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;