import React, { useState, useEffect } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch available doctors
    axios
      .get("/api/doctors")
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/appointments/book",
        { doctorId: selectedDoctor, date, time, reason },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setMessage({ text: res.data.message, type: "success" });
    } catch (error) {
      setMessage({ text: "Error booking appointment", type: "danger" });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📅 Book an Appointment</h2>
      
      {message && (
        <div className={`alert alert-${message.type} text-center`}>{message.text}</div>
      )}
      
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Select Doctor</label>
          <select
            className="form-select"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">{loading ? "Loading doctors..." : "Choose a doctor..."}</option>
            {doctors.map((doc) => (
              <option key={doc._id} value={doc._id}>
                {doc.username}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={new Date().toISOString().split("T")[0]} // Prevents past dates
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <textarea
            className="form-control"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">📅 Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
