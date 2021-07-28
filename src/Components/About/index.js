import React, { Component } from "react";
import meImage from "../../Assets/Images/me.jpg";
import { RiDownloadCloudFill } from "react-icons/ri";
import { ACCOUNT_LINKS } from "../../constant";
import Resume from "../../Assets/Resume/Nishant.pdf";
import "./index.css";

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="about_box">
          <div>
            <img className="image" src={meImage} alt="" />
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
              {ACCOUNT_LINKS.map((data) => {
                const { href, target, rel, Icon } = data;
                return (
                  <a href={href} target={target} rel={rel}>
                    <Icon size="35px" />
                  </a>
                );
              })}
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
