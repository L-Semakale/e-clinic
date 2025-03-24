import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaCalendarCheck, FaHistory } from "react-icons/fa"; // Icons for styling
import "../App.css"; // Ensure correct styling

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center w-100 text-center">
        <h2 className="fw-bold flex-grow-1 text-center">Home</h2>
        <FaUserCircle size={30} />
      </div>

      {/* Search Bar */}
      <div className="mt-3 w-75">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Search healthcare professionals..."
        />
      </div>

      {/* Appointment Buttons */}
      <div className="mt-3 w-75 text-center">
        <button className="btn btn-primary w-100 mb-2" onClick={() => navigate("/book-appointment")}>
          <FaCalendarCheck className="me-2" />
          Book Appointment
        </button>
        <button className="btn btn-info w-100">
          <FaHistory className="me-2" />
          View Past Appointments
        </button>
      </div>

      {/* Appointment Cards */}
      <div className="mt-4 w-75">
        <div className="card mb-3">
          <div className="card-body text-center">
            <h5 className="fw-bold">Dental Check</h5>
            <p>Nov 15, 2023 | 10:00 AM</p>
            <p>Routine dental check-up</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-primary btn-sm w-50">View Details</button>
              <button className="btn btn-outline-danger btn-sm w-50">Cancel</button>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body text-center">
            <h5 className="fw-bold">Eye Examination</h5>
            <p>Nov 18, 2023 | 2:00 PM</p>
            <p>Annual eye exam</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-primary btn-sm w-50">View Details</button>
              <button className="btn btn-outline-danger btn-sm w-50">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="navbar fixed-bottom bg-white border-top w-100">
        <div className="container d-flex justify-content-around">
          <button className="btn btn-link" onClick={() => navigate("/")}>🏠 Home</button>
          <button className="btn btn-link" onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
          <button className="btn btn-link">📖 Appointment History</button>
          <button className="btn btn-link">👤 Profile</button>
        </div>
      </nav>
    </div>
  );
};

export default HomeScreen;
