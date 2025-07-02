import React from "react";
import { BrowserRouter, Routes, Route, Link, UNSAFE_withErrorBoundaryProps } from 'react-router-dom'
import Numero from "./component/Numero";
import Verification from "./component/Verification";
import Contact from "./component/Contact";
import Onboarding from "./component/Onboarding";
import Profile from "./component/Profile";


import "./App.css";
import Header from "./Header.jsx";
import NavigationMenu from "./Navigation.jsx";

// export default function App() {
//   return (
//     <div className="app">
//       <Onboarding />
//       <Verification />
//       <Contact/>
//     </div>
//   );
// }
const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<NavigationMenu />}> */}
            <Route path="/" element={<Onboarding />} />
            { <Route path="/numero" element={<Numero />} /> }
            <Route path="/verification" element={<Verification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/Onboarding" element={<Onboarding />} />
//         <Route path="/Verification" element={<Verification />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




