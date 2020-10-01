import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import './pages.css';

const Main = ({ displayPortfolio }) => {
  return (
    <div className="main">
      <header>
        <h1>Conrad Lineker-Jones</h1>
        <h2>Portfolio</h2>
      </header>

      {displayPortfolio ? <Portfolio /> : <About />}
    </div>
  );
};

export default Main;
