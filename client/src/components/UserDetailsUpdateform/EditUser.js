import React from "react";
import "./EditUser.css";
import logo from "../Assets/moringa.png";

export default function EditUser() {
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
            </div>
          </div>

          <div class="form-group m-2">
            <label for="formFileSm" class="form-label">
              Profile picture
            </label>
            <input
              class="form-control form-control-sm"
              id="formFileSm"
              type="file"
            />
          
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
              Username
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
              UPDATE PROFILE 
            </button>
          </div>
        </form>
      </div>
      {/* test  */}
    </div>
  );
}