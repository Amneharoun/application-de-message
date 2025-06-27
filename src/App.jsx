import React from "react";
import Onboarding from "./component/Onboarding";
import Verification from "./component/Verification"

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Onboarding />
      <Verification />
    </div>
  );
}
