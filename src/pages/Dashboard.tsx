import axios from "axios";
import { deleteApp } from "firebase/app";
import React, { useEffect, useState } from "react";
import AdminNav from "../component/AdminNav";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
interface props {
  uploadcheck: boolean;
  checkerror: boolean;
  checkimg: boolean;
  productData: any;
  orderData: any;
  delCheck: boolean;
}

const Dashboard = ({
  uploadcheck,
  checkerror,
  checkimg,
  productData,
  orderData,
  delCheck,
}: props) => {
  const [ordertest, setOrdertest] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const test = orderData.map((e) => e.orderItemName);
  //   const testtwo = test[0].map((e: any) => e.foodname)[0];
  //   setOrdertest(testtwo);
  // }, [test]);

  console.log(orderData.map((e: any) => e._id));

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <div style={{ backgroundColor: "#f4eee1" }}>
      <AdminNav
        uploadcheck={uploadcheck}
        checkerror={checkerror}
        checkimg={checkimg}
        delCheck={delCheck}
      />
      <div className="admin-dashboard-title">
        <h4>Dashboard</h4>
        <p>Here you can view over all data of your app</p>
      </div>

      <div className="admin-dashboard-widget">
        <div className="admin-dboard-boder">
          <div className="admin-widget-main">
            <div className="admin-widget-one">
              <AiOutlineShoppingCart className="widget-icon1" />

              <div className="admin-widget-info">
                <h4>ORDERS</h4>
                <p>{orderData.length}</p>
              </div>
            </div>
            <div className="admin-widget-two">
              <IoFastFoodOutline className="widget-icon2" />

              <div className="admin-widget-info">
                <h4>MENUS</h4>
                <p>{productData.length}</p>
              </div>
            </div>
            <div className="admin-widget-three">
              <MdPeopleOutline className="widget-icon3" />

              <div className="admin-widget-info">
                <h4>CUSTOMER</h4>
                <p>{orderData.length}</p>
              </div>
            </div>
            <div className="admin-widget-four">
              <BsCalendar2Date className="widget-icon4" />

              <div className="admin-widget-info">
                <h4>TODAY DATE</h4>
                <p>{currentDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-dashboard-main">
        <div className="section-dashboard-table">
          <h4>Order List</h4>
          <table id="admins-table">
            <tbody>
              <tr>
                <th>Customer</th>
                <th>Phone</th>

                <th>Orders</th>
                <th>Price</th>
              </tr>

              {orderData.slice(-5).map((e: any) => (
                <tr key={e._id}>
                  <td style={{ color: "#d85d44" }}>{e.KBZname}</td>
                  <td>0{e.KBZph}</td>
                  {e.orderItemName.map((e: any) => (
                    <div
                      style={{
                        display: "flex",
                        borderBottom: "1px solid rgb(200, 199, 199) ",
                      }}
                    >
                      <td
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          borderBottom: " none",
                        }}
                      >
                        {e.foodname.map((e: any) => (
                          <span>{e}</span>
                        ))}
                      </td>
                      <td
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          borderBottom: " none",
                        }}
                      >
                        {e.foodcount.map((e: any) => (
                          <span>{e}</span>
                        ))}
                      </td>
                    </div>
                  ))}
                  <td style={{ color: "rgb(88, 152, 115)" }}>
                    {e.totalfoodprice} KS
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="admin-dash-btn"
            onClick={() => navigate("/orderlist")}
          >
            View All Orders
          </button>
        </div>
        <div className="section-product-table">
          <h4>Recently Added Foods</h4>
          <table id="product-admin-tables">
            <tbody>
              <tr>
                <th>Food Detail</th>
                <th>Count</th>
                <th>Price</th>
              </tr>
              {productData.slice(-4).map((e: any) => (
                <tr>
                  <td>
                    <img
                      src={e.imageLink}
                      className="product-admin-img"
                      alt=""
                    />
                  </td>
                  <td>{e.typeFood}</td>
                  <td>{e.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="seemore-admin-btn"
            onClick={() => navigate("/productlist")}
          >
            <p>See More Foods</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
