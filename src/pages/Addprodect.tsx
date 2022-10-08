import React, { useState } from "react";
import Navbar from "../component/Navbar";

import axios from "axios";
import { storage } from "../component/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { chownSync } from "fs";
interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: any;
  setAddtocartList: any;
  addtocartList: any;
  addNoti: boolean;
}
const Addproduct = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
  addNoti,
}: props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imagestore, setImagestore] = useState(null);
  const [ingre, setIngre] = useState("");
  const [test, settest] = useState();
  const [linkimage, setLinkimage] = useState("");

  const addDataFun = async () => {
    const imgref = ref(storage, `storeImg/${imagestore.name + Date.now()}`);

    await uploadBytes(imgref, imagestore).then(() => {
      getDownloadURL(imgref).then((url) => {
        axios
          .post("http://localhost:3001/createmenu", {
            typeFood: name,
            price: price,
            imageLink: url,
            desc: desc,
            ingre: ingre,
          })
          .then(() => {
            alert("file upload success");
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
  };

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
        setAddtocartList={setAddtocartList}
        addtocartList={addtocartList}
        addNoti={addNoti}
      />
      <input
        type="text"
        placeholder="food name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="food price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        placeholder="food desc"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <input
        type="text"
        placeholder="food ingre"
        onChange={(e) => setIngre(e.target.value)}
        value={ingre}
      />

      <input type="file" onChange={(e) => setImagestore(e.target.files[0])} />

      <button onClick={() => addDataFun()}>submit</button>
    </>
  );
};

export default Addproduct;
