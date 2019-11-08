import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = props => {
  return (
    <div className="nav">
      <Link
        className="link"
        activeClass="active"
        to="bio"
        spy={true}
        smooth={true}
        duration= {500}
      >
        <div id="navBio">Bio</div>
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration= {500}
      >
        <div id="navProjects">Projects</div>
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration= {500}
      >
        <div id="navContact">Contact</div>
      </Link>
    </div>
  );
};

export default Nav;
