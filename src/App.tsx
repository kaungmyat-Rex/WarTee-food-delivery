import "./App.css";
import "./Admin.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Addproduct from "./pages/Addprodect";
import axios from "axios";
import Single from "./pages/Single";
import AddtoCart from "./pages/AddtoCart";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import ProductList from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";

function App() {
  const [language, setLanguage] = useState<boolean>(false);
  const [addNoti, setAddNoti] = useState<boolean>(false);
  const [productData, setProductData] = useState<any>([]);
  const [addtocartList, setAddtocartList] = useState<[]>([]);
  const [uploadcheck, setUploadcheck] = useState(false);
  const [checkerror, setCheckerror] = useState(false);
  const [checkimg, setCheckimg] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [delCheck, setDelCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://encouraging-pink-pullover.cyclic.app/getmenu")
      .then((res) => {
        setLoading(false);
        setProductData(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://encouraging-pink-pullover.cyclic.app/admin/orders")
      .then((res) => setOrderData(res.data));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                language={language}
                setLanguage={setLanguage}
                productData={productData}
                setAddtocartList={setAddtocartList}
                addtocartList={addtocartList}
                addNoti={addNoti}
                loading={loading}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                language={language}
                setLanguage={setLanguage}
                productData={productData}
                setAddtocartList={setAddtocartList}
                addtocartList={addtocartList}
                addNoti={addNoti}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                language={language}
                setLanguage={setLanguage}
                productData={productData}
                setAddtocartList={setAddtocartList}
                addtocartList={addtocartList}
                addNoti={addNoti}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                language={language}
                setLanguage={setLanguage}
                productData={productData}
                setAddtocartList={setAddtocartList}
                addtocartList={addtocartList}
                addNoti={addNoti}
              />
            }
          />
          <Route
            path="/menu/:id"
            element={
              <Single
                language={language}
                setLanguage={setLanguage}
                productData={productData}
                setAddtocartList={setAddtocartList}
                addtocartList={addtocartList}
                addNoti={addNoti}
                setAddNoti={setAddNoti}
              />
            }
          />
          <Route
            path="/add"
            element={
              <Addproduct
                language={language}
                setLanguage={setLanguage}
                productData={productData}
                setAddtocartList={setAddtocartList}
                addtocartList={addtocartList}
                addNoti={addNoti}
                uploadcheck={uploadcheck}
                setUploadcheck={setUploadcheck}
                checkerror={checkerror}
                setCheckerror={setCheckerror}
                checkimg={checkimg}
                setCheckimg={setCheckimg}
                delCheck={delCheck}
              />
            }
          />
          <Route
            path="/addtocart"
            element={
              <AddtoCart
                language={language}
                setLanguage={setLanguage}
                productData={productData}
                setAddtocartList={setAddtocartList}
                addtocartList={addtocartList}
                addNoti={addNoti}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                uploadcheck={uploadcheck}
                checkerror={checkerror}
                checkimg={checkimg}
                productData={productData}
                orderData={orderData}
                delCheck={delCheck}
              />
            }
          />

          <Route
            path="/orderlist"
            element={
              <OrderList
                uploadcheck={uploadcheck}
                checkerror={checkerror}
                checkimg={checkimg}
                productData={productData}
                orderData={orderData}
                delCheck={delCheck}
              />
            }
          />
          <Route
            path="/productlist"
            element={
              <ProductList
                uploadcheck={uploadcheck}
                checkerror={checkerror}
                checkimg={checkimg}
                productData={productData}
                orderData={orderData}
                delCheck={delCheck}
                setDelCheck={setDelCheck}
              />
            }
          />
          <Route
            path="/editproduct/:id"
            element={
              <EditProduct
                uploadcheck={uploadcheck}
                checkerror={checkerror}
                checkimg={checkimg}
                productData={productData}
                orderData={orderData}
                delCheck={delCheck}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
