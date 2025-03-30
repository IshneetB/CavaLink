import React from 'react';
import '../styles/PageStyles.css';

function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p className="subtitle">CavaLink is built by Hoos, for Hoos.
With over a thousand student groups, there’s a place for everyone at UVA—the challenge? Finding it. 
CavaLink cuts through the clutter, helping you prioritize and match with the right clubs effortlessly. Whether you're looking for identity-based associations, academic or pre-professional societies, service opportunities, Greek life, or niche interest groups, we’ve got your back.
Skip the endless interest meetings. Let our algorithm do the work.</p>
    </div>
  );
}

export default About;  // Required for routing