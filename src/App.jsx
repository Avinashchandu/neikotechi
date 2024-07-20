import React from 'react';
import './App.css';
import { Intropage } from './components/Intropage';
import { About } from './components/about';
import Education from './components/education';
import TechnicalProficiencies from './components/TechnicalProficiencies';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <div id="home">
        <Intropage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="technical">
        <TechnicalProficiencies />
      </div>
    </>
  );
}

export default App;
