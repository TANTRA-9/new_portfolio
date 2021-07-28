import React, { Component } from "react";
import androidIcon from "../../Assets/Images/android.jpg";
import { HiArrowRight } from "react-icons/hi";
import { ImGoogle2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { PROJECTS_LIST } from "../../constant";
import "./index.css";

class Projects extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="project" id="projects">
        {PROJECTS_LIST.map((data, index) => {
          const { name, src, projectLinks } = data;
          return (
            <div
              className="project_card"
              style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            >
              <h1>{name}</h1>
              <div class="container">
                <div class="card">
                  <div class="face face1">
                    <div class="content">
                      <div class="icon">
                        <img src={src} alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <h5>
                        <a href="/projects/apmah">
                          Project Detail <HiArrowRight />
                        </a>
                      </h5>
                      <div>
                        {projectLinks.map((item) => {
                          const { href, target, rel, Icon } = item;
                          return (
                            <a href={href} target={target} rel={rel}>
                              <Icon size="35px" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
