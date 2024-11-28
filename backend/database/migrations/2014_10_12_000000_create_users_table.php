<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Jalankan migrasi untuk membuat tabel users.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_user'); // Kolom id_user
            $table->string('nama_lengkap'); // Kolom nama_lengkap
            $table->string('email')->unique(); // Kolom email
            $table->string('password'); // Kolom password
            $table->enum('role', ['admin', 'kasir', 'gudang']); // Kolom role dengan enum
            $table->timestamps(); // Kolom created_at dan updated_at
        });
    }

    /**
     * Membalikkan migrasi untuk menghapus tabel users.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
