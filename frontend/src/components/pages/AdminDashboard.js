import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/login"); // Redirect non-admins
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Panel</h2>
      <div className="row">
        {/* Cards */}
      </div>
    </div>
  );
};

export default AdminDashboard;
