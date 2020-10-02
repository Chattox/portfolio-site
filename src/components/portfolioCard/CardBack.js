import React from 'react';
import './card.css';

const CardBack = ({ description, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="description">{description}</div>
    </a>
  );
};

export default CardBack;
