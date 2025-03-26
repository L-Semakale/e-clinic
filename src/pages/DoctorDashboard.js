import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("/api/doctors/appointments", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.put(`/api/doctors/appointments/${id}/status`, { status }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      setAppointments(appointments.filter(appt => appt._id !== id)); // Remove from pending list
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Doctor Dashboard</h2>

      <h4 className="mt-4">Pending Appointments</h4>
      <div className="row">
        {appointments.length === 0 ? (
          <p>No pending appointments.</p>
        ) : (
          appointments.map((appt) => (
            <div key={appt._id} className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5 className="card-title">{appt.patientId.username}</h5>
                <p><strong>Date:</strong> {appt.date}</p>
                <p><strong>Time:</strong> {appt.time}</p>
                <p><strong>Reason:</strong> {appt.reason}</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-success" onClick={() => handleStatusUpdate(appt._id, "accepted")}>Accept</button>
                  <button className="btn btn-danger" onClick={() => handleStatusUpdate(appt._id, "rejected")}>Reject</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
