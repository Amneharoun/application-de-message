import React, { useState } from "react";
import './verification.css'

export default function Verification() {
  const [code, setcode] = useState("");
  const handlechange = (event) => {
    setcode(event.target.value);
    const filteredValue = value.replace(/[^0-9]/g, '').slice(0, 4);
    setcode(filteredValue);
  };

  return (
    <div className="carde">
      <label htmlFor="code-input" className="label"> Entrer code:</label>
      <p className="subtitle">we've sent the code via SMS to +62 999 9999 000</p>
      <div className="espoir">
        <div className="inputs">
          <input
            type="text"
            id="code-input"
            value={code}
            onChange={handlechange}
            maxLength="1"
            placeholder=""
          />
          <input />
          <input />
          <input />
        </div>

        <p>Didn't get the code? <strong>Resent code</strong></p>
      </div>
    </div>
  );

}
