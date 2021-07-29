import React, { Component } from "react";
import "./index.css";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Carousel } from "react-bootstrap";
import img1 from "../../../Assets/Images/stay_fit_1.png";
import img2 from "../../../Assets/Images/stay_fit_2.png";
import img3 from "../../../Assets/Images/stay_fit_3.png";
import img4 from "../../../Assets/Images/stay_fit_4.png";
import img5 from "../../../Assets/Images/stay_fit_5.png";

class Stay_Fit extends Component {
  render() {
    return (
      <div className="stay_fit">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <FiArrowLeftCircle className="stay_fit_back" />
        <a href="/#projects">
          <FiArrowLeftCircle className="stay_fit_back" />
        </a>
        <h1>Stay-Fit</h1>
        <div className="tagBox">
          <h2>About Project</h2>
        </div>
        <h3>Short Description :- </h3>
        <p>
          This Webiste Helps You To Find Hospitals Near You And Fix Your
          Appointment Remotely.
        </p>
        <h3>Features :-</h3>
        <p>
          1. <span>Authentication and verification</span> :- User sign up and
          login using firebase with real gmail verification.
        </p>
        <br />
        <p>
          2. <span>Remotely Registration</span> :- Search hospital around you
          register on them for appointment remotely.
        </p>
        <br />
        <p>
          3. <span>Real time database</span> :- You can add hospitals
          information with real time changes using simple user interface so
          people can see them.
        </p>
        <div className="tagBox">
          <h2 style={{ marginBottom: "40px" }}>Project Images</h2>
        </div>
        <div className="images">
          <Carousel>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={img2} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={img4} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={img5} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="links">
          <h2 style={{ marginTop: "-10px", textDecoration: "underline" }}>
            Project Links
          </h2>
          <h5>
            <span>
              <a
                href="https://stayfit-d84a1.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGoogleCircle size="40px" className="download" />
              </a>
            </span>{" "}
            <span>
              <a
                href="https://github.com/TANTRA-9/Stay_Fit.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="40px" className="github" />
              </a>
            </span>
          </h5>
        </div>
      </div>
    );
  }
}

export default Stay_Fit;
