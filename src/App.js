import React from 'react';
import Nav from './components/Nav'
import Intro from './components/Intro'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Intro />
      <Nav />
      <Projects />
      <Bio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
