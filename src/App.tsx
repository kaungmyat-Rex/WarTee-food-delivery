import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
function App() {
  const [language, setLanguage] = useState<boolean>(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/menu"
            element={<Menu language={language} setLanguage={setLanguage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
