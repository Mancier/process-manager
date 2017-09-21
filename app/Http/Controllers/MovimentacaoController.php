<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MovimentacaoController extends Controller
{
    public function read(){

    	return view('pages.movimentacao');
    }
}
