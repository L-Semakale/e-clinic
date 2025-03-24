import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launchscreen from "./components/Launchscreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import HomeScreen from "./components/HomeScreen";
import AppointmentBooking from "./components/AppointmentBooking";
import Profile from "./components/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Launchscreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/book-appointment" element={<AppointmentBooking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
