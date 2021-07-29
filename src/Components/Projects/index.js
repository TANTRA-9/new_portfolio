import React, { Component } from "react";
import { HiArrowRight } from "react-icons/hi";
import { PROJECTS_LIST } from "../../constant";
import "./index.css";

class Projects extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="project" id="projects">
        <h1 className="page_titile">Projects</h1>
        {PROJECTS_LIST.map((data, index) => {
          const { name, description, src, projectLinks, componentLink } = data;
          return (
            <div
              className="project_card"
              style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            >
              <div className="project_description">
                <h1>{name}</h1>
                <p>{description}</p>
              </div>
              <div class="container">
                <div class="card">
                  <div class="face face1">
                    <div class="content">
                      <div class="icon">
                        <img src={src} alt="" className="project_image" />
                      </div>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <h4 className="detail_link">
                        <a href={componentLink}>
                          Project Detail <HiArrowRight />
                        </a>
                      </h4>
                      <div>
                        {projectLinks.map((item) => {
                          const { href, target, rel, Icon } = item;
                          return (
                            <a
                              href={href}
                              target={target}
                              rel={rel}
                              className={"project_account_links"}
                            >
                              <Icon className="project_icons" />
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
