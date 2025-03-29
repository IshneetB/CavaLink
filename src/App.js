import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import CavaLinkLogo from './CavaLinkLogo.png';

// Import all page components
import Home from './Pages/Home';
import About from './Pages/About';
import OurTeam from './Pages/OurTeam';
import Spotlight from './Pages/Spotlight';
import Explore from './Pages/Explore';
import Contact from './Pages/Contact';
import Match from './Pages/Match';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Logo with NavLink */}
        <NavLink to="/" className={({ isActive }) => isActive ? "logo active" : "logo"}>
          <img src={CavaLinkLogo} alt="CavaLink Logo" />
        </NavLink>

        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/our-team"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                OUR TEAM
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/spotlight"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                SPOTLIGHT
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/explore"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                EXPLORE
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/match"
                className={({ isActive }) => isActive ? "match-active" : "match-now-button"}
              >
                MATCH NOW
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Page Content Area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/spotlight" element={<Spotlight />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/match" element={<Match />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;