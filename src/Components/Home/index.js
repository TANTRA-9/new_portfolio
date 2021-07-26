import React, { Component } from "react";
import Navbar from "../Navbar/index";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="background_cover_image">
          <div className="top">
            <h1>Hello !</h1>
            <h2>I'm Nishant full stack web developer.</h2>
          </div>
        </div>
        <div className="background_cover_image">
          <h1 className="text">ekhrekjh</h1>
        </div>
      </div>
    );
  }
}

export default Home;
