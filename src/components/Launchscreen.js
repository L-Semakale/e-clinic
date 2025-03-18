import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../assets/logo.svg.png'; // Update the path if needed

const Launchscreen = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-lightblue">
      <div className="text-center">
        <img src={logo} alt="E-Clinic Logo" className="logo" />
        <h1 className="fw-bold text-white mt-3">E-Clinic</h1>
        <p className="text-white">Securely log in or sign up as a new user.</p>
        
        <div className="d-grid gap-3 col-6 mx-auto mt-4">
          <Link to="/login" className="btn btn-light fw-bold">Log In</Link>
          <Link to="/signup" className="btn btn-outline-light fw-bold">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Launchscreen;
