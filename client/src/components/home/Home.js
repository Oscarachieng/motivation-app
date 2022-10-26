import React from "react";
import { useEffect } from "react";
import "./home.css";
import logo from "../Assets/avator.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

import Category from "../Categoryfolder/Category";
import Contact from "../Contactfolder/Contact";
import Ads from "../Adsfolder/Ads";

export default function Home() {
  



  const myStyles = {
    backgroundImage:
      "url('	https://moringaschool.com/wp-content/themes/moringa/public/images/default.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="container-fluid" id='main-body'>
      <div className="row"  style={myStyles}>
        
          {/* user section  */}
        <div className="col-sm-3">
          <div className="card mb-4" id="userbox">
            <div className="card-body text-center">
              <img
                id="image"
                className="rounded-circle img-fluid"
                src={`${logo}`}
                alt="avatar"
              />
              <h5 className="card-title">JOHN DOE</h5>
              <p className="text-muted mb-1">CATEGORY</p>
              <p className="text-muted mb-1">About</p>
              <hr />
              <div className="card-body p-0  ">
                <div className=" d-flex flex-row ">
                  <li className="list-group-item   p-0">
                    <LanguageIcon className="text-warning" />
                  </li>
                  <li className="list-group-item   p-0">
                    <GitHubIcon style={{ color: "#333333" }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <TwitterIcon style={{ color: "#55acee" }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <InstagramIcon style={{ color: "#ac2bac" }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <FacebookIcon style={{ color: "#3b5998" }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <LinkedInIcon style={{ color: "#3b5998" }} />
                  </li>
                </div>
              </div>
              <hr />
              {/* user profile section ends */}
              {/* user comment area */}
              <div class="form-outline">
                <label class="form-label" for="textAreaExample">
                  Say something...
                </label>
                <textarea
                  class="form-control"
                  id="textAreaExample"
                  rows=""
                ></textarea>
               <TelegramIcon type="submit" value="Send" style={{color:"#fa521c"}}/>
              </div>
              {/* user comment area section ends */}
            </div>
          </div>
        </div>

        {/* user side column ends */}

        {/* Widget section */}
        <div className="col-sm-6"><Category /></div>
        
        {/* widget section ends */}

        {/* Ads section */}
        <div className="col-sm-3">
        <Ads />
          {/* Contacts section */}
          <Contact />
          {/* Contacts section */}
        </div>

        {/* Ads section ends */}
        
      
      </div>
    </div>
  );
}
