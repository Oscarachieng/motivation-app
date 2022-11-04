import React from "react";
import "./Ads.css";

export default function Ads() {
  return (
    <div className="card" id="userbox">
      <div className="card-body">
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
    </div>
  );
}
