import React from 'react';
import './card.css';

const PortfolioCard = ({ title, bgImage, description, link }) => {
  return (
    <div className="card">
      {title}
      {bgImage}
      {description}
      {link}
    </div>
  );
};

export default PortfolioCard;
