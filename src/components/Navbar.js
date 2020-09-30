import React from 'react';
import './navbar.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-item">
        <IconContext.Provider value={{ size: '3rem' }}>
          <FaIcons.FaPowerOff />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Navbar;
