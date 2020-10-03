import React, { useState } from 'react';
import './card.css';

const CardBack = ({ description, link, icon, flip }) => {
  const [isLinkHover, setIsLinkHover] = useState(false);

  const handleClick = () => {
    if (!isLinkHover) {
      flip();
    }
  };

  const handleHover = () => {
    setIsLinkHover(!isLinkHover);
  };

  return (
    <div className="card content" onClick={handleClick}>
      <div className="description">{description}</div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="gitLink"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {icon}
      </a>
    </div>
  );
};

export default CardBack;
