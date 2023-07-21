import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from "./components/HomePage/Home";
import AllProducts from './components/HomePage/AllProducts';
import ProductDetails from "./components/HomePage/ProductDetails"
import Cart from "./components/Cart/Cart"
import Login from "./components/User/Login"
import Register from "./components/User/Register"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<h3 style={{textAlign:"center"}}>Page Not Found</h3>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
