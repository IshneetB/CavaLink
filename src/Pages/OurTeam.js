import React from 'react';
import '../styles/PageStyles.css';

function OurTeam() {
  return (
    <div className="team-page">
      <h1 className="ourTeam-header">Meet The Team</h1>
      <div className="team-image-container">
        <div className="image-box">
          <img src={require('./ishneet.png')} alt="Ishneet Bhatia" className="profile-image" />
          <p className="image-caption">ISHNEET BHATIA</p>
          <p1> Co-Founder and Co-President</p1>
        </div>
        <div className="plus-sign">+</div>
        <div className="image-box">
          <img src={require('./dishitha.png')} alt="Dishitha Dhakshin" className="profile-image" />
          <p className="image-caption">DISHITHA DHAHSHIN</p>
          <p1> Co-Founder and Co-President</p1>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;