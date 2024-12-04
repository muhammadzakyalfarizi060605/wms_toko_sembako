import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Mengimpor Swal
import { HiMail, HiLockClosed } from "react-icons/hi";
import "./App.css";

function Login({ setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      console.log(response); // Memeriksa apakah response mengandung data yang benar

      // Menyimpan role pengguna setelah login berhasil
      setUserRole(response.data.role);

      console.log(response.data); // Memeriksa data yang dikirimkan oleh server
      console.log(response.data.role); // Memeriksa role pengguna yang dikirimkan oleh server

      // Menampilkan SweetAlert sukses
      Swal.fire({
        title: "Login Successful",
        text: `Welcome, ${response.data.role}!`,
        icon: "success",
        confirmButtonText: "OK",
      });

      // Mengarahkan berdasarkan role yang diterima dari backend
      if (response.data.role === "admin") {
        navigate("/admin");
      } else if (response.data.role === "kasir") {
        navigate("/kasir");
      } else if (response.data.role === "gudang") {
        navigate("/gudang");
      }
    } catch (error) {
      console.error(error);

      // Menampilkan SweetAlert gagal
      Swal.fire({
        title: "Login Failed",
        text: "Invalid credentials, please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });

      // Mengosongkan inputan form
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-2/6/">
        <h1 className="text-2xl mb-4 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
          Halaman Login <span className="text-[#FF8000]">WarungPro</span>
        </h1>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#FF8000] focus:border-[#FF8000] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Password"
                required
              />
              <HiLockClosed className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Button Login */}
          <button
            type="submit"
            className="w-full p-2.5 text-white rounded-lg bg-gradient-to-r from-[#FF8000] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FF8000] focus:ring-4 focus:ring-[#FF8000] focus:ring-opacity-50"
          >
            Login
          </button>
          <p className="font-light text-gray-500 dark:text-gray-400 text-center">
            Apakah anda belum punya akun ?{" "}
            <a
              href="register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Registrasi
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
