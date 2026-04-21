import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ActivityProvider } from "./context/ActivityContext";

import Home from "./pages/Home";
import AddActivity from "./pages/AddActivity";
import ActivityDetail from "./pages/ActivityDetail";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ActivityProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/add">Add Activity</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddActivity />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ActivityProvider>
  );
}

export default App;
