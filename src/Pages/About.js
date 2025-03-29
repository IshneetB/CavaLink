import React from 'react';
import teamPhoto from '../assets/team.jpg';

function About() {
  return (
    <div className="page-container">
      <section className="page-header">
        <h1>About CavaLink</h1>
        <p>Connecting UVA students since 2023</p>
      </section>
      
      <section className="content-section">
        <img src={teamPhoto} alt="Our team" className="content-image" />
        <div className="text-content">
          <h2>Our Mission</h2>
          <p>We help Cavaliers find their perfect match for classes, events, and friendships.</p>
        </div>
      </section>
    </div>
  );
}