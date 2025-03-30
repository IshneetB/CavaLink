import React from 'react';
import '../styles/PageStyles.css';

function About() {
  return (
    <div className="about-content">
    <h1>About Us</h1>
  <p>CavaLink is built by Hoos, for Hoos.</p>
  
  <p>
    With over a thousand student groups, there's a place for everyone at UVA—the challenge? Finding it.
  </p>

  <p>
    CavaLink cuts through the clutter, helping you prioritize and match with the right
    clubs effortlessly. Whether you're looking for identity-based associations, academic 
    or pre-professional societies, service opportunities, Greek life, or niche interest
    groups, we've got your back.
  </p>

  <p>
    Skip the endless interest meetings. Let our algorithm do the work.
  </p>
</div>
  );
}

export default About;  // Required for routing