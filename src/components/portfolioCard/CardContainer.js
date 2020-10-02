import React from 'react';
import './card.css';
import CardFront from './CardFront';
import CardBack from './CardBack';
import slavbot from '../../images/cards/slavbot.jpg';

const PortfolioCard = ({ title, bgImage, description, link }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${slavbot})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* <CardFront title={title} /> */}
      <CardBack description={description} link={link} />
    </div>
  );
};

export default PortfolioCard;
