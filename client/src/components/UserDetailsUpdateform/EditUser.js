// import React from "react";
// import "./EditUser.css";
// import logo from "../Assets/moringa.png";

// export default function EditUser() {
//   return (
//     <div className="container">
//       <div className="im">
//         <img className="image" src={`${logo}`} />
//       </div>
//       <div className="col-md-12">
//         <form className="col g-1 needs-validation" novalidate>
//           <div class="form-group">
//             <div className="col-md-12" id="profile">
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 className="form-control p-0 pr-2"
//                 required
//                 value=""
//               />
//             </div>
//           </div>

//           <div class="form-group m-2">
//             <label for="formFileSm" class="form-label">
//               Profile picture
//             </label>
//             <input
//               class="form-control form-control-sm"
//               id="formFileSm"
//               type="file"
//             />
          
//           </div>
//           <div className="col-md-12 m-auto">
//             <input
//               type="text"
//               placeholder="john.doe@student.moringaschool.com"
//               className="form-control p-0"
//               id="validationCustom01"
//               value=""
//               required
//             />
//             <div className="valid-feedback">Looks good!</div>
//           </div>
//           <div className="col-md-12">
//             <label for="validationCustom02" className="form-label">
//               Username
//             </label>
//             <input
//               type="text"
//               className="form-control p-0"
//               id="validationCustom02"
//               required
//             />
//             <div className="valid-feedback">Looks good!</div>
//           </div>
    
//           <div classNameName="col-12">
//             <button className="btn btn-primary p-0 w-100" type="submit">
//               UPDATE PROFILE 
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* test  */}
//     </div>
//   );
// }
import React, { useState } from "react";
import "./EditUser.css";
import logo from "../Assets/moringa.png";
export default function EditUser({currentUser}) {
  console.log(currentUser.id)
  const [errors, setErrors] = useState([])
  const [userData, setUserData] = useState({
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    email: currentUser.email,
    password: "",
    password_confirmation: '',
    // avatar_url: '',
    user_category: currentUser.user_category,
    username: '',
  })
  const handleChange = (event)=> {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
      // [event.target.name]: event.target.value,
    })
  }

// Imported start
//   const [avatarUrl, setAvatarUrl] = useState("");

//   // Handles file upload event and updates state
//   function handleUpload(event) {

// setAvatarUrl(event.target.files[0]);
    

//     // Add code here to upload file to server
//     // ...
//   }
  // imported end
  //  const finalUserData = {...userData, avatar_url:avatarUrl};
  //  console.log(finalUserData)
  
   async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch(`/users/${currentUser.id}`, {
      method: 'PATCH',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
    })
    const updatedUser = await response.json()
        if (response.ok) {
          console.log(updatedUser);
        } else {
          console.log(updatedUser)
          setErrors([updatedUser.errors]);
        }
  }
  return (
    <div className="container">
      <div className="im">
        <img className="image" src={`${logo}`} />
      </div>
      <div className="col-md-12">
      {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <form className="col g-1 needs-validation" onSubmit={handleSubmit} novalidate>
          <div class="form-group">
             <p>First name</p>
            <div className="col-md-12" id="profile">
              <input
                type="text"
                placeholder="John"
                className="form-control p-0 pr-2"
                required
                name="first_name"
                onChange={handleChange}
                value={userData.first_name}
              />
            </div>
            <p>Last  Name</p>
            <div className="col-md-12" id="profile">
              <input
                type="text"
                placeholder="Doe"
                className="form-control p-0 pr-2"
                required
                name="last_name"
                value={userData.last_name}
                onChange={handleChange}
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
              onChange={handleChange}
              name="avatar_url"
              value={userData.avatar_url}
            />
          </div>
          <div className="col-md-12 m-auto">
          <p>email</p>
            <input
              type="text"
              placeholder="john.doe@student.moringaschool.com"
              className="form-control p-0"
              id="validationCustom01"
              onChange={handleChange}
              value={userData.email}
              name="email"
              required
            />
             <p>password</p>
             <input
              type="password"
              placeholder="enter password"
              className="form-control p-0"
              id="validationCustom01"
              value={userData.password}
              name="password"
              onChange={handleChange}
              required
            />
            <p>password_confirmatiom</p>
            <input
              type="password"
              placeholder="confrim password"
              className="form-control p-0"
              id="validationCustom01"
              value={userData.password_confirmation}
              name="password_confirmation"
              onChange={handleChange}
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
              placeholder="username"
              className="form-control p-0"
              id="validationCustom02"
              required
              name='username'
              value= {userData.first_name + " " + userData.last_name}
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