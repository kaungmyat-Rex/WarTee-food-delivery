import React, { useState } from "react";
import Navbar from "../component/Navbar";

import axios from "axios";
import { storage } from "../component/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { chownSync } from "fs";
import AdminNav from "../component/AdminNav";
import Footer from "../component/Footer";
import { SiHetzner } from "react-icons/si";
import def from "../img/default.png";
interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: any;
  setAddtocartList: any;
  addtocartList: any;
  addNoti: boolean;
  uploadcheck: boolean;
  setUploadcheck: any;
  checkerror: boolean;
  setCheckerror: any;
  checkimg: boolean;
  setCheckimg: any;
  delCheck: boolean;
}
const Addproduct = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
  addNoti,
  uploadcheck,
  setUploadcheck,
  checkerror,
  setCheckerror,
  checkimg,
  setCheckimg,
  delCheck,
}: props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imagestore, setImagestore] = useState(null);
  const [ingre, setIngre] = useState("");
  const [test, settest] = useState();
  const [linkimage, setLinkimage] = useState("");
  const [imagename, setImagename] = useState("No image selected");
  const [imageurl, setImageurl] = useState(def);

  const addDataFun = async () => {
    const errorcheck = () => {
      setTimeout(() => setCheckerror(false), 3000);
    };

    const errorimgcheck = () => {
      setTimeout(() => setCheckimg(false), 3000);
    };
    if (name === "" || price === "" || desc === "") {
      setCheckerror(true);
      errorcheck();
    } else if (imagestore === null) {
      setCheckimg(true);
      errorimgcheck();
    } else {
      const imgref = ref(storage, `storeImg/${imagestore.name + Date.now()}`);

      const btd = () => {
        setTimeout(() => setUploadcheck(false), 3000);
      };

      await uploadBytes(imgref, imagestore).then(() => {
        getDownloadURL(imgref).then((url) => {
          axios
            .post("https://encouraging-pink-pullover.cyclic.app/createmenu", {
              typeFood: name,
              price: price,
              imageLink: url,
              desc: desc,
              ingre: ingre,
            })
            .then(() => {
              setUploadcheck(true);
              btd();
            })
            .catch((err) => console.log(err));
        });
      });

      // await axios
      //   .post("http://localhost:3001/createmenu", {
      //     typeFood: name,
      //     price: price,
      //     imageLink: linkimage,
      //   })
      //   .then(() => {
      //     alert("file upload success");
      //   })
      //   .catch((err) => console.log(err));
    }
  };

  const formControl = (e: any) => {
    setImagestore(e.target.files[0]);
    setImagename(e.target.files[0].name);
    setImageurl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div style={{ backgroundColor: "#f4eee1" }}>
      <AdminNav
        uploadcheck={uploadcheck}
        checkerror={checkerror}
        checkimg={checkimg}
        delCheck={delCheck}
      />
      <div className="admin-addproduct-title">
        <h4>Add Foods</h4>
        <p>Here your can add foods to your menu.</p>
      </div>
      <div className="admin-addproduct-form-main">
        <div className="admin-form-left">
          <h4>FOOD DETAIL</h4>
          <p>Add your food detail here</p>

          <p>FOOD NAME</p>
          <input
            className="food-name"
            type="text"
            placeholder=" Enter Food Name Here"
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={checkerror ? { border: "2px solid red" } : {}}
          />

          <p>FOOD PRICE</p>
          <input
            className="food-price"
            type="text"
            placeholder=" Enter Food Price Here"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            style={checkerror ? { border: "2px solid red" } : {}}
          />
          <p>FOOD DESCRIPTION</p>
          <textarea
            className="food-desc"
            placeholder=" Enter Food Description Here"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />

          <p>FOOD INGREDIENT</p>
          <textarea
            className="food-ingre"
            placeholder=" Enter Food Ingredient Here"
            onChange={(e) => setIngre(e.target.value)}
            value={ingre}
          />
        </div>

        <div className="admin-form-right">
          <div className="image-upload">
            <h4>FOOD IMAGE</h4>
            <p>Here you can upload image of your menu or food.</p>
            <div className="image-upload-list">
              <img src={imageurl} alt="" />
              <h3>{imagename}</h3>
            </div>
            <div className="file-wrap">
              <span className="file-text"> UPLOAD IMAGE </span>
              <input type="file" onChange={(e) => formControl(e)} />
            </div>
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
      <button className="btn-file-submit" onClick={() => addDataFun()}>
        submit
      </button>
      <Footer />
    </div>
  );
};

export default Addproduct;
