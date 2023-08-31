import React from 'react';
import "./profile.css";
const Profile = ({ username }) => {
  return (
    <div className="container">
      <h2>Welcome, {username}!</h2>
      <p>This is your personalized profile page.</p>
      <div className="profile-info">
        <h3>Your Profile Information</h3>
        <p>Username: {username}</p>
        <p>Email: user@example.com</p>
        <p>Location: City, Country</p>
      </div>
      <div className="profile-actions">
        <h3>Actions</h3>
        <button>Edit Profile</button>
        <button>Change Password</button>
        <button>Logout</button>
      </div>

    </div>
  );
};

export default Profile;
