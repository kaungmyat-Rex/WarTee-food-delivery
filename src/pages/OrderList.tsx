import React, { useEffect, useState } from "react";
import AdminNav from "../component/AdminNav";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import Footer from "../component/Footer";
interface props {
  uploadcheck: boolean;
  checkerror: boolean;
  checkimg: boolean;
  productData: any;
  orderData: any;
  delCheck: boolean;
}
const OrderList = ({
  uploadcheck,
  checkerror,
  checkimg,
  productData,
  orderData,
  delCheck,
}: props) => {
  const [orderinput, setOrderinput] = useState("");
  const [orderinputcheck, setOrderinputcheck] = useState(false);

  const fiterorderdata = orderData.filter((e: any) =>
    // e.KBZname.toLowerCase() ||
    e.KBZname.toLowerCase().includes(orderinput.toLowerCase())
  );

  useEffect(() => {
    if (orderinput === "") {
      setOrderinputcheck(false);
    } else {
      setOrderinputcheck(true);
    }
  }, [orderinput]);
  console.log(fiterorderdata);

  const deleteorder = async (id: any) => {
    await axios
      .delete(`https://outrageous-bikini-toad.cyclic.app/admin/delete/${id}`)
      .then(() => {
        alert("item delete success");
        window.location.reload();
      });
  };
  return (
    <div>
      <AdminNav
        uploadcheck={uploadcheck}
        checkerror={checkerror}
        checkimg={checkimg}
        delCheck={delCheck}
      />
      <div className="section-title-orderlist">
        <h4>Order List</h4>
        <p>Here Your Can Fully View Your Customer Order</p>
      </div>

      <div className="section-orderlist-table-main">
        <div className="input-search-orderlist">
          <input
            type="text"
            placeholder="Search Your Order By Name"
            value={orderinput}
            onChange={(e: any) => setOrderinput(e.target.value)}
          />
          <BiSearchAlt className="input-search-icon" />
        </div>
        <div className="orderlist-table-boder">
          <table id="admins-orderlist-table">
            <tbody>
              <tr>
                <th>Customer</th>
                <th className="admins-order-phonepage-title">Phone</th>
                <th className="admins-order-kpaypage-title">Kpay slip</th>
                <th>Orders</th>
                <th>Price</th>
                <th className="admins-order-address-title">Address</th>
                <th></th>
              </tr>

              {orderinputcheck
                ? orderData
                    .filter((e: any) => {
                      if (
                        e.KBZname.toLowerCase().includes(
                          orderinput.toLowerCase()
                        )
                      ) {
                        return e;
                      }
                    })
                    .map((e: any) => (
                      <tr key={e._id}>
                        <td>{e.KBZname}</td>
                        <td className="admins-order-phonepage">0{e.KBZph}</td>
                        <td className="admins-order-kpaypage">
                          {e.KBZpayslip}
                        </td>
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
                                <span className="paddingbtn">{e}</span>
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
                        <td style={{ color: "#d85d44" }}>
                          {e.totalfoodprice} KS
                        </td>
                        <td className="admins-order-adress">{e.address}</td>
                        <td>
                          <button
                            className="inputorder-btn"
                            onClick={() => deleteorder(e._id)}
                          >
                            Finish
                          </button>
                        </td>
                      </tr>
                    ))
                : orderData.map((e: any) => (
                    <tr key={e._id}>
                      <td>{e.KBZname}</td>
                      <td className="admins-order-phonepage">0{e.KBZph}</td>
                      <td className="admins-order-kpaypage">{e.KBZpayslip}</td>
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
                      <td style={{ color: "#d85d44" }}>
                        {e.totalfoodprice} KS
                      </td>
                      <td className="admins-order-adress">{e.address}</td>
                      <td>
                        <button
                          className="inputorder-btn"
                          onClick={() => deleteorder(e._id)}
                        >
                          Finish
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default OrderList;
