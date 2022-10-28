import React from 'react'
import './Landing.css'

import logo from '../Assets/moringa.png'
import safaricom from '../Assets/Safaricom-Logo.wine_.png'
import sanlam from '../Assets/sanlam-logo-vector.png'
import microsoft from '../Assets/microsoft.png'
import mastercard from '../Assets/Mastercard.jpg'
import i_click from '../Assets/I-Click-logo_approved.png'
import i_talanta from '../Assets/i-talanta.png'
import grey from '../Assets/grey.png'
import andela from '../Assets/Andela-logo-landscape-blue-400px.png'
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

  return (
    <div className="container-fluid" style={myStyles}>
      <div className="ms-container py-16 space-y-16" id="partners">
        <div className="grid  grid-cols-2 gap-0.5 sm:grid-cols-3 xl:grid-cols-5">
          <div className="flex justify-content-center py-5 px-3">
            <div className="im">
              <img className="image" src={`${logo}`} alt="logo" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${safaricom}`} alt="saf-logo" />
            </div>
            <div className="im">
              <img className="image" src={`${sanlam}`} alt="sanlam" />
            </div>{' '}
            <div className="im">
              <img className="image" src={`${microsoft}`} alt="microsoft" />
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
      <footer>
        <p className="card-text">
          <TwitterIcon style={{ color: '#fa521c' }} />
          <InstagramIcon style={{ color: '#fa521c' }} />
          <FacebookIcon style={{ color: '#fa521c' }} />
          <LinkedInIcon style={{ color: '#fa521c' }} />
        </p>
      </footer>
    </div>
  )
}
