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
            <div className="col-md-12" id="profile">
              <input
                type="text"
                placeholder="John Doe"
                className="form-control p-0 pr-2"
                required
                value=""
              />
              <input
                type="text"
                placeholder="Profile URL"
                className="form-control p-0"
                required
              />
            </div>
          </div>

          <div class="form-group m-2">
            <textarea
              id="form10"
              placeholder="About"
              class="md-textarea form-control"
              rows="1"
            ></textarea>
          </div>
          <div className="col-md-12 m-auto">
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
            <div className="valid-feedback">Confirmed!</div>
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
