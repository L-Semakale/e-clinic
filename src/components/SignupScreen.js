import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SignupScreen = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '350px' }}>
        <h2 className="text-center fw-bold">Create Account</h2>
        <p className="text-center text-muted">Create your account to connect with healthcare providers</p>

        <form>
          <div className="mb-3">
            <label className="form-label"><i className="bi bi-person"></i> Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" required />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="bi bi-envelope"></i> Email Address</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="bi bi-lock"></i> Password</label>
            <input type="password" className="form-control" placeholder="Create a password" required />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="bi bi-person-check"></i> Select your role</label>
            <select className="form-select">
              <option>Patient</option>
              <option>Provider</option>
            </select>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">I agree with Terms & Conditions</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
        </form>

        <div className="text-center mt-3">
          <p>Already registered? <Link to="/login" className="text-primary">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
