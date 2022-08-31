import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="main-nav">
      <div className="main-logo">
        <h5>WarTee</h5>
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
              <div className="english">En</div>
              <div className="burmese">Bm</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
