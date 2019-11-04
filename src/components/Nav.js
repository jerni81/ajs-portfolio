import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = props => {
  return (
    <div className="nav">
      <Link
        activeClass="active"
        to="bio"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >
        Bio
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >
        Contact
      </Link>
    </div>
  );
};

export default Nav;
