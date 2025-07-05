<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class PageController extends Controller
{
    /**
    * Handler for the web route.
    */
    public function handler()
    {
        return view('app');
    }
}