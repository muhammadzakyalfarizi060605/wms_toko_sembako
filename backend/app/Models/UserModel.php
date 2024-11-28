<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    use HasFactory;

    // Tentukan nama tabel jika berbeda dari default 'users'
    protected $table = 'users';

    // Tentukan kolom mana yang dapat diisi (mass assignable)
    protected $fillable = ['nama_lengkap', 'email', 'password', 'role'];
}
