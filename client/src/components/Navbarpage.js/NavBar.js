import React from "react";
import "./Navbar.css";
import logo from "../Assets/moringa.png";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

export default function NavBar() {
  return (
    <div className="links">
      <div className="l1">
        <div className="logo-nav">
          <img className="nav-logo" src={`${logo}`} />
        </div>
        <Link to="/home" id="l2">
          <HomeOutlinedIcon />
        </Link>

        <Link to="/blog" id="l2">
          <CategoryOutlinedIcon />
        </Link>
        <Link to="" id="l2">
          <NotificationsActiveOutlinedIcon />
        </Link>
        <Link to="" id="l2">
          <TextsmsOutlinedIcon />
        </Link>

        <Link to="/" id="l2">
          <SearchOutlinedIcon />
        </Link>
        <Link to="/logout" id="l2">
          <span>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ix6XjMbuCvoq3EQNgJoyEQHaFj%26pid%3DApi&f=1&ipt=0b5bea4417392594431600b77f6778c40e82a3ddaa8e95de8f20e04baf6c7ece&ipo=images" />
          </span>
        </Link>
      </div>
    </div>
  );
}
