import React from "react";
import { Link } from "react-router-dom";

const Bio = props => {
  return (
    <div className="bio">
      <h1>Bio</h1>
      <div className="bio-wrapper">
        <div className="bio-pic">
          <img src="https://i.imgur.com/LPkY50L.jpg?1" />
        </div>
        <div className="bio-p">
          I am a tenacious software engineer, who enjoys cultivating and environment of evolution and growth. With many years in sales and leadership positions, my teamwork and communication skills are excellent. I enjoy a good challenge and am a very methodical problem solver. Something that is very important to me is having a positive impact on those around me and the world at large.
        </div>
        <div className="bio-tech">
          react.js
          node.js
        </div>
      </div>
    </div>
  );
};

export default Bio;
