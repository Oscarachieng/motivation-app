import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import Student from './components/StudentFolder/Student'
import Staff from './components/Staffpage/Staff'


import Login from './components/Login/Login'
import Home from './components/home/Home'
// import Product from './page/product/Product'
// // import UserList from './page/userList/UserList'
// // import User from './page/user/User'
// import NewUser from './page/newUser/NewUser'
// // import ProductList from './page/productList/ProductList'
// import NewProduct from './page/newProduct/NewProduct'
import Profile from './components/Profile/Profile'
import Landing from './components/LandingPageFolder/Landing'
import NavBar from './components/Navbarpage/NavBar'
import EditUser from './components/UserDetailsUpdateform/EditUser'
import Commentary from './components/ArticleComments/Commentary'
import Admin from './components/Admin/Admin'
import Ftcontentcard from './components/ftcontentcard/Ftcontentcard'
// import UserList from './page/userList/UserList'
export default function App() {
  const initialUser = JSON.parse(localStorage.getItem('currentUser'))
  const [currentUser, setCurrentUser] = useState(initialUser)
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [users,setUsers]=useState([])
useEffect(() => {
    fetch('/users').then((r) => {
      if (r.ok) {
        r.json().then((users) => setUsers(users))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/articles').then((r) => {
      if (r.ok) {
        r.json().then((articles) => setArticles(articles))
      }
    })
  }, [])

  // Start Category
  useEffect(()=>{
    fetch('/categories')
    .then(response=>response.json())
    .then(categories=>setCategories(categories))
    .catch(error=>console.log(error))
},[])
  // End Category API

  return (
    <div className="">

     {/* Side bar and topbar appeared here */}
{/*       
     <NavBar />
      */}
      
       <NavBar currentUser={currentUser} />
       <Routes> 
       <Route
          path="/admin"
          element={<Admin setCategories={setCategories} categories={categories} users={users} setUsers={setUsers}/>}
        /> 
        <Route path="/admin/:id"
        element={<Ftcontentcard/>}
        > </Route>
         <Route
          path="/EditUser"
          element={<EditUser currentUser={currentUser} />}
        /> 
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        /> 
       
        <Route
          path="/staff"
          element={<Staff currentUser={currentUser} articles={articles} setCategories={setCategories} categories={categories} />}
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
      
         {/* <Route path="/users" element={<UserList />} /> */}
        {/* <Route path="/user/:userId" element={<User />} /> 
        <Route path="/newUser" element={<NewUser />} /> 
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} /> 
        <Route path="/newProduct" element={<NewProduct />} /> */}
       
     </Routes> 
    </div>
  )
}
