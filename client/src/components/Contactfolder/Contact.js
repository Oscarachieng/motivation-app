import React from "react";
import "./Contact.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="mt-3" id="userbox">
      <div className="card">
        <div className="card-body">
          <p className="">
            About | Advertising | Privacy & Terms | Help Center
          </p>
          <p className="card-text">
            <TwitterIcon style={{ color: "#55acee" }} />
            <InstagramIcon style={{ color: "#ac2bac" }} />
            <FacebookIcon style={{ color: "#3b5998" }} />
            <LinkedInIcon style={{ color: "#3b5998" }} />
          </p>
        </div>
      </div>
    </div>
  );
}
