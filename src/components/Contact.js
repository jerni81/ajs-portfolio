import React, { useState, useCallback } from "react";
// import axios from "axios";

const useInput = initialState => {
  const [state, _setState] = useState(initialState);
  const setState = useCallback(
    $htmlEl => {
      _setState($htmlEl.target.value);
    },
    [_setState]
  );
  return [state, setState];
};

const Contact = props => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [message, setMessage] = useInput("");

  // let sendData = () => {
  //   axios
  //     .post("/", {
  //       name,
  //       email,
  //       message
  //     })
  //     .then(res => console.log("Data send", { name, email, message }))
  //     .catch(err => console.log(err.data));
  // };

  return (
    <div className="contact">
      <h1>
        <u>Contact</u>
      </h1>

      <form action="https://formspree.io/ajjernigan87@gmail.com"
      method="POST">
        <p>Have a question or want to work together?</p>
        <input
          name="name"
          type="text"
          id="name"
          placeholder="name"
          onChange={setName}
          value={name}
        />
        <input
          name="email"
          type="email"
          id="email"
          placeholder="email"
          onChange={setEmail}
          value={email}
        />
        <textarea
          name="message"
          rows="14"
          cols="40"
          wrap="hard"
          id="message"
          placeholder="message"
          onChange={setMessage}
          value={message}
        ></textarea>
        <input name="submit" type="submit" id="submit" />
        <input type="hidden" name="_next" value="https://ajjernigan.com"/>
      </form>
    </div>
  );
};

export default Contact;
