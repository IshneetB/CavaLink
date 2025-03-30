import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClubMatchForm.css';

const ClubMatchForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    year: 'first',
    interests: [],
    timeCommitment: 'medium'
  });

  // All available interest options
  const interestOptions = [
    'academic', 'arts', 'sports', 'service', 
    'cultural', 'professional', 'social', 'technology'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate at least 3 interests selected
    if (formData.interests.length < 3) {
      alert('Please select at least 3 interests');
      return;
    }

    console.log('Form submitted:', formData);
    // Here you would typically:
    // 1. Call your matching algorithm/API
    // 2. Navigate to results page
    navigate('/results', { state: { formData } });
  };

  return (
    <div className="club-match-form-container">
      <h1 className="form-title">Find Your Perfect Club Match</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Year Selection */}
        <div className="form-section">
          <label className="form-label">
            What year are you?
            <select
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="fourth">Fourth Year</option>
              <option value="grad">Graduate Student</option>
            </select>
          </label>
        </div>

        {/* Interests Checkboxes */}
        <div className="form-section">
          <fieldset className="interest-fieldset">
            <legend className="form-legend">
              Select your top 3 interest areas:
            </legend>
            <div className="checkbox-grid">
              {interestOptions.map(interest => (
                <label key={interest} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleInputChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  {interest.charAt(0).toUpperCase() + interest.slice(1)}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Time Commitment */}
        <div className="form-section">
          <label className="form-label">
            How much time can you commit?
            <select
              name="timeCommitment"
              value={formData.timeCommitment}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="low">1-2 hours/week</option>
              <option value="medium">3-5 hours/week</option>
              <option value="high">5+ hours/week</option>
            </select>
          </label>
        </div>

        <button type="submit" className="submit-button">
          Match Me!
        </button>
      </form>
    </div>
  );
};

export default ClubMatchForm;