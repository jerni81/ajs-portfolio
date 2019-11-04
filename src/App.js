import React from 'react';
import Header from './components/Header'
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
      <Header />
      <Bio />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
