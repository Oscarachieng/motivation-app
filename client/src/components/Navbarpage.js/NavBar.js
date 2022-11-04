import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/moringa.png";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export default function NavBar(setCurrentUser)
{
        const navigate = useNavigate()
        function handleOnClick(){
         fetch('/logout',{
           method:"DELETE"
         })
         .then(()=>{
           localStorage.clear()
           setCurrentUser(null)
           navigate('/')
         })
         .catch(error=>console.log(error))
        }
  return (
    <div className="links">
      <div className="l1">
        <div className="logo-nav">
          <img className="nav-logo" src={`${logo}`} />
        </div>
        <Link to="/home" id="l2">
          <HomeOutlinedIcon /> Home
        </Link>
        <Link to="/blog" id="l2">
          <CategoryOutlinedIcon />Categories
        </Link>
        <Link to="" id="l2">
          <NotificationsActiveOutlinedIcon />Notification
        </Link>
        <Link to="" id="l2">
          <TextsmsOutlinedIcon />Messages
        </Link>
        <Link to="/" id="l2">
          <SearchOutlinedIcon />Search
        </Link>
        <Link to="" id="l2">
        <LogoutOutlinedIcon onClick={handleOnClick}/>Log Out
        </Link>
      </div>
    </div>
  )
  };