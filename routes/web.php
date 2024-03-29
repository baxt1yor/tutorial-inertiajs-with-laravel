<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return inertia('Home', ['test' => 'home']);
})->name('home');

Route::get('/about-us', function () {
    return inertia('About', ['about_us' => 'about']);
})->name('about-us');

Route::get('users', function () {
    return inertia('User', [
        'time' => now()->toTimeString()
    ]);
})->name('users');

Route::post('/logout', function () {
    return 'logout!';
})->name('logout');
