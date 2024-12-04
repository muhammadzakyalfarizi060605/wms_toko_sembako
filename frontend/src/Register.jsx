import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { HiUser, HiMail, HiLockClosed } from "react-icons/hi"; // Ikon untuk input
import "./App.css";

const Register = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    password: "",
    role: "kasir",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );

      Swal.fire({
        icon: "success",
        title: "Registrasi berhasil!",
        text: response.data.message || "Anda telah berhasil terdaftar.",
      }).then(() => {
        navigate("/login"); // Ganti dengan path login yang sesuai
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Coba lagi, ada masalah saat registrasi.";
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan",
        text: errorMessage,
      });

      setFormData({
        nama_lengkap: "",
        email: "",
        password: "",
        role: "kasir",
      });
    }
  };

  return (
    <div className="flex items-center justify-center px-6 py-8 h-screen">
      <div className="w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Halaman Registrasi <span className="text-[#FF8000]">WarungPro</span>
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Nama Lengkap */}
            <div>
              <div className="mb-2 block">
                <label
                  htmlFor="nama_lengkap"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama Lengkap
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="nama_lengkap"
                  name="nama_lengkap"
                  value={formData.nama_lengkap}
                  onChange={handleChange}
                  className="w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#FF8000] focus:border-[#FF8000] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Nama Lengkap"
                  required
                />
                <HiUser className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="mb-2 block">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#FF8000] focus:border-[#FF8000] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Email"
                  required
                />
                <HiMail className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 block">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#FF8000] focus:border-[#FF8000] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Password"
                  required
                />
                <HiLockClosed className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Role */}
            <div>
              <div className="mb-2 block">
                <label
                  htmlFor="role"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Role
                </label>
              </div>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#FF8000] focus:border-[#FF8000] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="kasir">Kasir</option>
                <option value="gudang">Gudang</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-2.5 text-white rounded-lg bg-gradient-to-r from-[#FF8000] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FF8000] focus:ring-4 focus:ring-[#FF8000] focus:ring-opacity-50"
            >
              Registrasi
            </button>

            <p className="font-light text-gray-500 dark:text-gray-400 text-center">
              Apakah kamu sudah punya akun ?{" "}
              <a
                href="login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
