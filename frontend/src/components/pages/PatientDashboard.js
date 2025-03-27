import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/appointments/my-appointments", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setAppointments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch appointments");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Home Dashboard</h2>
        <div className="d-flex align-items-center">
          <span className="me-2"></span>
          <img
            src={"https://via.placeholder.com/40"} // Replace with dynamic user profile
            alt="Profile"
            className="rounded-circle"
            width="40"
            height="40"
          />
        </div>
      </div>

      {/* Search Input */}
      <div className="input-group mb-4">
        <input type="text" className="form-control" placeholder="Search health resources..." />
      </div>

      {/* Health Metrics Section */}
      <div className="row">
        {[
          { title: "Heart Rate", action: "Start" },
          { title: "Temperature", action: "Record" },
          { title: "Weight", action: "Update" },
          { title: "Hydration", action: "Add" },
        ].map((metric, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card p-3 shadow-sm text-center border rounded">
              <h5>{metric.title}</h5>
              <button className="btn btn-primary w-100">{metric.action}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Section */}
      <h4 className="mt-5">Upcoming Appointments</h4>
      {loading && <p className="text-primary">Loading appointments...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && appointments.length === 0 && <p>No upcoming appointments.</p>}

      <div className="row">
        {appointments.map((appt) => (
          <div key={appt?._id} className="col-md-4 mb-4">
            <div className="card p-3 shadow-sm text-center border rounded">
              <h5>{appt?.doctorId?.username || "Unknown Doctor"}</h5>
              <p><strong>Date:</strong> {appt?.date || "TBD"}</p>
              <p><strong>Time:</strong> {appt?.time || "TBD"}</p>
              <p><strong>Status:</strong> {appt?.status || "Pending"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-4">
        {["Consult a Doctor", "Request a Prescription", "Schedule a Check-up"].map((action, index) => (
          <button key={index} className="btn btn-info w-100 mb-2">
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;
