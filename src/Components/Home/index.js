import React, { Component } from "react";
import Navbar from "../Navbar/index";
import About from "../About/index";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  renderHomeScreen = () => {
    return (
      <div className="background_cover_image" id="home">
        <div className="top">
          <h1>Hello !</h1>
          <h2>
            <a href="#about">
              <IoIosArrowDropdownCircle />
            </a>
          </h2>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Navbar />
        {this.renderHomeScreen()}
        <About />
      </div>
    );
  }
}

export default Home;
