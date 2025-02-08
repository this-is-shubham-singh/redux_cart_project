import React from "react";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Cart from "./Component/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
