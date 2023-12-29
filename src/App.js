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
import AccountSettings from "./pages/AccountSettings";
import Search from "./pages/Search";

function App() {
  const [rightSliderVisible, setRightSliderVisible] = React.useState(false);

  return (
    <Router>
      <div className="homepage">
        <DashBoardNav />
        <LeftNav setRightSliderVisible={setRightSliderVisible} />
        {/* Routes */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/postGen" element={<PostGen />} />
          <Route path="/repurpose" element={<Repurpose />} />
          <Route path="/linkedin" element={<SignUpSuccess />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <RightSlider
          visible={rightSliderVisible}
          setVisible={setRightSliderVisible}
        />
        <ActionButtons setRightSliderVisible={setRightSliderVisible} />
      </div>
    </Router>
  );
}

export default App;
