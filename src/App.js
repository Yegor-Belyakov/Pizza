import React, { useState } from "react";
import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Route, Routes } from "react-router";
import Cart from ".//components/pages/Cart.jsx";

export const SearchContext = React.createContext();




function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">

      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
