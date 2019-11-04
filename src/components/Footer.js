import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = props => {
  return (
    <div className="footer">
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        @AJJernigan
        <FontAwesomeIcon icon={faGithub} size="2x"/>
    </div>
  );
};

export default Footer;
