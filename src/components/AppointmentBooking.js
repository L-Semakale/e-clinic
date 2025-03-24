import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
  const services = ["Consultation Service", "Delivery Service", "Repair Service"];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <Container className="mt-4">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <FaArrowLeft size={20} onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
        <h4 className="fw-bold ms-3">Appointment Booking</h4>
      </div>

      {/* Pick Date */}
      <h6 className="fw-bold">Pick Date</h6>
      <div className="mb-3">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="form-control"
          placeholderText="Select Date"
          dateFormat="MMMM d, yyyy"
        />
      </div>

      {/* Pick Time */}
      <h6 className="fw-bold mt-3">Pick Time</h6>
      <Row>
        {timeSlots.map((time, index) => (
          <Col key={index} xs={3} className="mb-2">
            <Button
              variant={selectedTime === time ? "primary" : "outline-primary"}
              className="w-100"
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Service Type */}
      <h6 className="fw-bold mt-3">Service Type</h6>
      {services.map((service, index) => (
        <Form.Check
          key={index}
          type="checkbox"
          label={service}
          checked={selectedServices.includes(service)}
          onChange={() => toggleService(service)}
        />
      ))}

      {/* Bottom Navigation */}
      <nav className="navbar fixed-bottom bg-white border-top py-2">
        <Container className="d-flex justify-content-around">
          <Button variant="link" onClick={() => navigate("/")}>🏠 Home</Button>
          <Button variant="link" className="text-primary fw-bold" onClick={() => navigate("/book-appointment")}>
            📅 Book Appointment
          </Button>
          <Button variant="link" onClick={() => navigate("/appointments")}>📖 Appointments</Button>
          <Button variant="link" onClick={() => navigate("/profile")}>👤 Profile</Button>
        </Container>
      </nav>
    </Container>
  );
};

export default AppointmentBooking;
