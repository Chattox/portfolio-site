import React from 'react';
import './navbar.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { func } from 'prop-types';

const Navbar = ({ togglePortfolio }) => {
  const iconSize = '2.5rem';

  console.log(togglePortfolio);

  return (
    <div className="navbar">
      <div className="nav-item" onClick={togglePortfolio}>
        <IconContext.Provider value={{ size: iconSize }}>
          <FaIcons.FaPowerOff />
        </IconContext.Provider>
      </div>
      <a href="mailto:conradlineker@gmail.com" className="nav-item">
        <IconContext.Provider value={{ size: iconSize }}>
          <FaIcons.FaRegEnvelope />
        </IconContext.Provider>
      </a>
      <a href="https://github.com/chattox" className="nav-item">
        <IconContext.Provider value={{ size: iconSize }}>
          <FaIcons.FaGithub />
        </IconContext.Provider>
      </a>
      <a href="https://linkedin.com/in/chattox" className="nav-item">
        <IconContext.Provider value={{ size: iconSize }}>
          <FaIcons.FaLinkedinIn />
        </IconContext.Provider>
      </a>
    </div>
  );
};

Navbar.propTypes = {
  togglePortfolio: func.isRequired,
};

export default Navbar;
