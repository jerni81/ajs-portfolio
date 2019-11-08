import React, {useState, useCallback, useEffect} from "react";
import axios from 'axios';

const useInput = (initialState) => {
  const [state, _setState] = useState(initialState)
  const setState = useCallback(($htmlEl) => {
    _setState($htmlEl.target.value)
  }, [_setState])
  return [state, setState]
}

const Contact = props => {

  const [name, setName] = useInput('')
  const [email, setEmail] = useInput('')
  const [message, setMessage] = useInput('')

  const getRes = async() => {
    const data = await axios.get('/');
      console.log('this is data', data);
      return data
  }

  useEffect(()=>{
    getRes()
  })

  return (
    <div className="contact">
      <h1><u>Contact</u></h1>
      <form>
        <p>Have a question or want to work together?</p>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={setName}
          value={name}
        />
        <input
          name="email"
          type="email"
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
