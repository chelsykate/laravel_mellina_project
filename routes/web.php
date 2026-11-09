<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/charts', function () {
    return Inertia::render('charts');
});