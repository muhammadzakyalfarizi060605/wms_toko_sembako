<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'nama_lengkap' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|in:kasir,gudang',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Simpan data user
        $user = UserModel::create([
            'nama_lengkap' => $request->nama_lengkap,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        // Kirim respon sukses
        return response()->json(['message' => 'User registered successfully!', 'user' => $user], 201);
    }



    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            // Mengirimkan role berdasarkan pengguna yang login
            return response()->json([
                'message' => ucfirst($user->role) . ' logged in', // Pesan dinamis berdasarkan role
                'role' => $user->role, // Menyertakan role dalam respons
            ]);
        }

        // Jika login gagal
        return response()->json([
            'message' => 'Invalid credentials', // Pesan error
        ], 401);
    }


    // Logout: untuk membersihkan sesi jika ada
    public function logout(Request $request)
    {
        auth()->logout();
        return response()->json(['message' => 'Logout successful']);
    }
}
