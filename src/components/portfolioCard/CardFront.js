import React from 'react';
import './card.css';

const CardFront = ({ title, bgImage, flip }) => {
  return (
    <div
      className="card content"
      style={{
        backgroundImage: bgImage,
        backgroundPosition: 'center',
      }}
      onClick={flip}
    >
      <div className="title">{title}</div>
    </div>
  );
};

export default CardFront;
