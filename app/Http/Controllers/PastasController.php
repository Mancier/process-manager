<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PastasController extends Controller
{
    public function read(){

    	return view('pages.pastas');
    }
}
