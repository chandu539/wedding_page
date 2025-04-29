// WelcomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router v6 for navigation
import './WelcomePage.css';  // Import the CSS file


function WelcomePage() {
  const navigate = useNavigate(); // Use useNavigate hook

  // Function to handle redirection when the button is clicked
  const redirectToWeddingPage = () => {
    navigate('/wedding'); // Redirects to the /wedding route
  };

  return (
    <div className="welcome-page">
      <h1 className="couple-name">Kavya ❤️ Aarav</h1>
      <p className="welcome-message">We are excited to share our journey with you.</p>
      <button onClick={redirectToWeddingPage} className="welcome-button">
        Go to Wedding Details
      </button>
    </div>
  );
}

export default WelcomePage;
