import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

interface props {
  modelNav: boolean;
  setModelNav: any;
}

const ModelNav = ({ modelNav, setModelNav }: props) => {
  return (
    <div className={`model-nav ${modelNav ? "model-nav-show" : ""}`}>
      <div className="model-nav-main">
        <div className="model-nav-boder">
          <AiOutlineClose
            className="model-nav-icon"
            onClick={() => setModelNav(false)}
          />
          <ul className="model-nav-ul">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              {" "}
              <li className="model-nav-home"> Home</li>
            </Link>
            <Link to={"/menu"} style={{ textDecoration: "none" }}>
              {" "}
              <li className="model-nav-menu">Menu List</li>
            </Link>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              {" "}
              <li className="model-nav-about">About Us</li>
            </Link>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              {" "}
              <li className="model-nav-contact">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModelNav;
