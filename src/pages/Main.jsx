import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import './pages.css';
import { ReactComponent as Logo } from '../images/logoIcon.svg';

const Main = ({ displayPortfolio }) => {
  return (
    <div className="main">
      <header>
        <Logo className="logo" />
        <div>
          <h1>Conrad Lineker-Jones</h1>
          <h2>Portfolio</h2>
        </div>
      </header>

      {displayPortfolio ? <Portfolio /> : <About />}
    </div>
  );
};

export default Main;
