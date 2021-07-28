import React, { Component } from "react";
import meImage from "../../Assets/Images/me.jpg";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { RiDownloadCloudFill } from "react-icons/ri";
import Resume from "../../Assets/Resume/Nishant.pdf";
import "./index.css";

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="about_box">
          <div>
            <img className="image" src={meImage} />
          </div>
          <div className="about_div">
            <h1>ABOUT ME</h1>
            <h4>Full Stack Developer</h4>
            <p>
              I'm Nishant Tomar.
              <br />
              I'm currently pursuing my BCA from HZU University.
              <br />
              Seeking a role to enhance and explore my technical knowledge.
              <br />
              I'm always energetic and eager to learn new skills.
            </p>
            <br />
            <h3>
              <a
                href="https://github.com/TANTRA-9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size="35px" />
              </a>
              <a
                href="https://www.linkedin.com/in/nishant-tomar-aa2b3b184"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedin size="33px" />
              </a>
              <a
                href="https://www.hackerrank.com/TANTRA9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHackerrank size="34px" />
              </a>
            </h3>
          </div>
        </div>
        <div className="resume">
          <a href={Resume} download="Resume.pdf">
            Download Resume{" "}
            <RiDownloadCloudFill className="resume_download_icon" />
          </a>
        </div>
        <p className="note">
          Need to update the about page along with the resume
        </p>
      </div>
    );
  }
}

export default About;
