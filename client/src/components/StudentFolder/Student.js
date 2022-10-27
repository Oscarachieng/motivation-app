import React from "react";

import "./Student.css";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import Category from "../Categoryfolder/Category";
import EditIcon from "@mui/icons-material/Edit";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Student({ currentUser, articles }) {
  const myStyles = {
    backgroundImage:
      "url('https://moringaschool.com/wp-content/uploads/2022/04/about-us-min.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",

  };

  //  function handleSubmit(){
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     fetch('https://jsonplaceholder.typicode.com/posts', {
  //        method: 'POST',
  //        body: JSON.stringify({
  //           title: title,
  //           body: body,
  //           userId: Math.random().toString(36).slice(2),
  //        }),
  //        headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //        },
  //     })
  //     .then((res) => res.json())
  //     .then((post)=> console.log(post));
  return (
    <div className="card h-100 ">
      <div className=" card  " id="userbox" style={myStyles}>
        <div className="card-body bg-primary bg-gradient bg-opacity-25">
          <div className="fixer">
            <div className="card-body " id="student-page-profile">
              <img
                id="im-wd"
                className="rounded-circle img-fluid"
                src={currentUser.avatar_url.url}
                alt="avatar"
              />
              <div className="student-page-profile-text">
                {" "}
                <h6 className="card-title">
                  {currentUser.first_name + " " + currentUser.last_name}
                </h6>
                <p className="text mb-1">CATEGORY</p>
                <p className="text mb-1">About</p>
              </div>
            </div>

            {/* user comment area */}
            <form 
            // onSubmit={handleSubmit} 
            class="form-outline">
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
            </form>
            {/* user comment area section ends */}
            <a href="#" className="">
              <ShareIcon style={{ color: "#fa521c" }} />
            </a>
            <a href="#" className="">
              <CommentIcon style={{ color: "#fa521c" }} />
            </a>
          </div>

          <div className="media"></div>
          {/* Widget section */}
          <div className="card h-100">
            {articles.map((article) => (
              <Category key={article.id} article={article} />
            ))}
          </div>

          {/* widget section ends */}
        </div>
      </div>
    </div>
  );
}
