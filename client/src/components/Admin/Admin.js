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




export default function Admin() {
  const [showusers,setShowusers]= useState(false)
  const [posts,setPosts]= useState(false)
  return (

    <div className='Con'>
        <TopBar />
        <div className='fluid'>
            <div className="Con2"> 
            <Sidebar setShowusers={setShowusers} showusers={showusers} posts={posts} setPosts={setPosts}/> 
            </div>
            <div className='Container-fluid'>
            {posts? <Login  /> : null}
            </div>
            </div>
    </div>
  )
}
