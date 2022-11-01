import React from "react";
import Contact from "../Contactfolder/Contact";
import "./Ads.css";

export default function Ads() {
  return (
    <div className="card position-fixed" >
      <div className="card-body" id="userbox">
        <img
          id="image"
          className="rounded-circle img-fluid"
          src={``}
          alt="Advertisement"
        />
        <h5 className="card-title">Ad</h5>
        <p className="text-muted mb-1">CATEGORY</p>
        <p className="card-text">Ad content</p>
      </div>
      <div><Contact /></div>
      
    </div>
  );
}
