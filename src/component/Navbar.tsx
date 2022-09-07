import { BiSearchAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../img/logo.png";
import { Burmese } from "./Burmese";

interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
}

const Navbar = ({ language, setLanguage }: props) => {
  console.log(Burmese[0].menuList1);

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
          <li>{language ? Burmese[0].menuList1 : "Home"}</li>
          <li>{language ? Burmese[0].menuList2 : "Menu List"}</li>
          <li>{language ? Burmese[0].menuList3 : "About Us"}</li>
          <li>{language ? Burmese[0].menuList4 : "Contact"}</li>
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
                onClick={() => setLanguage(false)}
              >
                <span>En</span>
              </div>
              <div
                className={`burmese ${language ? "" : "burmese-hide"}`}
                onClick={() => setLanguage(true)}
              >
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
