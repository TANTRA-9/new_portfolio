import React, { Component } from "react";
import { NAVIGATORS } from "../../constant";
import { GiDoubleFaceMask } from "react-icons/gi";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="back">
        <div className="navbar">
          <div className="title navigations">
            <GiDoubleFaceMask />
            <p>Nishant Tomar</p>
          </div>
          <div className="navigations">
            {NAVIGATORS.map((data) => {
              const { Name, Route, Icon } = data;
              return (
                <div className="navigation_text">
                  <a className="link" href={Route}>
                    <div className="navigations">
                      <Icon />
                      <p>{Name}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
