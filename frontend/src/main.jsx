import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router dan Routes
import "./index.css";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Definisikan rute untuk masing-masing halaman */}
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>
);
