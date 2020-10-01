import React from 'react';
import './pages.css';
import { Parallax } from 'react-parallax';

const About = () => {
  return (
    <div className="about">
      <header>
        <h1>Conrad Lineker-Jones</h1>
        <h2>Portfolio</h2>
      </header>
      <Parallax
        blur={0}
        bgImageStyle={{ width: '100vw', opacity: 0.5 }}
        bgImage={require('../images/splash.jpg')}
        bgImageAlt="splash"
        strength={300}
      >
        <div style={{ height: '33vh' }} />
      </Parallax>
      <div>
        <h1>TL;DR</h1>
        <p>
          I am a driven, quick learning, junior software developer currently
          working with C#, JavaScript, React, and MySQL amongst various other
          technologies. My diverse background across a wide range of problem
          solving situations and long history working with computers allows me
          to approach issues in an effective and practical manner.
        </p>
        <h1>My experience:</h1>
        <ul>
          <li>Apprentice Junior Developer at Tote UK</li>
          <li>
            Graduate of the Software Development Bootcamp at Northcoders
            Manchester
          </li>
          <li>
            Various solo and team projects using a variety of technologies
            including but not limited to JavaScript, PostgreSQL, Express, React,
            MongoDB, and Python
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
