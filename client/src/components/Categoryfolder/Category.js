import React from "react";
import "./Category.css";
import logo from "../Assets/avator.png";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";

export default function Category() {
  return (
    <div className="card" id="userbox">
      <div className="card-body">
        <div className="d-flex">
          <img
            id="imw-wd"
            className="rounded-circle img-fluid"
            src={`${logo}`}
            alt="avatar"
            style={{ size: "80px" }}
          />
          <div className="mt-2">
            <h6 className="card-title">JOHN DOE</h6>
            <p className="text-muted mb-1">CATEGORY</p>
          </div>
        </div>

        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <div className="media"></div>

        <a href="#" className="">
          <ShareIcon />
        </a>
        <a href="#" className="">
          <CommentIcon />
        </a>
      </div>
    </div>
  );
}
