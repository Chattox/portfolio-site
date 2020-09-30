import React from 'react';
import About from './About';
import Portfolio from './Portfolio';

const Main = () => {
  const displayPortfolio = false;

  return displayPortfolio ? <Portfolio /> : <About />;
};

export default Main;
