import React from 'react';
import './App.css';
import MatchNowButton from './MatchNowButton';  // Import the button component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="font-dmserif text-xl">Cavalink UI</p>
      </header>
      
      <MatchNowButton />  {/* Add the button component here */}
      {/* Other content */}
    </div>
  );
}

export default App;
