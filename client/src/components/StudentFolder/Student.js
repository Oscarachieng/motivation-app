import React from "react";
import logo from "../Assets/avator.png";
import "./Student.css";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import Category from "../Categoryfolder/Category";
import EditIcon from '@mui/icons-material/Edit';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Student() {

  const myStyles ={
      backgroundImage: "url('https://moringaschool.com/wp-content/uploads/2022/04/about-us-min.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     
    }
  return (
    <div className="card h-100 "  >
      <div className="card " id="userbox" style={myStyles}>
        <div className="card-body bg-gradient-to-b from-primary to-transparent">
          <div className="card-body " id='student-page-profile'>
           
            <img
              id="im-wd"
              className="rounded-circle img-fluid"
              src={`${logo}`}
              alt="avatar"
            />
            <div className="student-page-profile-text">
              {" "}
              <h6 className="card-title">JOHN DOE</h6>
              <p className="text mb-1">CATEGORY</p>
              <p className="text mb-1">About</p>
            </div>
          </div>
          <hr />

          {/* user comment area */}
          <div class="form-outline">
            <label class="form-label" for="textAreaExample">
              Say something...
            </label>
            <i><EditIcon /></i>
            <textarea
              class="form-control"
              id="textArea"
              rows=""
            ></textarea>
            <TelegramIcon  type="submit" value="Send" />
          </div>
          {/* user comment area section ends */}
          <a href="#" className="">
            <ShareIcon />
          </a>
          <a href="#" className="">
            <CommentIcon />
          </a>
          <div className="media"></div>
          {/* Widget section */}
          <div className="card h-100">
            <Category />
          </div>

          {/* widget section ends */}
        </div>
      </div>
    </div>
  );
}
