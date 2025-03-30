import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MatchNowButton from './MatchNowButton'; 
import CavaLinkLogo from './CavaLinkLogo.png';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Explore from './Pages/Explore';
import OurTeam from './Pages/OurTeam';
import Spotlight from './Pages/Spotlight';
import Match from './Pages/Match';
import ClubMatchForm from './Pages/ClubMatchForm';

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
            <li><Link to="/#about">ABOUT</Link></li>
            <li><Link to="/team">OUR TEAM</Link></li>
            <li><Link to="/spotlight">SPOTLIGHT</Link></li>
            <li><Link to="/explore">EXPLORE</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/team" element={<OurTeam />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/match" element={<Match />} />
          <Route path="/club-match" element={<ClubMatchForm />} />
          <Route path="/" element={
            <>
              {/* Home Section */}
              <header className="App-header">
                <h1 className="cavalink-title">CAVALINK</h1>
                <p className="subtitle">For Cavaliers hoo don't want to third-wheel<br />their UVA experience.</p>
              </header>
              
              <MatchNowButton /> 
              
              {/* About Section */}
              <section id="about" className="about-section">
                <About />
              </section>

              {/* Images Section */}
              <section id="ourTeam" className="ourTeam-section">
                <OurTeam />
              </section>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;