import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label, TextInput, Select, Button } from "flowbite-react";
import { HiMail, HiUser } from "react-icons/hi";

const Register = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    password: "",
    role: "kasir",
  });

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
      toast.success("Registrasi berhasil!", { position: "top-right" });
    } catch (error) {
      toast.error("Terjadi kesalahan, coba lagi.", { position: "top-right" });
    }
  };

  return (
    <div className="flex items-center justify-center px-6 py-8 h-screen">
      <div className="w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Halaman Registrasi Toko Sembako
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            {/* Nama Lengkap */}
            <div>
              <Label htmlFor="nama_lengkap" value="Nama Lengkap" />
              <TextInput
                id="nama_lengkap"
                name="nama_lengkap"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.nama_lengkap}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="name@flowbite.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" value="Password" />
              <TextInput
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Role */}
            <div>
              <Label htmlFor="role" value="Role" />
              <Select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="kasir">Kasir</option>
                <option value="gudang">Gudang</option>
              </Select>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full text-white">
              Registrasi
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
