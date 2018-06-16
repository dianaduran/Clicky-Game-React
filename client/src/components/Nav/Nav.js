import React from "react";
import "./nav.css";
// import Counter from "../Counter";

const Nav = (props) => (
  <nav className="nav nav-pills nav-fill navbar">
   <li className="nav-item">
    <a className="nav-link title" href="/">Clicky Game</a>
  </li>
  <li className="nav-item">
    Click an image to begin!
  </li>
  <li className="nav-item">
  <p>Score : {props.count} | Top Score : {props.topScore}</p>
  </li>
   </nav>
);

export default Nav;
