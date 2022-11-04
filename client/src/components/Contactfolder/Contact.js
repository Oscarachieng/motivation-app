import React from "react";
import "./Contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="foote">
      
        <div className="fut">
          <p className="contact pr-5">
            About | Privacy & Terms | Help Center
          </p>
          <p className="foIcons">
          
            <TwitterIcon style={{marginRight:'10px'}}/>
            <InstagramIcon style={{marginRight:'10px'}}/>
            <FacebookIcon  style={{marginRight:'10px'}}/>
            <LinkedInIcon  />
          </p>
        </div>
      
    </div>
  );
}
