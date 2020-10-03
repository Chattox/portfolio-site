import React from 'react';
import './pages.css';
import CardContainer from '../components/portfolioCard/CardContainer';
import cardData from '../components/portfolioCard/cardData';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        {cardData.map((card) => {
          return (
            <CardContainer
              title={card.title}
              bgImage={card.bgImage}
              description={card.description}
              link={card.link}
              icon={card.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
