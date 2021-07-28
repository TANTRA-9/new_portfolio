import React, { Component } from "react";
import { TECHNICAL_SKILLS } from "../../constant";
import "./index.css";

class Skills extends Component {
  renderTechnicalSkills = () => {
    return (
      <div className="technical_skills">
        <h1 className="technical_skill_title">Technical Skills</h1>
        <div className="skills_box">
          {TECHNICAL_SKILLS.map((data) => {
            const { name, src, hold } = data;
            return (
              <div className="skills_list">
                <img src={src} className="skills_image" />
                <div>
                  <div className="skill_details">
                    <p>{name}</p>
                    <p>{hold}</p>
                  </div>
                  <div className="percentage_outer_box">
                    <div
                      className="percentage_inner_box"
                      style={{
                        width: hold,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  renderNonTechnicalSkills = () => {
    return (
      <div className="non_technical_skills">
        <h1>Non Technical Skills</h1>
        <p>All Non Technical skills</p>
      </div>
    );
  };

  render() {
    return (
      <div className="skills" id="skills">
        {this.renderTechnicalSkills()}
        {this.renderNonTechnicalSkills()}
      </div>
    );
  }
}

export default Skills;
