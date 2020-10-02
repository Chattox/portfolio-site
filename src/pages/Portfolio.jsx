import React from 'react';
import './pages.css';
import CardContainer from '../components/portfolioCard/CardContainer';

const Portfolio = () => {
  return (
    <div className="portfolio">
      This is my port where I keep my folios
      <CardContainer
        title="this"
        bgImage="is"
        description="my"
        link="portfolio"
      />
    </div>
  );
};

export default Portfolio;
