import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router dan Routes
import "./index.css";
import App from "./App.jsx"; // App.jsx di sini berfungsi sebagai komponen utama
import Login from "./Login.jsx";
import Register from "./Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
