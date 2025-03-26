import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  
  useEffect(() => {
    axios.get("/api/appointments/my-appointments", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Home Dashboard</h2>
            <div className="d-flex align-items-center">
              <span className="me-2"></span>
              <img src="path_to_your_profile_image" alt="" className="rounded-circle" width="40" height="40" />
            </div>
          </div>
          <div className="input-group mb-4">
            <input type="text" className="form-control" placeholder="Search health resources..." />
          </div>

          <div className="row">
            {/* Example of Health Metrics Section */}
            <div className="col-md-3 mb-4">
              <div className="card p-3 shadow-sm">
                <h5>Heart Rate</h5>
                <button className="btn btn-primary w-100">Start</button>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card p-3 shadow-sm">
                <h5>Temperature</h5>
                <button className="btn btn-primary w-100">Record</button>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card p-3 shadow-sm">
                <h5>Weight</h5>
                <button className="btn btn-primary w-100">Update</button>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card p-3 shadow-sm">
                <h5>Hydration</h5>
                <button className="btn btn-primary w-100">Add</button>
              </div>
            </div>
          </div>

          <h4 className="mt-5">Upcoming Appointments</h4>
          <div className="row">
            {appointments.map((appt) => (
              <div key={appt._id} className="col-md-4 mb-4">
                <div className="card p-3 shadow-sm">
                  <h5>{appt.doctorId.username}</h5>
                  <p><strong>Date:</strong> {appt.date}</p>
                  <p><strong>Time:</strong> {appt.time}</p>
                  <p><strong>Status:</strong> {appt.status}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button className="btn btn-info w-100 mb-2">Consult a Doctor</button>
            <button className="btn btn-info w-100 mb-2">Request a Prescription</button>
            <button className="btn btn-info w-100">Schedule a Check-up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
