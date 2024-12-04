<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable; // Menggunakan Authenticatable
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;


class UserModel extends Authenticatable // Gunakan Authenticatable untuk autentikasi berbasis sesi
{
    use Notifiable;

    // Tentukan nama tabel jika berbeda dari default 'users'
    protected $table = 'users';

    // Tentukan kolom mana yang  dapat diisi (mass assignable)
    protected $fillable = ['nama_lengkap', 'email', 'password', 'role'];
}
