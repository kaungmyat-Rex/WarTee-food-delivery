import React from "react";
import Navbar from "../component/Navbar";
import burgur from "../img/burgur.png";
import bubble from "../img/Bubble_Tea.png";
import pizza from "../img/Pizza1.png";
import blob from "../img/blob.svg";
import blob2 from "../img/blob2.svg";
import blob3 from "../img/blob3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { fakeproduct } from "../component/testApi";
import { BiShoppingBag } from "react-icons/bi";
const Home = () => {
  return (
    <>
      <Navbar />

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
              <h4 className="text-itemName">Chicken Burgur</h4>
              <p className="text-itemPrice">2500Ks</p>
              <button className="button-3">
                {" "}
                <span>Order Now</span>
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
              <h4 className="text-itemName-two">Bubble Tea</h4>
              <p className="text-itemPrice-two">1500Ks</p>
              <button className="button-3-two">
                {" "}
                <span>Order Now</span>
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
              <h4 className="text-itemName-three">Chicken Pizza</h4>
              <p className="text-itemPrice-three">6000Ks</p>
              <button className="button-3-three">
                {" "}
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="section-feature-product">
        <div className="section-feature-product-boder">
          <div className="section-feature-title">
            <h4 className="feature-title">FEATURE MENU OF WARTEE</h4>
          </div>
          <div className="section-product-main">
            <div className="product-list">
              {fakeproduct.map((e) => (
                <div className="product-main">
                  <img className="product-img" src={e.productImg} alt="" />
                  <img className="logoimg" src={e.logoImg} alt="" />
                  <div className="product-info">
                    <div className="product-text">
                      <p className="pd-name">{e.name}</p>
                      <p className="pd-price">{e.price} Ks</p>
                    </div>
                    <div className="pd-add">
                      <BiShoppingBag className="pd-add-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
