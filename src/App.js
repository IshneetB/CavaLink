import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MatchNowButton from './MatchNowButton';
import CavaLinkLogo from './CavaLinkLogo.png';
import Contact from './Pages/Contact';
import Explore from './Pages/Explore';
import OurTeam from './Pages/OurTeam';
import Spotlight from './Pages/Spotlight';
import Match from './Pages/Match';

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
            <li><Link to="/#about">ABOUT</Link></li> {/* Changed to hash link */}
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
          <Route path="/" element={
            <>
              <header className="App-header">
                <h1 className="cavalink-title">CavaLink</h1>
                <p className="subtitle">For Cavaliers hoo don't want to third-wheel their UVA experience.</p>
              </header>
              <MatchNowButton className="match-now-button" />
              
              {/* About Section */}
              <section id="about" className="page-container" style={{ marginTop: '100px', padding: '2rem' }}>
                <h1>About Us</h1>
                <p className="subtitle">
                  CavaLink is built by Hoos, for Hoos.
                  With over a thousand student groups, there's a place for everyone at UVA—the challenge? Finding it. 
                  CavaLink cuts through the clutter, helping you prioritize and match with the right clubs effortlessly.
                  Whether you're looking for identity-based associations, academic or pre-professional societies, 
                  service opportunities, Greek life, or niche interest groups, we've got your back.
                  Skip the endless interest meetings. Let our algorithm do the work.
                </p>
              </section>

              {/* Images Section */}
              <div id="team" className="image-container">
  <div className="image-box">
    <img src={require('./ishneet.png')} alt="Ishneet Bhatia" className="profile-image" />
    <p className="image-caption">Ishneet Bhatia</p>
  </div>
  <div style={{ fontSize: '3rem', padding: '0 20px', color: '#003B73' }}>+</div>
  <div className="image-box">
    <img src={require('./dishitha.png')} alt="Dishitha Dhakshin" className="profile-image" />
    <p className="image-caption">Dishitha Dhakshin</p>
  </div>
</div>

              {/* Spacer to extend page */}
              <div style={{ height: '7500px' }}></div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;