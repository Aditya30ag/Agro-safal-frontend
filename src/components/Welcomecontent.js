import React from 'react';
import { Link } from "react-router-dom";

export default function WelcomeContent() {
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        <div className="welcome-text">
          Welcome to Agro-सफल
          <img className="welcome-logo" src="/logo.jpg" alt="Description" />
        </div>
      </div>
      <Link to="/login" className="welcome-btn">
        Get started
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
}
