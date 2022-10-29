import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

import safaricom from '../Assets/Safaricom-Logo.wine_.png'
import sanlam from '../Assets/sanlam-logo-vector.png'
import microsoft from '../Assets/microsoft.png'
import mastercard from '../Assets/Mastercard.jpg'
import i_click from '../Assets/I-Click-logo_approved.png'
import i_talanta from '../Assets/i-talanta.png'
import grey from '../Assets/grey.png'
import andela from '../Assets/mcf.png'
import dalberg from '../Assets/dalberg-data-insights.png'
import adrian from '../Assets/Adrian.png'
import cybertek from '../Assets/Cybertek.png'

import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Landing() {
  const myStyles = {
    backgroundImage:
      "url('https://moringaschool.com/wp-content/uploads/2022/04/about-us-min.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }

  // function handleOnClick(){
  //   if (currentUser.user_category === "student") {
  //       navigate("/login");
  //     } 

  return (
    <div className="container-fluid" style={myStyles}>
      <div className="landingview">
        <div className="landingviewpage">
          <h1>Moringa Community</h1>
          <p>
            Connect with the community to find answers, ask questions, build
            skills, and accelerate your digital transformation with the Moringa
            Community.
          </p>
          <div className="col-12">
            <button className="btn btn-primary p-0 w-100" type="submit" 
            // onClick={handleOnClick}
            >
              LOGIN
            </button>
          </div>
        </div>
        <div className="landingviewpage"></div>
      </div>
      {/* partners section */}
      <div className="card-body" id="partners">
        <div className="">
          <div className="part-heading">
            <h1>Our Partners</h1>{' '}
          </div>
          <div className="partners-png">
            <div className="im">
              <img className="image" src={`${mastercard}`} alt="mastercard" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${safaricom}`} alt="saf-logo" />
            </div>
            <div className="im">
              <img className="image" src={`${sanlam}`} alt="sanlam" />
            </div>{' '}
            <div className="im">
              <img
                className="image"
                src={`${microsoft}`}
                alt="microsoft"
                style={{ color: '#fff' }}
              />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${i_click}`} alt="i_click" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${adrian}`} alt="adrian" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${i_talanta}`} alt="i_talanta" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${grey}`} alt="grey" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${andela}`} alt="andela" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${dalberg}`} alt="dalberg" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${cybertek}`} alt="cybertek" />
            </div>
          </div>
        </div>
      </div>
      {/* partners section */}
      {/* footersection */}
      <footer>
        <div className="foot">
          <Link to="" id="linkf">
            <TwitterIcon />
            Moringa School
          </Link>

          <Link to="" id="linkf">
            <InstagramIcon />
            Moringa School
          </Link>
          <Link to="" id="linkf">
            <FacebookIcon />
            Moringa School
          </Link>
          <Link to="" id="linkf">
            <LinkedInIcon />
            Moringa School
          </Link>
        </div>
      </footer>
    </div>
  )
}
