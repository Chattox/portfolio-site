import React from 'react';
import './pages.css';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  return (
    <div className="portfolio">
      This is my port where I keep my folios
      <PortfolioCard
        title="this"
        bgImage="is"
        description="my"
        link="portfolio"
      />
    </div>
  );
};

export default Portfolio;
