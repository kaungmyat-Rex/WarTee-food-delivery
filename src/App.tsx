import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Addproduct from "./pages/Addprodect";
import axios from "axios";
import Single from "./pages/Single";
function App() {
  const [language, setLanguage] = useState<boolean>(false);
  const [productData, setProductData] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getmenu").then((res) => {
      setProductData(res.data);
    });
  }, []);

  console.log(productData);

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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
