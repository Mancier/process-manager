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

     public function create(Request $request){ 
      DB::table('processos')->insertGetId([
      	'numero_processo' => $request->numero_processo,
      	'nome_processo' => $request->nome_processo,
      	'autor' => $request->autor,
      	'reu' => $request->reu,
      	'cliente_fk' => $request->cliente_fk,
      	'competencia_fk' => $request->competencia_fk,
      	'comarca' => $request->comarca,
      	'unidade' => $request->unidade,
      	'valor_causa' => $request->valor_causa,
      	'observacao' => $request->observacao,
      	'cliente' => $request->cliente
      ]);

      return response()->json(['Status' => 200]); 
    } 
    public function searchInDatabaseAll(){
      $query = Processos::all();

      return response()
              ->json($query);
    }

    public function searchInDatabase($id){
    		$query = DB::table('processos')
    			->select('id_processo', 'nome_processo', 'numero_processo')
    			->where('cliente_fk', $id)
    			->get();

    	return response()
    			->json([$query]);
    }
}
