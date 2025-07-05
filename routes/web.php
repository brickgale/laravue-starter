<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\PageController;

Route::get('{all}', [PageController::class, 'handler'])->where('all', '^(?!api).*$');
