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
        description="A modular, lightweight Discord bot with an easily expandable command
      structure"
        link="https://github.com/Chattox/slavbot_v3"
      />
    </div>
  );
};

export default Portfolio;
