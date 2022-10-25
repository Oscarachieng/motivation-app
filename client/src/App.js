import React from 'react';
import { Routes,Route } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';

// import Login from './components/Login/Login';
import Home from './page/home/Home';
// import Product from './page/product/Product';
// import UserList from './page/userList/UserList';
// import User from './page/user/User';
// import NewUser from './page/newUser/NewUser';
// import ProductList from './page/productList/ProductList';
// import NewProduct from './page/newProduct/NewProduct';
// import Profile from './components/Profile/Profile';
// import TopBar from './components/topbar/TopBar';


export default function App() {
  // const mystyles ={
  //   background:"#001E2A",
  //   textAlign:"center",
  //   padding: 10,
  //   textTransform:"uppercase",
  //   color:"#FF8C00",
  //   marginBottom: 30,
  // }
  return (
    
    <div className="">
      {/* <TopBar /> */}
      <Routes>
     
      <Route path="/" element={<Home />} />
        <Route path="/" element={<Sidebar />} />
        {/* <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} /> */}
      </Routes>
     
    </div>
  );
}

