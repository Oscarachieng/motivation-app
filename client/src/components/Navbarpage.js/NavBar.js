import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function NavBar() {
  return (
    <div className="links">
    <div className="l1">
        <Link to = "/home" id="l2"><HomeOutlinedIcon /></Link>
        <Link to = "/videos" id="l2">Videos</Link>
        <Link to = "/blog" id="l2">Blog</Link>
        <Link to = "/content" id="l2">Content</Link>
        <Link to = "/logout" id="l2"><span><img src ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ix6XjMbuCvoq3EQNgJoyEQHaFj%26pid%3DApi&f=1&ipt=0b5bea4417392594431600b77f6778c40e82a3ddaa8e95de8f20e04baf6c7ece&ipo=images"/></span></Link>
    </div>
</div>
  );
}
