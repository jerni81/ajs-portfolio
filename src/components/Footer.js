import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = props => {
  return (
    <div className="footer">
        <a target="_blank" href="https://www.linkedin.com/in/aj-jernigan/">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
        <Link
          className="link"
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration= {500}
        >
          AJJernigan &copy;2019
        </Link>
        <a target="_blank" href="https://github.com/jerni81">
          <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
    </div>
  );
};

export default Footer;
