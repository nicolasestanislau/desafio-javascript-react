import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Car from './components/Car';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/carrinho" element={<Car/>} />
    </Routes>
  );
}

export default App;
