import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/Register.js"; // Corrected the import to match the file name casing
import Dashboard from "./components/dashboard.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
      </Routes>
    </Router>
  );
}

export default App;
