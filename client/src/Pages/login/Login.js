import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

export default function Login({ setCurrentUser }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // setIsLoading(true);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user))
          // Persists the current user
          setCurrentUser(user)
          // if (user.user_category === "student") {
          //   navigate("/student");
          // } else {
          navigate('/homme')
          // }
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Moringa Forum</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Moringa Forum.
          </span>
        </div>
        <div className="loginRight">
          <form type="submit" onSubmit={handleSubmit} className="loginBox">
            <input
              placeholder="Email"
              input="text"
              className="loginInput"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              input="password"
              className="loginInput"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="loginButton" type="submit">
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
          </form>
          <div>
            <p>{errors}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
