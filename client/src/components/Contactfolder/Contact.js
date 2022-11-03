import React from "react";
import "./Contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="mt-3 " id="userbox">
      <div className="card">
        <div className="card-body">
          <p className="" style={{color:"#001e2a"}}>
            About | Advertising | Privacy & Terms | Help Center
          </p>
          <p className="card-text" style={{color:"#001e2a"}} id="footer">
            <TwitterIcon style={{color:"#fa521c"}} />
            <InstagramIcon style={{color:"#fa521c"}} />
            <FacebookIcon style={{color:"#fa521c"}} />
            <LinkedInIcon style={{color:"#fa521c"}} />
          </p>
        </div>
      </div>
    </div>
  );
}
