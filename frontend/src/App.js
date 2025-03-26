import LaunchScreen from "./components/pages/LaunchScreen";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import PatientDashboard from "./components/pages/PatientDashboard";
import DoctorDashboard from "./components/pages/DoctorDashboard";
import AdminDashboard from "./components/pages/AdminDashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
