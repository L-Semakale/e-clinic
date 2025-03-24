import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="row align-items-center">
          {/* Profile Picture */}
          <div className="col-md-3 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-circle img-fluid"
            />
          </div>
          
          {/* User Details */}
          <div className="col-md-6">
            <h3 className="fw-bold">Sma Limpho</h3>
            <p className="text-muted">sma@gmail.com</p>
            <p className="text-muted">+123 456 7890</p>
          </div>
          
          {/* Edit Button */}
          <div className="col-md-3 text-md-end text-center">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
      
      {/* Settings Section */}
      <div className="card shadow-lg p-4 mt-4">
        <h4>Settings</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Change Password
            <button className="btn btn-sm btn-outline-secondary">Update</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Notification Preferences
            <button className="btn btn-sm btn-outline-secondary">Manage</button>
          </li>
        </ul>
      </div>
      
      {/* Logout Button */}
      <div className="text-center mt-4">
        <button className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
