<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\VehiculesController;
use App\Http\Controllers\WorkersController;
use App\Http\Controllers\WorkerOrderController;
use App\Http\Controllers\CarteCarburantController;
use App\Http\Controllers\ConsommationtController;
use App\Http\Controllers\CalendarController;


Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');

    Route::apiResource('users', UserController::class);
    Route::apiResource('vehicles', VehiculesController::class);
    Route::apiResource('workers', WorkersController::class);
    Route::apiResource('workorders', WorkerOrderController::class);
    Route::post('workorders/{workOrder}/assign', [WorkerOrderController::class, 'assign'])->name('workorders.assign');
    Route::apiResource('carte-carburants', CarteCarburantController::class);
    Route::get('profile', ProfileController::class)->name('profile');
    Route::get('calendar', CalendarController::class)->name('calendar');
    Route::apiResource('consommation', ConsommationtController::class);
});

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);

    Route::get('register', [RegisterController::class, 'create'])->name('register');
    Route::post('register', [RegisterController::class, 'store']);

    Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
    Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
});

