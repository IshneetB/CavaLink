import React from 'react';
import './App.css';
import MatchNowButton from './MatchNowButton';
import CavaLinkLogo from './CavaLinkLogo.png';

function App() {
  return (
    <div className="App">
      {/* Logo positioned separately from the header */}
      <img src={CavaLinkLogo} alt="CavaLink Logo" className="logo" />

      <header className="App-header">
        <p className="font-dmserif text-xl">Cavalink UI</p>
      </header>
      
      <MatchNowButton />  
    </div>
  );
}

export default App;