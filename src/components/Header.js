import React, { useState } from "react";
import Nav from "./Nav";
import hamburger from "../assets/simple_hamburger.svg";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="header">
        <div className="pixel"></div>
        <h1>Jon Pitans</h1>
        <img
          src={hamburger}
          className="hamburger"
          alt="hamburger"
          onClick={() => setShowMenu(showMenu ? false : true)}
        ></img>
        <div className="wideNav">
          <Nav setShowMenu={setShowMenu} />
        </div>
      </div>
      {showMenu && (
        <div className="dropMenu">
          <Nav setShowMenu={setShowMenu} />
        </div>
      )}
    </>
  );
};

export default Header;
