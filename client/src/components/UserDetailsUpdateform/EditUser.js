import React, { useState } from "react";
import "./EditUser.css";
import logo from "../Assets/moringa.png";

export default function EditUser({currentUser}) {
  const [userDetails,setUserDetails] = useState({username:""})

  function handleOnchange(event){
   setUserDetails({...userDetails,[event.target.name]:event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch(`/users/${currentUser.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(userDetails)
    }).then(response => response.json()).then().catch(error=>console.log(error))
  }
  return (
    <div className="container">
      <div className="im">
        <img className="image" src={`${logo}`} />
      </div>
      <div className="col-md-12">
        <form className="col g-1 needs-validation" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-md-12" id="profile">
              <input
                type="text"
                placeholder="John Doe"
                className="form-control p-0 pr-2"
                required
                defaultValue={currentUser.first_name +` `+currentUser.last_name}
              />
            </div>
          </div>

          <div className="form-group m-2">
            <label className="form-label">
              Profile picture
            </label>
            <input
              className="form-control form-control-sm"
              id="formFileSm"
              type="file"
            />          
          </div>
          
          <div className="col-md-12">
            <label  className="form-label">
              Username
            </label>
            <input
              type="text"
              name = "username"
              className="form-control p-0"
              id="validationCustom02"
              onChange={handleOnchange}
              value = {userDetails.username}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
    
          <div className="col-12">
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