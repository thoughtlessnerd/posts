import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Topics from "./pages/Topics";
import Queue from "./pages/Queue";
import PostGen from "./pages/PostGen";
import Repurpose from "./pages/Repurpose";
import SignUpSuccess from "./pages/SignupSuccess";
import DashBoardNav from "./components/DashBoardNav";
import LeftNav from "./components/LeftNav";
import RightSlider from "./components/RightSlider";
import ActionButtons from "./components/ActionButtons";

function App() {
  return (
    <Router>
      <div className="homepage">
        <DashBoardNav />
        <LeftNav />
        {/* Routes */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/postGen" element={<PostGen />} />
          <Route path="/repurpose" element={<Repurpose />} />
          <Route path="/linkedin" element={<SignUpSuccess />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <RightSlider />
        <ActionButtons />
      </div>
    </Router>
  );
}

export default App;
