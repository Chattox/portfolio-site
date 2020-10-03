import React, { useState } from 'react';
import './card.css';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';

const CardContainer = ({ title, bgImage, description, link, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped}>
        <CardFront title={title} bgImage={bgImage} flip={flip} key="front" />
        <CardBack
          description={description}
          link={link}
          icon={icon}
          flip={flip}
          key="back"
        />
      </ReactCardFlip>
    </div>
    // <div
    //   className="card"
    //   style={{
    //     backgroundImage: `url(${slavbot})`,
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //   }}
    // >
    //   {/* <CardFront title={title} /> */}
    //   <CardBack description={description} link={link} />
    // </div>
  );
};

export default CardContainer;
