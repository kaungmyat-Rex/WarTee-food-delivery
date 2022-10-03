import { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { FaInfoCircle, FaSadCry } from "react-icons/fa";
import logo from "../img/logo.png";
import { Burmese } from "./Burmese";
import { Link, useNavigate } from "react-router-dom";

interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: any;
  setAddtocartList: any;
  addtocartList: any;
}

const Navbar = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
}: props) => {
  const [infobox, setInfobox] = useState<boolean>(false);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [serarchInput, setSearchInput] = useState<string>("");
  const [searchInputCheck, setSearchInputCheck] = useState<boolean>(false);
  const [checkaddtocart, setCheckaddtocart] = useState<boolean>(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

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

  const searchActiveFun = (): void => {
    setSearchActive(true);
    inputRef.current.focus();
  };

  const searchActiveFunOut = (): void => {
    if (serarchInput == "") {
      setSearchActive(false);
      setSearchInputCheck(false);
    }
  };

  useEffect(() => {
    if (serarchInput === "") {
      setSearchInputCheck(false);
    } else {
      setSearchInputCheck(true);
    }
  }, [serarchInput]);

  useEffect(() => {
    if (addtocartList.length === 0) {
      setCheckaddtocart(false);
    } else {
      setCheckaddtocart(true);
    }
  }, [addtocartList]);

  // console.log(productData.filter((e: any) => e.typeFood === "Chicken Burgar"));
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
            <BiSearchAlt
              className="search-icon"
              onClick={() => searchActiveFun()}
            />
            <input
              type="text"
              placeholder="Search Foods"
              value={serarchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onBlur={() => searchActiveFunOut()}
              ref={inputRef}
              className={`nav-search-bar ${
                searchActive ? "nav-search-bar-show" : ""
              }`}
            />
            <div
              className={`search-box-main ${
                searchInputCheck ? "searh-box-main-show" : ""
              }`}
            >
              {productData
                .filter((e: any) => {
                  if (
                    e.typeFood
                      .toLowerCase()
                      .includes(serarchInput.toLowerCase())
                  ) {
                    return e;
                  }
                })
                .map((e: any) => (
                  <div className="search-box-list" key={e._id}>
                    <img className="search-box-img" src={e.imageLink} alt="" />
                    <div className="search-box-info">
                      <p className="search-box-name">{e.typeFood}</p>
                      <p className="search-box-price">{e.price} Ks</p>
                    </div>
                  </div>
                ))}
              <div className="seemore">
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/menu")}
                >
                  see more review --
                </p>
              </div>
            </div>
          </li>
          <li>
            <Link to={"/addtocart"} style={{ position: "relative" }}>
              <BiShoppingBag className="shop-icon" />
              <p
                className={`addtocart-show ${
                  checkaddtocart ? "addtocart-showDisplay" : ""
                }`}
              >
                {addtocartList.length}
              </p>
            </Link>
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
