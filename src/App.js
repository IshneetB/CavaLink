import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MatchNowButton from './MatchNowButton';
import CavaLinkLogo from './CavaLinkLogo.png';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Explore from './Pages/Explore';
import Home from './Pages/Home';
import Match from './Pages/Match';
import OurTeam from './Pages/OurTeam';
import Spotlight from './Pages/Spotlight';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Logo */}
        <Link to="/">
          <img src={CavaLinkLogo} alt="CavaLink Logo" className="logo" />
        </Link>

        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/team">OUR TEAM</Link></li>
            <li><Link to="/spotlight">SPOTLIGHT</Link></li>
            <li><Link to="/explore">EXPLORE</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/match" element={<Match />} />
          <Route path="/" element={
            <>
              <header className="App-header">
                <h1 className="cavalink-title">CavaLink</h1>
                <p className="subtitle">For Cavaliers hoo don't want to third-wheel their UVA experience.</p>
              </header>
              <MatchNowButton className="match-now-button" />
              {/* Spacer to extend page */}
              <div style={{ height: '10000px' }}></div>
              <div className="image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50vh' }}>
  <div className="image-box" style={{ textAlign: 'center' }}>
    <img src={require('./ishneet.png')} alt="Ishneet Bhatia" className="profile-image" />
    <p className="image-caption">Ishneet Bhatia</p>
  </div>
  <div style={{ fontSize: '3rem', padding: '0 20px' }}>+</div>
  <div className="image-box" style={{ textAlign: 'center' }}>
    <img src={require('./dishitha.png')} alt="Dishitha Dhakshin" className="profile-image" />
    <p className="image-caption">Dishitha Dhakshin</p>
  </div>
</div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
