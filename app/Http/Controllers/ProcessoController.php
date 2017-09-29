<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Processos;
use App\Competencias;

class ProcessoController extends Controller
{
    public function read(){
    	$processos = Processos::all();
    	$competencias = Competencias::all();

    	return view('pages.processo', ['processos' => $processos, 'competencias' => $competencias]);
    }
}
