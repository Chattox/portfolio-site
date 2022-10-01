import React from 'react';
import './pages.css';
import { Parallax } from 'react-parallax';

const About = () => {
  return (
    <div className="about">
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
          I am a driven, quick learning, junior software developer currently working with React, Javascript, and Typescript as a front end developer. My diverse background across a wide range of problem
          solving situations and long history working with computers allows me
          to approach issues in an effective and practical manner.
        </p>
        <h1>My experience:</h1>
        <ul>
          <li><b>2021 - present:</b> Junior Front-end Software Engineer at <a href="https://amplience.com" target="_blank" rel="noopener noreferrer">Amplience</a></li>
          <li><b>2021:</b> Junior Back-end Software Engineer at <a href="https://www.footballpools.com" target="_blank" rel="noopener noreferrer">The Football Pools</a></li>
          <li><b>2020 - 2021:</b> Apprentice Full stack Junior Developer at <a href="https://www.uktotegroup.com/" target="_blank" rel="noopener noreferrer">UK Tote Group</a></li>
          <li>
            <b>2020:</b> Graduate of the Software Development Bootcamp at <a href="https://northcoders.com" target="_blank" rel="noopener noreferrer">Northcoders Manchester</a>
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
