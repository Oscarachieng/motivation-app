import React, { useState } from 'react'
import avatar from '../Assets/avator.png'
import { useNavigate } from 'react-router-dom'
import './home.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LanguageIcon from '@mui/icons-material/Language'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'

import Category from '../Categoryfolder/Category'
import Contact from '../Contactfolder/Contact'
import Ads from '../Adsfolder/Ads'
import NavBar from '../Navbarpage/NavBar'

export default function Home({ currentUser, articles }) {
  const navigate = useNavigate()

  const myStyles = {
    backgroundImage:
      "url('https://moringaschool.com/wp-content/themes/moringa/public/images/default.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  function handleOnClick() {
    if (currentUser.user_category === 'student') {
      navigate('/student')
    } else {
      navigate('/staff')
    }
  }
  return (
    <div className="container-fluid">
      <div className="row" style={myStyles} id="main-body">
        {/* user section  */}
        <div className="col-sm-3">
          <div className="card mb-4 col-sm-3 position-fixed" id="userbox">
            <div className="card-body text-center">
              <div className="bio-link" onClick={handleOnClick}>
                <img
                  placeholder="{`${avatar}}"
                  id="image"
                  className="rounded-circle img-fluid"
                  src={currentUser.avatar_url.url}
                  alt="avatar"
                />
                <h5 className="card-title">
                  {currentUser.first_name + ' ' + currentUser.last_name}
                </h5>
                <p className="text-muted mb-1">{currentUser.category}</p>
                <p className="text-muted mb-1">{currentUser.about}</p>
              </div>

              <hr />
              {/* <div className="card-body p-0  ">
                <div className=" d-flex flex-row ">
                  <li className="list-group-item   p-0">
                    <LanguageIcon className="text-warning" />
                  </li>
                  <li className="list-group-item   p-0">
                    <GitHubIcon style={{ color: '#333333' }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <TwitterIcon style={{ color: '#55acee' }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <InstagramIcon style={{ color: '#ac2bac' }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <FacebookIcon style={{ color: '#3b5998' }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <LinkedInIcon style={{ color: '#3b5998' }} />
                  </li>
                </div>
              </div> */}
              <hr />
              {/* user profile section ends */}
              {/* user comment area */}
              <div className="form-outline">
                <label className="form-label">Say something...</label>
                <textarea
                  className="form-control"
                  id="textAreaExample"
                  rows=""
                ></textarea>
                <TelegramIcon
                  type="submit"
                  value="Send"
                  style={{ color: '#fa521c' }}
                />
              </div>
              {/* user comment area section ends */}
            </div>
          </div>
        </div>

        {/* user side column ends */}

        {/* Widget section */}
        <div className="col-sm-6">
          {articles.map((article) => (
            <Category
              key={article.id}
              article={article}
              currentUser={currentUser}
            />
          ))}
        </div>

        {/* widget section ends */}

        {/* Ads section */}
        <div className="col-sm-3">
          <Ads />
        </div>

        {/* Ads section ends */}
      </div>
    </div>
  )
}
