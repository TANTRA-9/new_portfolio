import React, { Component } from "react";
import { NON_TECHNICAL_SKILLS, TECHNICAL_SKILLS } from "../../constant";
import "./index.css";

class Skills extends Component {
  renderTechnicalSkills = () => {
    return (
      <div className="technical_skills">
        <h1 className="skill_title">Technical Skills</h1>
        <div className="skills_box">
          {TECHNICAL_SKILLS.map((data) => {
            const { name, src: SkillLogo, hold, color } = data;
            return (
              <div className="skills_list">
                <SkillLogo className="skills_image" color={color} />
                <div>
                  <div className="skill_details">
                    <p style={{ color: color }}>{name}</p>
                    <p style={{ color: color }}>{hold}</p>
                  </div>
                  <div className="percentage_outer_box">
                    <div
                      className="percentage_inner_box"
                      style={{
                        width: hold,
                        backgroundColor: color,
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
        <h1 className="skill_title">Non Technical Skills</h1>
        <div className="skills_box">
          {NON_TECHNICAL_SKILLS.map((data) => {
            const { name, src: SkillLogo, hold, color } = data;
            return (
              <div className="skills_list">
                <SkillLogo className="skills_image" color={color} />
                <div>
                  <div className="skill_details">
                    <p style={{ color: color }}>{name}</p>
                    <p style={{ color: color }}>{hold}</p>
                  </div>
                  <div className="percentage_outer_box">
                    <div
                      className="percentage_inner_box"
                      style={{
                        width: hold,
                        backgroundColor: color,
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
