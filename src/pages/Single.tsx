import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Footer from "../component/Footer";

interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: [];
}
const Single = ({ language, setLanguage, productData }: props) => {
  const [countItem, setCountItem] = useState<number>(1);
  const { id } = useParams();
  const filter = productData.filter((e: any) => e._id === id);

  const minusCount = () => {
    if (countItem === 1) {
      setCountItem(1);
    } else {
      setCountItem(countItem - 1);
    }
  };

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
      />
      <div className="single-section-main">
        <div className="single-boder">
          {filter.map((e: any) => (
            <div>
              <div className="single-body-main">
                <div className="single-product-img-main">
                  <img
                    className="single-product-img"
                    src={e.imageLink}
                    alt=""
                  />
                </div>
                <div className="single-product-info">
                  <p className="single-info-title">Fast Food Feature</p>
                  <p className="single-text">{e.typeFood}</p>
                  <p className="single-price">{e.price * countItem} Ks</p>
                  <div className="single-product-btn">
                    <div className="single-count-main">
                      <button
                        className="count-btn-left"
                        onClick={() => minusCount()}
                      >
                        <AiOutlineMinus />
                      </button>
                      <p className="count-item">{countItem}</p>
                      <button
                        className="count-btn-right"
                        onClick={() => setCountItem(countItem + 1)}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <button className="single-atc">
                      <BiShoppingBag
                        style={{ fontSize: "20px", marginRight: "10px" }}
                      />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="single-desIng-main">
                <div className="single-desIng-boder">
                  <div className="single-desIng-body">
                    <div className="single-desc-main">
                      <h4 className="single-desc-title">Description</h4>
                      <p className="single-desc-text">{e.desc}</p>
                    </div>
                    <div className="single-bar"></div>
                    <div className="single-ing-main">
                      <h4 className="single-ing-title">Ingredient</h4>
                      <p className="single-ing-text">{e.ingre}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Single;
