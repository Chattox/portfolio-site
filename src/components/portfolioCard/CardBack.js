import React, { useState } from 'react';
import './card.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const CardBack = ({ description, link, flip }) => {
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
        <IconContext.Provider value={{ size: '4rem' }}>
          <FaIcons.FaGithub />
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default CardBack;
