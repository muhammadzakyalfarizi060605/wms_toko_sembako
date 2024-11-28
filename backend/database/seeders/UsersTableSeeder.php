<?php

namespace Database\Seeders;

use App\Models\UserModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Isi database dengan data dummy untuk tabel users.
     *
     * @return void
     */
    public function run()
    {
        UserModel::create([
            'nama_lengkap' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password123'), // Enkripsi password
            'role' => 'admin',
        ]);

        UserModel::create([
            'nama_lengkap' => 'Kasir User',
            'email' => 'kasir@example.com',
            'password' => Hash::make('password123'), // Enkripsi password
            'role' => 'kasir',
        ]);

        UserModel::create([
            'nama_lengkap' => 'Gudang User',
            'email' => 'gudang@example.com',
            'password' => Hash::make('password123'), // Enkripsi password
            'role' => 'gudang',
        ]);
    }
}
