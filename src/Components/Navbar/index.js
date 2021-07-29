import React, { Component } from "react";
import { NAVIGATORS } from "../../constant";
import { GiDoubleFaceMask } from "react-icons/gi";
import "./index.css";

class Navbar extends Component {
  state = {
    isSideBarActive: false,
  };

  show = () => {
    this.setState({ isSideBarActive: !this.state.isSideBarActive });
  };

  render() {
    return (
      <div>
        <nav className="nav" style={{ backgroundColor: this.props.backColor }}>
          <label className="logo">
            <GiDoubleFaceMask /> NISHANT
          </label>
          <ul
            className="list"
            style={{
              transform: this.state.isSideBarActive ? "translateX(0)" : null,
              backgroundColor: this.props.navBackColor,
            }}
          >
            {NAVIGATORS.map((data) => {
              const { Name, Route, Icon } = data;
              return (
                <li>
                  <a href={Route}>
                    <Icon /> {Name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="dots" onClick={this.show}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
