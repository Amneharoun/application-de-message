import React, { useState, useRef } from "react";
import './verification.css';
import { Link } from "react-router-dom";

export default function Verification() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="carde">
      <label className="label">Entrer code:</label>
      <p className="subtitle">We've sent the code via SMS to +62 999 9999 000</p>

      <div className="inputs">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength="1"
            ref={(el) => (inputsRef.current[index] = el)}
          />
        ))}
      </div>

      <p className="resend">
        Didn't get the code? <strong>Resent code</strong>
      </p>
      <div>
        {/* <button onClick={handleClick}>Validé</button> */}
        <button>
          <Link to="/namecreation" className="nav-item">
            <span>Validé</span>
          </Link>
        </button>
      </div>
    </div>

  );
}
