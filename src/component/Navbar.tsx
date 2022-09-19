import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import logo from "../img/logo.png";
import { Burmese } from "./Burmese";
import { Link } from "react-router-dom";

import { props } from "../component/interface";

const Navbar = ({ language, setLanguage }: props) => {
  const [infobox, setInfobox] = useState<boolean>(false);

  const backtofalse = (): void => {
    setInfobox(false);
  };

  const chageToEng = (): void => {
    setLanguage(false);
    setInfobox(true);
    setTimeout(backtofalse, 3000);
  };

  const chageToBm = (): void => {
    setLanguage(true);
    setInfobox(true);
    setTimeout(backtofalse, 3000);
  };

  return (
    <div className="main-nav">
      <div className="main-logo">
        <img className="logo-image" src={logo} alt="logo" />
        <h3 className="logo-text">
          {language ? Burmese[0].logoName : "WAR TEE"}
          <br />
          <span
            className={`logo-text-minor ${
              language ? "logo-text-minor-fit" : ""
            }`}
          >
            {language ? Burmese[0].miniText : "fast food delivery"}
          </span>
        </h3>
      </div>
      <div className="main-menu">
        <ul className="main-menu-ul">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>{language ? Burmese[0].menuList1 : "Home"}</li>
          </Link>
          <Link to={"/menu"} style={{ textDecoration: "none" }}>
            <li>{language ? Burmese[0].menuList2 : "Menu List"}</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <li>{language ? Burmese[0].menuList3 : "About Us"}</li>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <li>{language ? Burmese[0].menuList4 : "Contact"}</li>
          </Link>
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
              <div
                className={`english ${language ? "english-hide" : ""}`}
                onClick={() => chageToEng()}
              >
                <span>En</span>
              </div>
              <div
                className={`burmese ${language ? "" : "burmese-hide"}`}
                onClick={() => chageToBm()}
              >
                <span>Bm</span>
              </div>
            </div>
          </li>
        </ul>
        <div className={`language-info ${infobox ? "language-info-show" : ""}`}>
          <FaInfoCircle className="lg-icon" />

          <p>
            Website language change to{" "}
            <span
              style={{ color: "#3d1d15", fontWeight: "900", fontSize: "16px" }}
            >
              {language ? "Burmese" : "English"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
