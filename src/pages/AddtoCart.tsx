import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import Footer from "../component/Footer";
import axios from "axios";
import Checkoutmodel from "../component/CheckoutModel";
import Loading from "../component/Loading";

interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: [];
  setAddtocartList: any;
  addtocartList: [];
  addNoti: boolean;
}

const AddtoCart = ({
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
  const options = [
    { value: "", text: "" },
    { value: "san chaung", text: "San Chaung" },
    { value: "hlaedan", text: "Hlae Dan" },
    { value: "inn sein", text: "Inn Sein" },
  ];

  const [selectCity, setSelectCity] = useState(options[0].value);
  const [totalfoodprice, setTotalfoodprice] = useState<number>(0);
  const [addtocartcheck, setAddtocartcheck] = useState<boolean>(false);
  const [kname, setKname] = useState("");
  const [kphone, setKphone] = useState("");
  const [kslip, setKslip] = useState("");
  const [test, setTest] = useState([]);
  const [opencheckmodel, setOpencheckmodel] = useState(false);
  const [loadingcheck, setLoadingcheck] = useState(false);

  const DeleteFoodListFun = (id: string): void => {
    const deletefood = addtocartList.filter((e: any) => e.id !== id);
    setAddtocartList(deletefood);
  };

  useEffect(() => {
    if (addtocartList.length === 0) {
      setAddtocartcheck(true);
    } else {
      setAddtocartcheck(false);
    }

    const Totalprice = addtocartList
      .map((e: any) => e.result)
      .reduce((total, currentvalue) => (total = total + currentvalue), 0);
    setTotalfoodprice(Totalprice);
  }, [addtocartList]);

  const CreateOrder = async () => {
    if (addtocartList.length === 0) {
      alert("You Can't Create Your Order With Empty List");
    } else if (kname === "") {
      alert("You Can't Create Your Order With Empty Kpay Name");
    } else if (kphone === "") {
      alert("You Can't Create Your Order With Empty Kpay Phone Number");
    } else if (kslip === "") {
      alert("You Can't Create Your Order With Empty Kpay Slip");
    } else {
      setLoadingcheck(true);
      const foodname = addtocartList.map((e: any) => e.name);
      const foodcount = addtocartList.map((e: any) => e.count);

      await axios
        .post("https://wartee-server.onrender.com/admin/crateorder", {
          KBZph: kphone,
          KBZname: kname,
          KBZpayslip: kslip,
          orderItemName: { foodname: foodname, foodcount: foodcount },
          totalfoodprice: totalfoodprice,
          address: selectCity,
        })
        .then(() => {
          setLoadingcheck(false);
          setOpencheckmodel(true);
        });
    }
  };

  return (
    <>
      <div
        className={`loadingCheck ${loadingcheck ? "loadingcheck-show" : ""}`}
      >
        <div className="loadingcheck-body">
          <Loading />
        </div>
      </div>
      <Checkoutmodel
        opencheckmodel={opencheckmodel}
        setOpencheckmodel={setOpencheckmodel}
      />
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
        setAddtocartList={setAddtocartList}
        addtocartList={addtocartList}
        addNoti={addNoti}
      />
      <div className="cart-section-main">
        <div className="cart-section-boder">
          <div className="cart-section-body">
            <h3 className="cart-title-main">SELECT PAYMENT METHOD</h3>
            <p className="cart-title-mini">Order list summary</p>

            <table id="customers">
              <tbody>
                <tr>
                  <th>Food Detail</th>
                  <th>Count</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
                {addtocartcheck ? (
                  <tr>
                    <td>
                      <p style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                        Your food order list is empty.
                      </p>
                    </td>
                  </tr>
                ) : (
                  addtocartList.map((e: any) => (
                    <tr key={e.id}>
                      <td className="table-img-name">
                        {" "}
                        <img className="table-img" src={e.image} alt="" />
                        <p className="table-p">{e.name}</p>{" "}
                      </td>
                      <td>{e.count}</td>
                      <td>{e.result} Ks</td>
                      <td>
                        <AiOutlineClose
                          className="table-icon"
                          onClick={() => DeleteFoodListFun(e.id)}
                        />
                      </td>
                    </tr>
                  ))
                )}
                <tr className="table-total">
                  <td>TOTAL PRICE</td>
                  <td></td>
                  <td>{totalfoodprice}KS</td>
                </tr>
              </tbody>
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
                  <input
                    type="text"
                    value={kphone}
                    onChange={(e: any) => setKphone(e.target.value)}
                  />
                </div>
                <div className="input-KpayName">
                  <p>YOUR KBZPAY NAME</p>
                  <input
                    type="text"
                    value={kname}
                    onChange={(e) => setKname(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-Kpayslip">
                <p>KBZPAY SLIP CODE</p>
                <input
                  type="text"
                  value={kslip}
                  onChange={(e: any) => setKslip(e.target.value)}
                />
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

              <button
                className="checkout-btn-main"
                onClick={() => CreateOrder()}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddtoCart;
