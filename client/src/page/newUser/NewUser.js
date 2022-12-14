import "./newUser.css";
import React, { useState } from "react";
export default function NewUser() {
  const [errors, setErrors] = useState([]);
  const [created, setCreated] = useState('')
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    user_category: "student",
  });
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    // use `checked` property of checkboxes instead of `value`
    // if (event.target.type === "checkbox") {
    //   value = event.target.checked;
    // }
    setNewUser({
      ...newUser,
      [name]: value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/users",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((r) => {
      if (r.ok) {
        r.json().then((createdUser) => {
          console.log(createdUser)
          setCreated('User Created successfully!!')
          setNewUser({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            user_category: " "})
          setErrors([])
        });
      } else {
        r.json().then((er) => setErrors(er.errors));
      }
    });
  };
  return (
    <div className="contain">
      <h3 className="newUserTit text-white">Create New User</h3>
      {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      <p style={{color:"green"}}>{created}</p>
      <form className="newUserForm col-md-12" onSubmit={handleSubmit}>
        <div className="newUserIt">
          <label>First Name</label>
          <input
            type="text"
            placeholder="John"
            name="first_name"
            onChange={handleChange}
            value={newUser.first_name}
          />
        </div>
        <div className="newUserIte">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Doe"
            name="last_name"
            onChange={handleChange}
            value={newUser.last_name}
          />
        </div>
        {/* select */}
        <div className="newUserIt">
          <label>User Category</label>
          <select  name ='user_category' onChange={handleChange} value={newUser.user_category}>
            <optgroup label="Select user category" >
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </optgroup>
          </select>
        </div>
        {/* select */}
        <div className="newUserIte">
          <label>Email</label>
          <input
            type="email"
            placeholder="johndoe@moringaschool.student.com"
            name="email"
            onChange={handleChange}
            value={newUser.email}
          />
        </div>
        <div className="newUsertem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={newUser.password}
          />
        </div>
        <div className="newUserIem">
          <button className="btn btn-primary p-0 w-100" type="submit">
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}