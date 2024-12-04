<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\CashierController;
use Illuminate\Support\Facades\Route;

Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);

Route::middleware(['auth', 'role:admin'])->get('/admin', [AdminController::class, 'index']);
Route::middleware(['auth', 'role:warehouse'])->get('/warehouse', [WarehouseController::class, 'index']);
Route::middleware(['auth', 'role:cashier'])->get('/cashier', [CashierController::class, 'index']);
