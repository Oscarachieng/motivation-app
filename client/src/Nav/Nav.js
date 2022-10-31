import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="links">
        <div className="l1">
            <Link to = "/home" id="l2">Home</Link>
            <Link to = "/videos" id="l2">Videos</Link>
            <Link to = "/blog" id="l2">Blog</Link>
            <Link to = "" id="l2">Notification</Link>
            <Link to = "/content" id="l2">Articles</Link>
            {/* <Link to = "/logout" id="l2"><span><img src ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ix6XjMbuCvoq3EQNgJoyEQHaFj%26pid%3DApi&f=1&ipt=0b5bea4417392594431600b77f6778c40e82a3ddaa8e95de8f20e04baf6c7ece&ipo=images"/></span></Link> */}
         <button variant="contained">Login</button>
        </div>
        <br></br>
        <div>T</div>
 </div>

  );
}
