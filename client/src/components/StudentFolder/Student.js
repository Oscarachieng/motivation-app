import React from "react";
import logo from "../Assets/avator.png";
import "./Student.css";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import Category from "../Categoryfolder/Category";

export default function Student() {
  return (
    <div className="card h-100 ">
      <div className="card" id="userbox">
        <div className="card-body">
          <div className="card-body text-center d-flex justify-content-end">
            <img
              id="im-wd"
              className="rounded-circle img-fluid"
              src={`${logo}`}
              alt="avatar"
            />
            <div className="">
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
            <textarea
              class="form-control"
              id="textAreaExample"
              rows=""
            ></textarea>
            <input type="submit" value="Send" />
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
