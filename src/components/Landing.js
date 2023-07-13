/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "../styles/landing.css";
class Landing extends Component {
  state = {};

  render() {
    return (
      <>
        <h1>
          <span id="jon">Jon </span>
          <span id="pitans">Pitans </span>
          <span id="web">Web </span>
          <span id="design">Design </span>
        </h1>
        <div className="wrapper">
          <p className="enter">Click To Enter</p>
        </div>
      </>
    );
  }
}

export default Landing;
