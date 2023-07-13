import React from "react";
import linkedIn from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <div className="pixel2"></div> */}
        <div className="copyright">
          <span> Copyright &copy; Jon Pitans {new Date().getFullYear()}</span>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/jon-pitans/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="Linked In" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100076064745682"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>

          <a
            href="https://github.com/snowdog773"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
