import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { BiSearchAlt } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { BiDish } from "react-icons/bi";
import { Burmese } from "../component/Burmese";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: [];
  setAddtocartList: any;
  addtocartList: any;
  addNoti: boolean;
}

const Menu = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
  addNoti,
}: props) => {
  const [menusearchinput, setMenusearchinput] = useState<string>("");
  const [filterData, setFilterData] = useState<any>(productData);
  const [inputmenuCheck, setinputmenuCheck] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (menusearchinput === "") {
      setinputmenuCheck(false);
    } else {
      setinputmenuCheck(true);
    }
  }, [menusearchinput]);

  const findFilterBurgar = () => {
    setFilterData(
      productData.filter((e: any) =>
        e.typeFood.toLowerCase().includes("burgar")
      )
    );
  };

  const findFilterPizza = () => {
    setFilterData(
      productData.filter((e: any) => e.typeFood.toLowerCase().includes("pizza"))
    );
  };

  const findFilterDrink = () => {
    setFilterData(
      productData.filter((e: any) => e.typeFood.toLowerCase().includes("tea"))
    );
  };

  return (
    <div className="section-menu">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
        setAddtocartList={setAddtocartList}
        addtocartList={addtocartList}
        addNoti={addNoti}
      />
      <div className="menu-title-main">
        <h4 className="menu-title">
          {language ? Burmese[0].menuTitle : "OUR MENU"}
        </h4>
      </div>
      <div className="menu-search-main">
        <div className="menu-search">
          <input
            type="text"
            className="search"
            onChange={(e) => setMenusearchinput(e.target.value)}
            value={menusearchinput}
            placeholder={language ? Burmese[0].search : "search menu"}
          />
          <BiSearchAlt className="search-menu-icon" />
        </div>
        <div className="menu-filter">
          <div
            className="menu-filter-one"
            onClick={() => setFilterData(productData)}
          >
            <BiDish className="filter-icon-one" />
            <p className="filter-name-one">
              {language ? Burmese[0].filter1 : "Default"}
            </p>
          </div>
          <div className="menu-filter-two" onClick={() => findFilterBurgar()}>
            <FaHamburger className="filter-icon-two" />
            <p className="filter-name-two">
              {language ? Burmese[0].filter2 : "Burger"}
            </p>
          </div>
          <div className="menu-filter-three" onClick={() => findFilterPizza()}>
            <FaPizzaSlice className="filter-icon-three" />
            <p className="filter-name-three">
              {language ? Burmese[0].filter3 : "Pizza"}
            </p>
          </div>
          <div className="menu-filter-four" onClick={() => findFilterDrink()}>
            <SiBuymeacoffee className="filter-icon-four" />
            <p className="filter-name-four">
              {language ? Burmese[0].filter4 : "Drink"}
            </p>
          </div>
        </div>
      </div>
      <div className="menupage-list-main">
        <div className="menupage-list-boder">
          <div className="menupage-list-body">
            {inputmenuCheck
              ? productData
                  .filter((e: any) =>
                    e.typeFood
                      .toLowerCase()
                      .includes(menusearchinput.toLowerCase())
                  )
                  .map((e: any) => (
                    <div
                      className="menupage-list"
                      key={e._id}
                      onClick={() => navigate(`/menu/${e._id}`)}
                    >
                      <img className="menupage-img" src={e.imageLink} alt="" />
                      <img className="menupage-logo" src={logo} alt="" />
                      <div className="menupage-info">
                        <div className="menupage-text">
                          <p className="mp-name">{e.typeFood}</p>
                          <p className="mp-price">{e.price} Ks</p>
                        </div>
                        <div className="mp-add">
                          <BiShoppingBag
                            className="mp-add-icon"
                            onClick={() => navigate(`/menu/${e._id}`)}
                          />
                        </div>
                      </div>
                    </div>
                  ))
              : filterData.map((e: any) => (
                  <div
                    className="menupage-list"
                    key={e._id}
                    onClick={() => navigate(`/menu/${e._id}`)}
                  >
                    <img className="menupage-img" src={e.imageLink} alt="" />
                    <img className="menupage-logo" src={logo} alt="" />
                    <div className="menupage-info">
                      <div className="menupage-text">
                        <p className="mp-name">{e.typeFood}</p>
                        <p className="mp-price">{e.price} Ks</p>
                      </div>
                      <div className="mp-add">
                        <BiShoppingBag
                          className="mp-add-icon"
                          onClick={() => navigate(`/menu/${e._id}`)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
