import React from "react";
import { Link } from "react-router-dom";

const Bio = props => {
  return (
    <div className="bio">
      <h1><u>Bio</u></h1>
      <div className="bio-wrapper">
        <div className="statement">
          <div className="shwStatement">
          </div>
        </div>
        <div className="tech">
          <div className="shwTech">
          </div>
        </div>
        <div className="school">
          <div className="shwSchool">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
