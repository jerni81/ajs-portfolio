import React, {useState} from "react";
import { Link } from "react-router-dom";

const Contact = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleName = e => {
      setName(e.target.value)
  }
  const handleEmail = e => {
      setEmail(e.target.value)
  }
  const handleMessage = e => {
      setMessage(e.target.value)
  }

  return (
    <div className="contact">
      <h1><u>Contact</u></h1>
      <form>
        <p>Have a question or want to work together?</p>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleName}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="14"
          cols="40"
          wrap="hard"
          id="message"
          placeholder="message"
          onChange={handleMessage}
        >
        </textarea>
        <input
          name="submit"
          type="submit"
          id="submit"
        />
      </form>
    </div>
  );
};

export default Contact;
