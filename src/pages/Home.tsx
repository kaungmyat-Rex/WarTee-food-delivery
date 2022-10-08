import React, { useState } from "react";
import Navbar from "../component/Navbar";
import burgur from "../img/burgur.png";
import bubble from "../img/Bubble_Tea.png";
import pizza from "../img/Pizza1.png";
import blob from "../img/blob.svg";
import blob2 from "../img/blob2.svg";
import blob3 from "../img/blob3.svg";
import logo from "../img/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { fakeproduct } from "../component/testApi";
import { BiShoppingBag } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { BiTime } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import pointer from "../img/point.png";
import pointer2 from "../img/pointer2.png";
import Footer from "../component/Footer";
import { Burmese } from "../component/Burmese";
import { useNavigate, Link } from "react-router-dom";

interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: [];
  setAddtocartList: any;
  addtocartList: any;
  addNoti: boolean;
}

const Home = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
  addNoti,
}: props) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
        setAddtocartList={setAddtocartList}
        addtocartList={addtocartList}
        addNoti={addNoti}
      />

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="main-body">
            <div className="bd-section-image">
              <img className="burgur" src={burgur} alt="burgur" />
              <img className="bgImage" src={blob} alt="blob" />
            </div>
            <div className="bd-section-text">
              <h4 className="text-itemName">
                {language ? Burmese[0].itemList1 : "Chicken Burgur"}
              </h4>
              <p className="text-itemPrice">
                {language ? Burmese[0].priceBm1 : "2500 Ks"}
              </p>
              <button className="button-3">
                {" "}
                <span>{language ? Burmese[0].buttonBm : "Order Now"}</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="main-body-two">
            <div className="bd-section-image-two">
              <img className="bubble" src={bubble} alt="bubble" />
              <img className="bgImage2" src={blob2} alt="blob" />
            </div>
            <div className="bd-section-text-two">
              <h4 className="text-itemName-two">
                {language ? Burmese[0].itemList2 : "Bubble Tea"}
              </h4>
              <p className="text-itemPrice-two">
                {language ? Burmese[0].priceBm2 : "1500 Ks"}
              </p>
              <button className="button-3-two">
                {" "}
                <span>{language ? Burmese[0].buttonBm : "Order Now"}</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="main-body-three">
            <div className="bd-section-image-three">
              <img className="pizza" src={pizza} alt="pizza" />
              <img className="bgImage3" src={blob3} alt="blob3" />
            </div>
            <div className="bd-section-text-three">
              <h4 className="text-itemName-three">
                {language ? Burmese[0].itemList3 : "Chicken Pizza"}
              </h4>
              <p className="text-itemPrice-three">
                {language ? Burmese[0].priceBm3 : "6000 Ks"}
              </p>
              <button className="button-3-three">
                {" "}
                <span>{language ? Burmese[0].buttonBm : "Order Now"}</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="section-feature-product">
        <div className="section-feature-product-boder">
          <div className="section-feature-title">
            <h4 className="feature-title">
              {language ? Burmese[0].title1 : "FEATURE MENU OF WARTEE"}
            </h4>
            <Link to={"/menu"}>
              {" "}
              <p className="menu-seemore">see more</p>
            </Link>
          </div>
          <div className="section-product-main">
            <div className="product-list">
              {productData.slice(-4).map((e: any) => (
                <div
                  className="product-main"
                  key={e._id}
                  onClick={() => navigate(`/menu/${e._id}`)}
                >
                  <img className="product-img" src={e.imageLink} alt="" />
                  <img className="logoimg" src={logo} alt="" />
                  <div className="product-info">
                    <div className="product-text">
                      <p className="pd-name">{e.typeFood}</p>
                      <p className="pd-price">{e.price} Ks</p>
                    </div>
                    <div className="pd-add">
                      <BiShoppingBag
                        className="pd-add-icon"
                        onClick={() => navigate(`/menu/${e._id}`)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-promo-main">
        <div className="section-promo-boder">
          <div className="section-promo-title">
            <h4 className="promo-title">
              {" "}
              {language ? Burmese[0].title2 : "WHY ORDER FOOD ON WARTEE?"}
            </h4>
          </div>
          <div className="section-promo-about">
            <div className="promo-about-boder">
              <div className="promo-about-one">
                <TbTruckDelivery className="promo-icon-one" />
                <p className="promo-title-one">
                  {language ? Burmese[0].serveList1 : "Best Delivery"}
                </p>
                <div className="promo-bar"></div>
                <p className="promo-text-one">
                  High-quality delivery service delivered to your home
                </p>
              </div>
              <div className="promo-about-two">
                <BiTime className="promo-icon-two" />
                <p className="promo-title-two">
                  {language ? Burmese[0].serveList2 : "Fast like Flash"}
                </p>
                <div className="promo-bar"></div>
                <p className="promo-text-two">
                  Everything you order at -will be quickly delivered to you
                </p>
              </div>
              <div className="promo-about-three">
                <MdOutlineFastfood className="promo-icon-three" />
                <p className="promo-title-three">
                  {" "}
                  {language ? Burmese[0].serveList3 : "Fresh Food"}
                </p>
                <div className="promo-bar"></div>
                <p className="promo-text-three">
                  Best ingredients to cock the tasty fresh food for you
                </p>
              </div>
              <div className="promo-about-four">
                <BiDish className="promo-icon-four" />
                <p className="promo-title-four">
                  {language ? Burmese[0].serveList4 : "Variety Food"}
                </p>
                <div className="promo-bar"></div>
                <p className="promo-text-four">
                  A wide Variety of fast food , desserts and drinks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-guide-main">
        <div className="section-guide-boder">
          <img src={pointer} className="pointer1" alt="" />
          <img src={pointer2} className="pointer2" alt="" />
          <div className="section-guide-list">
            <h4 className="guide-title-main">
              {language ? Burmese[0].title3 : "HOW IT'S WORK"}
            </h4>

            <div className="guide-one">
              <p className="guide-title-one">
                Step <span style={{ color: "#ffb259" }}>One</span>
              </p>
              <p className="guide-title-text">
                {" "}
                {language
                  ? Burmese[0].usageList1
                  : "Search the in the menu that you want to order and click add to cart icon"}
              </p>
            </div>
            <div className="guide-bar"></div>
            <div className="guide-two">
              <p className="guide-title-two">
                Step <span style={{ color: "#589873" }}>Two</span>
              </p>
              <p className="guide-title-text">
                {language
                  ? Burmese[0].usageList2
                  : "Add the count number of your order List and write your current location such as name of town and street"}
              </p>
            </div>
            <div className="guide-bar"></div>
            <div className="guide-three">
              <p className="guide-title-three">
                Step <span style={{ color: "#D85d44" }}>Three</span>
              </p>
              <p className="guide-title-text">
                {language
                  ? Burmese[0].usageList3
                  : "Checkout your menu that's on your order list ,select payment method and print your coupon"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
