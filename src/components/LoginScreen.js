import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons work
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure this is added


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/home"); // Redirect to Home Screen
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center fw-bold">Access Account</h2>
        <p className="text-center text-muted">Log in to manage your appointments</p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">
              <i className="bi bi-envelope me-2"></i> Your email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <i className="bi bi-lock me-2"></i> Enter your password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-end">
            <a href="#" className="text-decoration-none">Forgot your password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Log In</button>
        </form>

        <div className="text-center mt-3">
          <p>
            Need to create an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
