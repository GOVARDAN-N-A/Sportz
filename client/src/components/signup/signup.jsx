import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css'; // Import the CSS file for styling

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    profilePicture: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    sportsInterests: [],
    skillLevel: '',
    preferredPlayingTimes: [],
    contactNumber: '',
    socialMediaProfiles: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInterestsChange = (e) => {
    const { value } = e.target;
    const updatedInterests = formData.sportsInterests.includes(value)
      ? formData.sportsInterests.filter((interest) => interest !== value)
      : [...formData.sportsInterests, value];
    setFormData({ ...formData, sportsInterests: updatedInterests });
  };

  const handleTimesChange = (e) => {
    const { value } = e.target;
    const updatedTimes = formData.preferredPlayingTimes.includes(value)
      ? formData.preferredPlayingTimes.filter((time) => time !== value)
      : [...formData.preferredPlayingTimes, value];
    setFormData({ ...formData, preferredPlayingTimes: updatedTimes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post('http://localhost:3001/signup', formData)
    navigate('/login');
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <div className="signup-content">
          <h1 className="signup-heading">Join the Sports Community</h1>
          <div className="signup-card">
            <div className="signup-card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="example@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Enter your password" required />
                </div>

                <div className="form-group">
                  <label htmlFor="profilePicture">Profile Picture</label>
                  <input type="file" name="profilePicture" value={formData.profilePicture} onChange={handleChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="form-control" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" placeholder="City, State, Country" required />
                </div>

                <div className="form-group">
                  <label htmlFor="sportsInterests">Sports Interests</label>
                  {['Football', 'Basketball', 'Tennis', 'Soccer', 'Baseball', 'Golf', 'Swimming', 'Cycling', 'Running', 'Volleyball', 'Cricket', 'Martial Arts'].map(sport => (
                    <div key={sport} className="form-check">
                      <input type="checkbox" name="sportsInterests" value={sport.toLowerCase()} onChange={handleInterestsChange} className="form-check-input" />
                      <label className="form-check-label">{sport}</label>
                    </div>
                  ))}
                </div>

                <div className="form-group">
                  <label htmlFor="skillLevel">Skill Level</label>
                  <select name="skillLevel" value={formData.skillLevel} onChange={handleChange} className="form-control" required>
                    <option value="">Select Skill Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredPlayingTimes">Preferred Playing Times</label>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" name="preferredPlayingTimes" value="mornings" onChange={handleTimesChange} className="form-check-input" />
                      <label className="form-check-label">Mornings</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" name="preferredPlayingTimes" value="afternoons" onChange={handleTimesChange} className="form-check-input" />
                      <label className="form-check-label">Afternoons</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" name="preferredPlayingTimes" value="evenings" onChange={handleTimesChange} className="form-check-input" />
                      <label className="form-check-label">Evenings</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" name="preferredPlayingTimes" value="weekdays" onChange={handleTimesChange} className="form-check-input" />
                      <label className="form-check-label">Weekdays</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" name="preferredPlayingTimes" value="weekends" onChange={handleTimesChange} className="form-check-input" />
                      <label className="form-check-label">Weekends</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-control" placeholder="Enter your contact number" />
                </div>

                <div className="form-group">
                  <label htmlFor="socialMediaProfiles">Social Media Profiles</label>
                  <input type="text" name="socialMediaProfiles" value={formData.socialMediaProfiles} onChange={handleChange} className="form-control" placeholder="Enter your social media profiles" />
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Bio/Introduction</label>
                  <textarea name="bio" value={formData.bio} onChange={handleChange} className="form-control" rows="3" placeholder="Write a short bio or introduction"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;