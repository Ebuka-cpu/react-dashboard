import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import Sales from "./pages/sales/Sales";
import NewProduct from "./pages/newproduct/NewProduct";
import Analytics from "./pages/analytics/Analytics";

export default function App() {
  const [name, setName] = useState("Ebuka")
  return (
    <BrowserRouter>
      <Topbar name={name} />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/newuser" element={<NewUser/>}/>

        <Route path="/products" element={<ProductList/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/newproduct" element={<NewProduct/>}/>
        <Route path="/sales" element={<Sales/>}/>

        <Route path="/analytics" element={<Analytics/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  
  );
}
