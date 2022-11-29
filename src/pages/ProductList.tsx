import React, { useEffect, useState } from "react";
import AdminNav from "../component/AdminNav";
import { BiSearchAlt } from "react-icons/bi";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import { storage } from "../component/firebase";
import { ref, deleteObject } from "firebase/storage";

import axios from "axios";
import { async } from "@firebase/util";
interface props {
  uploadcheck: boolean;
  checkerror: boolean;
  checkimg: boolean;
  productData: any;
  orderData: any;
  delCheck: boolean;
  setDelCheck: any;
}
const ProductList = ({
  uploadcheck,
  checkerror,
  checkimg,
  productData,
  orderData,
  delCheck,
  setDelCheck,
}: props) => {
  const [count, setCount] = useState(4);
  const [productinput, setproductinput] = useState("");
  const [productinputCheck, setproductinputCheck] = useState(false);

  const navigate = useNavigate();
  const seemoreFun = () => {
    setCount(count + 4);
  };

  const changetotrue = () => {
    setDelCheck(false);
  };

  const timeout = () => {
    setTimeout(changetotrue, 3000);
  };

  useEffect(() => {
    if (productinput === "") {
      setproductinputCheck(false);
    } else {
      setproductinputCheck(true);
    }
  }, [productinput]);

  const delMenu = async (id: any) => {
    const imageLink = productData
      .filter((e: any) => e._id === id)
      .map((e: any) => e.imageLink);
    const desertRef = ref(storage, imageLink[0]);
    await deleteObject(desertRef).then(() => {
      axios
        .delete(`https://encouraging-pink-pullover.cyclic.app/delete/${id}`)
        .then(() => {
          setDelCheck(true);
          timeout();
        });
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
      <div className="section-title-productlist">
        <h4>Order List</h4>
        <p>Here You Can Edit/Delete Your Food Menus</p>
      </div>

      <div className="admin-productlist-table">
        <div className="input-admin-productlist">
          <input
            type="text"
            placeholder="Search Your Food Menu"
            onChange={(e) => setproductinput(e.target.value)}
            value={productinput}
          />
          <BiSearchAlt className="input-search-icon-product" />
        </div>
        <div className="admin-productlist-table-boder">
          <table id="admins-productlist-table">
            <tbody>
              <tr>
                <th>Image</th>
                <th>Food Name</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
              </tr>

              {productinputCheck
                ? productData
                    .filter((e: any) => {
                      if (
                        e.typeFood
                          .toLowerCase()
                          .includes(productinput.toLowerCase())
                      ) {
                        return e;
                      }
                    })
                    .map((e: any) => (
                      <tr key={e._id}>
                        <td>
                          <img
                            className="productlist-img"
                            src={e.imageLink}
                            alt=""
                          />
                        </td>
                        <td>{e.typeFood}</td>
                        <td>{e.desc.slice(0, 30)}...</td>
                        <td>{e.price} KS</td>
                        <td>
                          <div className="table-btns">
                            <button className="edit-btn-admin">Edit</button>
                            <button className="del-btn-admin">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))
                : productData.slice(0, count).map((e: any) => (
                    <tr key={e._id}>
                      <td>
                        <img
                          className="productlist-img"
                          src={e.imageLink}
                          alt=""
                        />
                      </td>
                      <td>{e.typeFood}</td>
                      <td>{e.desc.slice(0, 30)}...</td>
                      <td>{e.price} KS</td>
                      <td>
                        <div className="table-btns">
                          <button
                            className="edit-btn-admin"
                            onClick={() => navigate(`/editproduct/${e._id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="del-btn-admin"
                            onClick={() => delMenu(e._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <button className="button-34" onClick={() => seemoreFun()}>
          See More
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
