import React from "react";
import Navbar from "../component/Navbar";
import burgur from "../img/burgur.png";
import bubble from "../img/Bubble_Tea.png";
import pizza from "../img/Pizza1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
