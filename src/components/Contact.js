import React from "react";
import { Link } from "react-router-dom";

const Contact = props => {
  return (
    <div className="contact">
      <h1><u>Contact</u></h1>
      <form>
        <p>Have a question or want to work together?</p>
        <input type="text" placeholder="name"/>
        <input type="email" placeholder="email"/>
        <input type="text" placeholder="message" id="message"/>
        <input type="submit" id="submit"/>
      </form>
    </div>
  );
};

export default Contact;
