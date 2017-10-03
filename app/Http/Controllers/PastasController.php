<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Clientes;
use App\Processos;
use App\Arquivos;

class PastasController extends Controller
{
    public function read(){

    	$clientes = Clientes::all();

    	return view('pages.pastas', ['clientes' => $clientes]);
    }

    public function searchInDatabase($id)
    {
        $x = DB::table('arquivos')
            ->select('nome')
            ->where('processo_fk', $id)
            ->get();

        return response()
            ->json($x);
    }

    public function upload(Request $request){
        $files = $request->file('arquivos');
    }
}
