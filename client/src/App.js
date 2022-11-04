import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import TopBar from './components/topbar/TopBar'
import Sidebar from './components/sidebar/Sidebar'
import Student from './components/StudentFolder/Student'
import Staff from './components/Staffpage/Staff'
import Login from './components/Login/Login'
import Home from './components/home/Home'
import UserList from './page/userList/UserList'
import User from './page/user/User'
import NewUser from './page/newUser/NewUser'
import Profile from './components/Profile/Profile'
import Landing from './components/LandingPageFolder/Landing'
import Commentary from './components/ArticleComments/Commentary'
import FourOhFour from './page/404Page.js/404Page'
import NavBar from './components/Navbarpage.js/NavBar'

export default function App() {
  const initialUser = JSON.parse(localStorage.getItem('currentUser'))
  const [currentUser, setCurrentUser] = useState(initialUser)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('/articles').then((r) => {
      if (r.ok) {
        r.json().then((articles) =>{

        if(currentUser.user_category === 'student'){
          const toDisplayArticles = articles.filter(article=>{
            return article.is_approved === true
          })
           setArticles(toDisplayArticles)
        }else{
          setArticles(articles)}
        }
         )
      }
    })
  }, [])


  function onDelete(deletedPost){ 
    const updatedList = articles.filter(article=>{
      return article.id !== deletedPost.id
    })
     setArticles(updatedList)
  }

  function onFlag(flagged){
    if(currentUser.user_category === 'student'){
      const displayedPost = articles.filter(article=>{
        return article.is_flagged === true
      })
      setArticles(displayedPost)
    }
  }

  return (
    <div className="">
        <NavBar/>
        <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home currentUser={currentUser} articles={articles} onDelete={onDelete}/>}       />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/topbar" element={<TopBar />} />
        <Route path="/staff"  element={<Staff currentUser={currentUser} articles={articles} onDelete={onDelete} />}       />
        <Route path="/profile" element={<Profile />} />
        <Route path="/student" element={<Student currentUser={currentUser} articles={articles} onDelete={onDelete} />}       />
        <Route path="/commentary" element={<Commentary currentUser={currentUser} articles={articles} setArticles={setArticles} />}        />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path='*' element={<FourOhFour/>}/>
      </Routes>
    </div>
  )
}
