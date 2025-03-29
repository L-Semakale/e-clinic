import React from 'react'; // Ensure React is imported first
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaunchScreen from "./components/pages/LaunchScreen";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import PatientDashboard from "./components/pages/PatientDashboard";
import DoctorDashboard from "./components/pages/DoctorDashboard";
import AdminDashboard from "./components/pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes for role-based access */}
        <Route element={<ProtectedRoute allowedRoles={["patient"]} />}>
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["doctor"]} />}>
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};
console.log(LaunchScreen);
console.log(Signup);
console.log(Login);
console.log(PatientDashboard);
console.log(DoctorDashboard);
console.log(AdminDashboard);
console.log(ProtectedRoute);

export default App;
