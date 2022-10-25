import React from "react";
import "./home.css";
import logo from "../Assets/avator.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <div className="card mb-4" id="userbox">
            <div className="card-body text-center">
              <img
                id="image"
                className="rounded-circle img-fluid"
                src={`${logo}`}
                alt="avatar"
              />
              <h5 className="card-title">JOHN DOE</h5>
              <p className="text-muted mb-1">CATEGORY</p>
              <p className="text-muted mb-1">About</p>
              <hr />
              <div className="card-body p-0  ">
                <div className=" d-flex flex-row ">
                  <li className="list-group-item   p-0">
                    <LanguageIcon className="text-warning" />
                  </li>
                  <li className="list-group-item   p-0">
                    <GitHubIcon style={{ color: "#333333" }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <TwitterIcon style={{ color: "#55acee" }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <InstagramIcon style={{ color: "#ac2bac" }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <FacebookIcon style={{ color: "#3b5998" }} />
                  </li>
                  <li className="list-group-item   p-0">
                    <LinkedInIcon style={{ color: "#3b5998" }} />
                  </li>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        {/* user side column ends */}
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
