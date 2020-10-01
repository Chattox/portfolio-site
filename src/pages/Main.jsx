import React from 'react';
import About from './About';
import Portfolio from './Portfolio';

const Main = ({ displayPortfolio }) => {
  return displayPortfolio ? <Portfolio /> : <About />;
};

export default Main;
