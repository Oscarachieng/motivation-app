import React,{useState} from 'react'

import { link } from 'react-router-dom'
// import TopBar from '../components/topbar/TopBar';
// import Sidebar from '../components/sidebar/Sidebar';
import Home from '../home/Home'
import TopBar from '../topbar/TopBar'
import Sidebar from '../sidebar/Sidebar'
import "./admin.css"
import Login from '../Login/Login'
import UserList from '../../page/userList/UserList'
import Ftuser from '../Ftuser/Ftuser'
import Ftcontent from '../ftcontent/Ftcontent'
import Ftcategory from '../ftcategory/Ftcategory'




export default function Admin({setCategories, categories}) {
  const [showusers,setShowusers]= useState(false)
  const [posts,setPosts]= useState(false)
  const [showcategory,setshowCategory]= useState(false)
  return (

    <div className='Con'>
        <TopBar />
        <div className='fluid'>
            <div className="Con2"> 
            <Sidebar setShowusers={setShowusers} showusers={showusers} posts={posts} setPosts={setPosts} showcategory={showcategory} setshowCategory={setshowCategory}/> 
            </div>
            <div className='Container-fluid'>
            {showusers? <Ftuser /> : null}
            {posts? <Ftcontent /> : null}
            {showcategory? <Ftcategory setCategories={setCategories} categories={categories}/> : null}
            
            </div>
            </div>
    </div>
  )
}
