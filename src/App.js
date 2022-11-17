import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/Cart";
import Completed from "./components/Completed ";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  );
}

export default App;
