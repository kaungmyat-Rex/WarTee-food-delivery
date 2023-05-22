import React, { useEffect } from "react";
import Navbar from "../component/Navbar";

// import { BsChatRightQuote } from "react-icons/bs";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import Footer from "../component/Footer";
import { Burmese } from "../component/Burmese";
interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: [];
  setAddtocartList: any;
  addtocartList: any;
  addNoti: boolean;
}
const About = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
  addNoti,
}: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-section">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
        setAddtocartList={setAddtocartList}
        addtocartList={addtocartList}
        addNoti={addNoti}
      />
      <div className="about-section-main">
        <div className="about-main-boder">
          <div className="about-main-body">
            <h3 className="about-title">
              {language ? Burmese[0].menuList3 : "About Us"}
            </h3>
            <div className="about-bar"></div>
            <p className="about-text">
              Welcome to Wartee fast food , we believe that good food should be
              fast, convenient, and delicious.we have been dedicated to
              providing our customers with a memorable fast food experience that
              satisfies their cravings.We take pride in using only the finest,
              high-quality ingredients in our menu items. Whether you're in the
              mood for a juicy burger, crispy fries, or a refreshing salad, our
              diverse menu offers something for everyone.we embrace innovation
              and constantly seek ways to enhance our customers' experience.
              Whether you're on the go or enjoying a meal at home, WarTee is
              here to serve you.
            </p>
          </div>
        </div>
      </div>
      <div className="testi-section-title">
        <h3>{language ? Burmese[0].aboutText1 : "THEY TRUST US"}</h3>
      </div>
      <div className="testi-section-main">
        <div className="testi-section-body">
          <div className="testi-model-one">
            <BsChatRightQuoteFill className="testi-icon" />
            <p className="testi-text">
              Wow, what a fantastic dining experience at WarTee! The food was
              absolutely delicious, and the service was top-notch. I ordered
              their signature burger, and it was juicy and flavorful. The fries
              were perfectly crispy too. The staff was friendly and attentive,
              making sure we had everything we needed. I highly recommend WarTee
              for a quick and satisfying meal!
            </p>
            <div className="testi-bar"></div>

            <p className="testi-name">EainDra</p>
            <BsPersonCircle className="testi-icon-ps" />
          </div>
          <div className="testi-model-two">
            <BsChatRightQuoteFill className="testi-icon" />
            <p className="testi-text">
              I can't get enough of WarTee! Their menu has a great variety of
              options, and everything I've tried so far has been fantastic. The
              quality of the ingredients really shines through in each dish. The
              staff is always welcoming and helpful, and the restaurant has a
              comfortable and clean ambiance. WarTee has become my go-to place
              for a quick and tasty meal. Highly recommended!
            </p>
            <div className="testi-bar"></div>

            <p className="testi-name">Kit Kit Tone</p>
            <BsPersonCircle className="testi-icon-ps" />
          </div>

          <div className="testi-model-three">
            <BsChatRightQuoteFill className="testi-icon" />
            <p className="testi-text">
              I had a wonderful experience at WarTee. The food was amazing and
              served promptly. I loved their vegetarian options, which were
              flavorful and satisfying. The staff was knowledgeable about
              dietary restrictions and made excellent recommendations. The
              restaurant itself had a cozy and modern atmosphere, perfect for a
              quick meal or catching up with friends. WarTee exceeded my
              expectations, and I will definitely be returning soon!
            </p>
            <div className="testi-bar"></div>

            <p className="testi-name">Pone Pone</p>
            <BsPersonCircle className="testi-icon-ps" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
