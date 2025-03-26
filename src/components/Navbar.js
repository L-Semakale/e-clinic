import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(localStorage.getItem("role"));

  // Listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setRole(null); // Clear local role state
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">E-Clinic</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-3">
            {role === "patient" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient-dashboard">Patient Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/book-appointment">Book Appointment</Link>
                </li>
              </>
            )}
            {role === "doctor" && (
              <li className="nav-item">
                <Link className="nav-link" to="/doctor-dashboard">Doctor Dashboard</Link>
              </li>
            )}
            {role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin-dashboard">Admin Panel</Link>
              </li>
            )}
            {role && (
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
