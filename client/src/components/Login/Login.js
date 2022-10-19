import React from "react";
import "./Login.css";
import logo from "../Assets/moringa.png";

export default function Login() {
  return (
    <div className="container">
      <div>
        <form className="col g-1 needs-validation" novalidate>
          <div className="im"><img className="image" src={`${logo}`}/></div>
          <div className="col-md-12">
            <label for="validationCustom01" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control p-0"
              id="validationCustom01"
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
          <div classNameName="col-12">
            <button className="btn btn-primary p-0 w-100" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
