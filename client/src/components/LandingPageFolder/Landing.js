
import React from 'react';
import "./Landing.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Landing() {

  const myStyles = {
    backgroundImage:
      "url('https://moringaschool.com/wp-content/uploads/2022/04/about-us-min.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }; 

  return (
    <div className="container-fluid" style={myStyles}>
      <footer>
      <p className="card-text">
            <TwitterIcon style={{color:"#fa521c"}} />
            <InstagramIcon style={{color:"#fa521c"}} />
            <FacebookIcon style={{color:"#fa521c"}} />
            <LinkedInIcon style={{color:"#fa521c"}} />
          </p>
      </footer>
    </div>
  )
}

