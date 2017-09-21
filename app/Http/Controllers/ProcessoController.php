<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Processos;
use App\Competencias;

class ProcessoController extends Controller
{
    public function read(){
    	$processos = Processos::all();
    	$competencias = Competencias::all();

    	return view('pages.processo', ['processos' => $processos, 'competencias' => $competencias]);
    }

    public function create(Request $request){
    	$addProcesso = $request->all();

    	$log = Processos::create($addProcesso);

    	dd($log);

    	return response()->json(['Status' => 200]);
    }
}
