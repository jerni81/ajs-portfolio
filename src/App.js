import React from 'react';
import Nav from './components/Nav'
import Intro from './components/Intro'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Intro />
      <Nav />
      <Route path="/bio" render={() => <Bio />} />
      <Route path="/bio" render={() => <Projects />} />
      <Route path="/bio" render={() => <Contact />} />
      <Footer />
    </div>
  );
}

export default App;
