import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = props => {
  return (
    <div className="footer">
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration= {500}
        >
          @AJJernigan
        </Link>
        <FontAwesomeIcon icon={faGithub} size="2x"/>
    </div>
  );
};

export default Footer;
