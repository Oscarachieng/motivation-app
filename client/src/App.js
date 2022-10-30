import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import TopBar from './components/topbar/TopBar'
import Sidebar from './components/sidebar/Sidebar'
import Student from './components/StudentFolder/Student'
import Staff from './components/Staffpage/Staff'
import Category from './components/Categoryfolder/Category'

import Login from './components/Login/Login'
import Home from './components/home/Home'
import Product from './page/product/Product'
import UserList from './page/userList/UserList'
import User from './page/user/User'
import NewUser from './page/newUser/NewUser'
import ProductList from './page/productList/ProductList'
import NewProduct from './page/newProduct/NewProduct'
import Profile from './components/Profile/Profile'
import Landing from './components/LandingPageFolder/Landing'
import NavBar from './components/Navbarpage.js/NavBar'
import EditUser from './components/UserDetailsUpdateform/EditUser'
import Commentary from './components/ArticleComments/Commentary'

export default function App() {
  const initialUser = JSON.parse(localStorage.getItem('currentUser'))
  const [currentUser, setCurrentUser] = useState(initialUser)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('/articles').then((r) => {
      if (r.ok) {
        r.json().then((articles) => setArticles(articles))
      }
    })
  }, [])

  return (
    <div className="">
    
      {/* <Landing /> */}
      {/* <NavBar /> */}
      <Routes>
        <Route
          path="/home"
          element={<Home currentUser={currentUser} articles={articles} />}
        />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="/topbar" element={<TopBar />} />
        <Route
          path="/staff"
          element={<Staff currentUser={currentUser} articles={articles} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/student"
          element={<Student currentUser={currentUser} articles={articles} />}
        />
          <Route
          path="/commentary"
          element={<Commentary currentUser={currentUser} articles={articles} />}
        />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
        {/* <Route path="/category" element={<Category currentUser={currentUser} article={article} />} /> */}
      </Routes>
    </div>
  )
}
