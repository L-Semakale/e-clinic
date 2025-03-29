import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
  
      const data = await response.json();
  
      // Store user info in localStorage
      localStorage.setItem("userRole", data.role);
  
      // Redirect user based on role
      if (data.role === "patient") {
        navigate("/patient-dashboard");
      } else if (data.role === "doctor") {
        navigate("/doctor-dashboard");
      } else if (data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        setError("Invalid role, please contact support.");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center">Access Account</h3>
        <p className="text-muted text-center">Log in to manage your appointments</p>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-end">
            <Link to="/forgot-password" className="text-primary">
              Forgot your password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Log In</button>
        </form>

        <p className="mt-3 text-center">
          Need to create an account? <Link to="/signup" className="text-primary">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
