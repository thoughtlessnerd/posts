import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Topics from "./pages/Topics";
import Queue from "./pages/Queue";
import PostGen from "./pages/PostGen";
import Repurpose from "./pages/Repurpose";

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/postGen" element={<PostGen />} />
          <Route path="/repurpose" element={<Repurpose />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
