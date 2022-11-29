import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "../component/AdminNav";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";

interface props {
  uploadcheck: boolean;
  checkerror: boolean;
  checkimg: boolean;
  productData: any;
  orderData: any;
  delCheck: boolean;
}

const EditProduct = ({
  uploadcheck,
  checkerror,
  checkimg,
  productData,
  orderData,
  delCheck,
}: props) => {
  const [editname, setEditname] = useState("");
  const [editprice, setEditprice] = useState(0);
  const [editdesc, setEditdesc] = useState("");
  const [editingre, setEditingre] = useState("");
  const [editimage, setEditimage] = useState("");
  const [editData, setEditData] = useState<any>([]);

  const { id } = useParams();

  useEffect(() => {
    // axios
    //   .get(`http://localhost:3001/getmenu/${id}`)
    //   .then((res) => setEditData([res.data]))
    //   .then(() => {});
    productData
      .filter((e: any) => e._id === id)
      .map((e: any) => {
        setEditname(e.typeFood);
        setEditprice(e.price);
        setEditdesc(e.desc);
        setEditingre(e.ingre);
        setEditimage(e.imageLink);
      });

    // const editfoodname = editData.map((e: any) => e.typeFood);
    // const editfoodprice = editData.map((e: any) => e.price);
    // const editfooddesc = editData.map((e: any) => e.imageLink);
    // const editfoodingre = editData.map((e: any) => e.ingre);
    // const editfoodimage = editData.map((e: any) => e.desc);

    // setEditname(editfoodname);
  }, []);

  const editfun = () => {
    axios
      .patch(`https://encouraging-pink-pullover.cyclic.app/edit/${id}`, {
        typeFood: editname,
        price: editprice,
        imageLink: editimage,
        desc: editdesc,
        ingre: editingre,
      })
      .then((responce) => {
        alert("Product Edit Success");
      })
      .catch((err) => {
        alert("Error Occur Try Again Later");
      });
  };

  return (
    <div style={{ backgroundColor: "#f4eee1" }}>
      {/* <input
        type="text"
        placeholder="typefood"
        onChange={(e) => setEditname(e.target.value)}
        value={editname}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e: any) => setEditprice(e.target.value)}
        value={editprice}
      />
      <input
        type="text"
        placeholder="desc"
        onChange={(e) => setEditdesc(e.target.value)}
        value={editdesc}
      />
      <input
        type="text"
        placeholder="ingre"
        onChange={(e) => setEditingre(e.target.value)}
        value={editingre}
      />
      <input
        type="text"
        placeholder="imageUrL"
        onChange={(e) => setEditimage(e.target.value)}
        value={editimage}
      />
      <button onClick={() => editfun()}>Submit</button> */}
      <AdminNav
        uploadcheck={uploadcheck}
        checkerror={checkerror}
        checkimg={checkimg}
        delCheck={delCheck}
      />
      <div className="admin-addproduct-title">
        <h4>Edit Foods</h4>
        <p>Here your can edit foods to your menu.</p>
      </div>
      <div className="admin-addproduct-form-main">
        <div className="admin-form-left">
          <h4>FOOD DETAIL</h4>
          <p>Edit your food detail here</p>

          <p>EDIT FOOD NAME</p>
          <input
            className="food-name"
            type="text"
            placeholder=" Enter Food Name Here"
            onChange={(e) => setEditname(e.target.value)}
            value={editname}
            style={checkerror ? { border: "2px solid red" } : {}}
          />

          <p>EIDT FOOD PRICE</p>
          <input
            className="food-price"
            type="text"
            placeholder=" Enter Food Price Here"
            onChange={(e: any) => setEditprice(e.target.value)}
            value={editprice}
            style={checkerror ? { border: "2px solid red" } : {}}
          />
          <p>EDIT FOOD DESCRIPTION</p>
          <textarea
            className="food-desc"
            placeholder=" Enter Food Description Here"
            onChange={(e) => setEditdesc(e.target.value)}
            value={editdesc}
          />

          <p>EDIT FOOD INGREDIENT</p>
          <textarea
            className="food-ingre"
            placeholder=" Enter Food Ingredient Here"
            onChange={(e) => setEditingre(e.target.value)}
            value={editingre}
          />
        </div>

        <div className="admin-form-right">
          <div className="image-upload">
            <h4>FOOD IMAGE</h4>
            <p>
              you can't edit uploaded image of your menu or food. if you want to
              change image , you need to delete this menu and create a new one!
            </p>
            <div className="image-upload-list">
              <img src={editimage} alt="" />
              <h3>{editname}</h3>
            </div>
            {/* <div className="file-wrap">
              <span className="file-text"> UPLOAD IMAGE </span>
            </div> */}
            <p>
              {" "}
              <span style={{ color: "#d85d44" }}>Note!</span>
              <br />
              image can be upload by any dimension but we recommend you to
              upload image with dimension of 1024x1024. Its size must be less
              than 10mb.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: "20px",
              backgroundColor: "#f4eee1",
              marginTop: "2px",
              zIndex: "2000",
            }}
          ></div>

          <div className="warning">
            <h4>Notice</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, error debitis adipisci laboriosam voluptates quam
              sapiente ullam. Unde, illum. Similique rem dolorum est quod
              repellendus atque pariatur at nisi enim?
            </p>
          </div>
        </div>
      </div>
      <button className="btn-file-submit" onClick={() => editfun()}>
        Edit
      </button>
      <Footer />
    </div>
  );
};

export default EditProduct;
