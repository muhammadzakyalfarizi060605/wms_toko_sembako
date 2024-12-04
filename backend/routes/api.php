<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Registrasi dan login
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// Rute otentikasi untuk mendapatkan data user yang sedang login
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Dashboard per role
Route::middleware(['role:admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return view('admin.dashboard');
    });
});

Route::middleware(['role:kasir'])->group(function () {
    Route::get('/kasir/dashboard', function () {
        return view('kasir.dashboard');
    });
});

Route::middleware(['role:gudang'])->group(function () {
    Route::get('/gudang/dashboard', function () {
        return view('gudang.dashboard');
    });
});
