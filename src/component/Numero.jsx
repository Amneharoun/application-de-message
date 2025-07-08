import React, { useState } from "react";
import './numero.css'
import { Link } from "react-router-dom";

export default function Onboarding() {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.trim()) {
      alert(`Phone: +62 ${phone}`);
    } else {
      alert("Please enter your phone number");
    }
  };

  return (
    <div className="card">
      <h2 className="title">Enter your phone number</h2>
      <p className="subtitle">Please confirm your region and enter your phone number</p>

      <div className="input-wrapper">
        <span className="icon">🌐</span>
        <select className="select">
          <option value="+62">Indonesia (+62)</option>
        </select>
      </div>

      <div className="input-wrapper">
        <span className="icon">📞</span>
        <input
          className="input"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button className="btn" onClick={handleContinue}>
      <Link to="/verification" className="nav-item">
            <span> Continue</span>
          </Link>
      </button>
    </div>
  );
}
