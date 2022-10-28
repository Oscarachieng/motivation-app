import "./newUser.css";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const [errors, setErrors] = useState([])
  const [newUser, setNewUser] = useState({first_name: '',last_name: '', 
  email:'',password:''} )
  const navigate = useNavigate()
   const handleChange = (event)=> {
    setNewUser({...newUser,[event.target.name]:event.target.value})
   }
  const handleSubmit = (event)=> {
     event.preventDefault()
     fetch('/users',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then(r => {
      if (r.ok){
       r.json().then(user => {
         setNewUser(user)
         navigate('/login')
       })
      } else {
        r.json().then(errorData => setErrors([errorData.errors])  )
      }
    })
  }
  return (
    <div className="container">
      <h3 className="newUserTitle text-white">Create New User</h3>
      <form className="newUserForm col-md-12" onSubmit={handleSubmit}>
         
  {errors.length > 0 && (
    <ul style={{ color: "red" }}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )}
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="John" name="first_name" onChange={handleChange} value={newUser.first_name}/>
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" name="last_name"  onChange={handleChange} value={newUser.last_name}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="johndoe@moringaschool.student.com"  onChange={handleChange}
           value={newUser.email} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" name="password" onChange={handleChange} value={newUser.password}/>
        </div>
        <div className="newUserItem">
        <button className="btn btn-primary p-0 w-100" type="submit" >
              CREATE
            </button>
        </div>
      
      
        
        
      </form>
    </div>
  );
}
