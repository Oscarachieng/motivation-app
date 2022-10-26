import React from "react";

import { Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Student from "./components/StudentFolder/Student";
import Staff from "./components/Staffpage/Staff";

import Login from "./components/Login/Login";
import Home from "./components/home/Home";
import Product from "./page/product/Product";
import UserList from "./page/userList/UserList";
import User from "./page/user/User";
import NewUser from "./page/newUser/NewUser";
import ProductList from "./page/productList/ProductList";
import NewProduct from "./page/newProduct/NewProduct";
import Profile from "./components/Profile/Profile";

export default function App() {
  return (
    <div className="">
      <Login />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/topbar" element={<TopBar />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/student" element={<Student />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
      </Routes>
    </div>
  );
}
