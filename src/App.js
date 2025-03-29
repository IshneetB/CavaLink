import React from 'react';
import './App.css';
import MatchNowButton from './MatchNowButton';
import CavaLinkLogo from './CavaLinkLogo.png';


function App() {
  return (
    <div className="App">
      {/* Logo positioned separately from the header */}
      <img src={CavaLinkLogo} alt="CavaLink Logo" className="logo" />

      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#team">OUR TEAM</a></li>
          <li><a href="#spotlight">SPOTLIGHT</a></li>
          <li><a href="#explore">EXPLORE</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      
      <header className="App-header">
        <h1 className="cavalink-title">CavaLink</h1>
        <p className="subtitle">For Cavaliers hoo don’t want to third-wheel their UVA experience.</p>
      </header>
      
      <MatchNowButton className="match-now-button" />
    </div>
  );
}

export default App;
