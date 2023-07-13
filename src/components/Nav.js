import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" onClick={() => props.setShowMenu(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => props.setShowMenu(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => props.setShowMenu(false)}>
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://jon.pitans.co.uk/pdf/cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
