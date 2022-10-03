import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import Footer from "../component/Footer";
interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: [];
  setAddtocartList: any;
  addtocartList: [];
}

const AddtoCart = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
}: props) => {
  const options = [
    { value: "", text: "" },
    { value: "san chaung", text: "San Chaung" },
    { value: "hlaedan", text: "Hlae Dan" },
    { value: "inn sein", text: "Inn Sein" },
  ];

  const [selectCity, setSelectCity] = useState(options[0].value);

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
        setAddtocartList={setAddtocartList}
        addtocartList={addtocartList}
      />
      <div className="cart-section-main">
        <div className="cart-section-boder">
          <div className="cart-section-body">
            <h3 className="cart-title-main">SELECT PAYMENT METHOD</h3>
            <p className="cart-title-mini">Order list summary</p>
            <table id="customers">
              <tr>
                <th>Food Detail</th>
                <th>Count</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
              {addtocartList.map((e: any) => (
                <tr>
                  <td className="table-img-name">
                    {" "}
                    <img className="table-img" src={e.image} alt="" />
                    <p className="table-p">{e.name}</p>{" "}
                  </td>
                  <td>{e.count}</td>
                  <td>{e.result} Ks</td>
                  <td>
                    <AiOutlineClose className="table-icon" />
                  </td>
                </tr>
              ))}
              <tr className="table-total">
                <td>TOTAL PRICE</td>
                <td></td>
                <td>12500 KS</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="checkout-section-main">
        <div className="checkout-section-boder">
          <div className="checkout-section-body">
            <h3 className="checkout-title">CHECKOUT YOUR OREDER</h3>
            <div className="checkout-owner-info">
              <ul className="checkout-info">
                <li>
                  Payment method ---{" "}
                  <span style={{ color: "#d85d44" }}>KBZpay </span>
                </li>
                <li>
                  Kpay holdername ---{" "}
                  <span style={{ color: "#d85d44" }}>Aung Kaung Myat</span>
                </li>
                <li>
                  Transfer to ---{" "}
                  <span style={{ color: "#d85d44" }}>0937849292</span>
                </li>
              </ul>
              <div className="checkout-bar"></div>
              <p className="checkout-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus recusandae inventore repudiandae facilis vitae
                excepturi dicta rem placeat, ipsa repellendus dolorem.
                Temporibus voluptatibus eos, vitae accusamus quidem veritatis
                facere pariatur!
                <RiErrorWarningLine className="checkout-icon" />
              </p>
            </div>
            <div className="checkout-input-main">
              <div className="checkout-input-numberandname">
                <div className="input-KpayNumber">
                  <p>YOUR KBZPAY NUMBER</p>
                  <input type="text" />
                </div>
                <div className="input-KpayName">
                  <p>YOUR KBZPAY NAME</p>
                  <input type="text" />
                </div>
              </div>
              <div className="input-Kpayslip">
                <p>KBZPAY SLIP CODE</p>
                <input type="text" />
              </div>
              <div className="input-sel-city">
                <p>SELECT YOUR CITY</p>
                <select
                  value={selectCity}
                  onChange={(e) => setSelectCity(e.target.value)}
                >
                  {options.map((e) => (
                    <option key={e.value}>{e.text}</option>
                  ))}
                </select>
              </div>

              <button className="checkout-btn-main">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddtoCart;
