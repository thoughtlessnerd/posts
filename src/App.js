import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LeftNav from "./components/LeftNav";

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/signup">{/* <SignupPage /> */}</Route>
          <Route path="/settings">{/* <SettingsPage /> */}</Route>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
