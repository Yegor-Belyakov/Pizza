import React from "react";
import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Route, Routes } from "react-router";
import Cart from ".//components/pages/Cart.jsx";






function App() {
  

  return (
    <div className="wrapper">

      
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    
    </div>
  );
}

export default App;
