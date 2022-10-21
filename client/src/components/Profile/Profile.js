import React from "react";
import "./Profile.css";
import logo from "../Assets/moringa.png";

export default function Profile() {
  return (
    <div className="container">
      <div className="im">
        <img className="image" src={`${logo}`} />
      </div>
      <div className="col-md-12">
        <form className="col g-1 needs-validation" novalidate>
          <div class="form-group">
            <label for="exampleFormControlFile1">Profile </label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              required
            />
          </div>

          <div class="form-group">
            <textarea
              class="form-control p-0 w-100"
              placeholder="About"
              id="exampleFormControlTextarea1"
              rows="1"
            ></textarea>
          </div>
          <div className="col-md-12">
    
            <input
              type="text"
              placeholder="john.doe@student.moringaschool.com"
              className="form-control p-0"
              id="validationCustom01"
              value=""
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <label for="validationCustom02" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control p-0"
              id="validationCustom02"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <label for="validationCustom02" className="form-label">
              Confirm Password
            </label>
            <input
              type="text"
              className="form-control p-0"
              id="validationCustom02"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div classNameName="col-12">
            <button className="btn btn-primary p-0 w-100" type="submit">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
