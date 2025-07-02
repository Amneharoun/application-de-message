import React from 'react';
import { FaSignal, FaBatteryFull } from 'react-icons/fa';
import illustration from './illustration.png'

import './onboarding.css';
// import { Link, Outlet } from 'react-router-dom';

function Onboarding() {
  return (
    <div className="onboarding-container">
      <div className="status-bar">
        <div>9:41</div>
        <div className="icons">
          <FaSignal />
          <FaBatteryFull />
        </div>
      </div>

      {/* <div className="navbar">Onboarding</div> */}

      <div className="content">
        <img
          src={illustration}
          alt="Illustration"
          className="illustration"
        />
        <h1>What's up</h1>
        <p className="description">
          Let's talk with your friends and family<br />
          whenever and wherever
        </p>
        <button className="continue-btn">
        Continue with phone
        {/* <Link to="/numero">Continue with phone</Link> */}
        </button>
      </div>

      {/* <Outlet /> */}
    </div>
  );
}

export default Onboarding;