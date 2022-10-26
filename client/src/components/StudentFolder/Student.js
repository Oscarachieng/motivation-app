import React from "react";
import logo from "../Assets/avator.png";
import "./Student.css";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import Category from "../Categoryfolder/Category";
import EditIcon from "@mui/icons-material/Edit";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Student({currentUser}) {
  const myStyles = {
    backgroundImage:
      "url('https://moringaschool.com/wp-content/uploads/2022/04/about-us-min.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="card h-100 ">
      <div className=" card  " id="userbox" style={myStyles}>
        <div className="card-body bg-primary bg-gradient bg-opacity-25">
          <div className="card-body " id="student-page-profile">
            <img
              id="im-wd"
              className="rounded-circle img-fluid"
              src={`${logo}`}
              alt="avatar"
            />
            <div className="student-page-profile-text">
              {" "}
              <h6 className="card-title">{currentUser.first_name + currentUser.last_name}</h6>
              <p className="text mb-1">CATEGORY</p>
              <p className="text mb-1">About</p>
            </div>
          </div>

          {/* user comment area */}
          <div class="form-outline">
            <label
              class="form-label"
              for="textAreaExample"
              style={{ color: "#fa521c" }}
            >
              Say something...
            </label>
            <i>
              <EditIcon />
            </i>
            <textarea
              className="form-control text-black opacity-50"
              id="textArea"
              rows=""
              style={{ color: "#ffffff96" }}
            ></textarea>
            <TelegramIcon
              className="btn-rounded float-end"
              type="submit"
              value="Send"
              style={{ color: "#fa521c" }}
            />
          </div>
          {/* user comment area section ends */}
          <a href="#" className="">
            <ShareIcon style={{ color: "#fa521c" }} />
          </a>
          <a href="#" className="">
            <CommentIcon style={{ color: "#fa521c" }} />
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
