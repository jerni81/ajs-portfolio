import React from "react";

const Bio = props => {
  return (
    <div className="bio">
      <h1><u>Bio</u></h1>
      <div className="bio-wrapper">
        <div className="statement">
          <h3>Personal Statement</h3>
          <div className="shwStatement shw">
            <u><h3>Personal Statement</h3></u>
            <p>
              I am a tenacious software engineer, who enjoys cultivating and environment of evolution and growth. With many years in sales and leadership positions, my teamwork and communication skills are excellent. I enjoy a good challenge and am a very methodical problem solver. Something that is very important to me is having a positive impact on those around me and the world at large.
            </p>
          </div>
        </div>
        <div className="tech">
          <h3>Tech Stack</h3>
          <div className="shwTech shw">
            <u><h3>Tech Stack</h3></u>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>HTML</li>
            </ul>
          </div>
        </div>
        <div className="school">
          <h3>Education</h3>
          <div className="shwSchool shw">
            <u><h3>Education</h3></u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
