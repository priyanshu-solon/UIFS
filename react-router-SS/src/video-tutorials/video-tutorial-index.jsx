import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./video-tutorial-home";
import UserLogin from "./user-login";
import UserRegister from "./user-register";
import UserDashboard from "./user-dashboard";
import AdminLogin from "./auth/admin-login";
import AdminDashboard from "./admin-dashboard-";
import AddVideo from "./add-video";
import EditVideo from "./edit-video";
import DeleteVideo from "./delete-video";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/dashboard" element={<UserDashboard />} />

        {/* Hidden Admin Routes */}
        <Route path="/secret-admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Video Management */}
        <Route path="/add-video" element={<AddVideo />} />
        <Route path="/edit-video/:id" element={<EditVideo />} />
        <Route path="/delete-video/:id" element={<DeleteVideo />} />
      </Routes>
    </Router>
  );
}
