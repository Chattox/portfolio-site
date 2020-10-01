import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';

const App = () => {
  const [displayPortfolio, setDisplayPortfolio] = useState(false);

  const toggleDisplay = () => {
    setDisplayPortfolio(!displayPortfolio);
  };

  return (
    <div className="App">
      <Navbar togglePortfolio={toggleDisplay} />
      <Main displayPortfolio={displayPortfolio} />
    </div>
  );
};

export default App;
