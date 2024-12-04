import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import Router dan Routes
import "./index.css";
import Login from "./Login";
import Register from "./Register";
import AdminDashboard from "./admin/Dashboard";
import KasirDashboard from "./kasir/Dashboard";
import GudangDashboard from "./gudang/Dashboard";

function App() {
  const [userRole, setUserRole] = useState(null); // Menyimpan role pengguna yang login

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/register" element={<Register />} />
        {/* Pengalihan berdasarkan role */}
        <Route
          path="/admin"
          element={
            userRole === "admin" ? <AdminDashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/kasir"
          element={
            userRole === "kasir" ? <KasirDashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/gudang"
          element={
            userRole === "gudang" ? <GudangDashboard /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
