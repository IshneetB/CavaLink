import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import './styles/PageStyles.css'
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
        {/* Logo with Home link */}
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "logo active" : "logo"
          }
        >
          <img src={CavaLinkLogo} alt="CavaLink Logo" />
        </NavLink>

        {/* Main Navigation */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/our-team"
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                OUR TEAM
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/spotlight"
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                SPOTLIGHT
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/explore"
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                EXPLORE
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/match"
                className={({ isActive }) => 
                  isActive ? "match-button active" : "match-button"
                }
              >
                MATCH NOW
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Page Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/spotlight" element={<Spotlight />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/match" element={<Match />} />
            
            {/* Optional 404 catch-all route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;