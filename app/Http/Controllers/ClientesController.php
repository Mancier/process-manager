<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clientes;
use Illuminate\Support\Facades\DB;

class ClientesController extends Controller
{
    public function read(){
    	$clientes = Clientes::all();
    	
    	return response()
            ->view('pages.clientes', ['clientes' => $clientes]);
    }

    public function create(Request $request){
    	$nwCliente = $request->all();
    	 Clientes::create($nwCliente);

    	 return response()->json(['Status' => 'Success']);
    }

    public function serchInDatabaseAll(){
        $query_result = Clientes::all();

         return response()->json([$query_result]);
    }

    public function serchInDatabase(Request $request, $id){

            $query_result = DB::table('clientes')
                            ->select('id_cliente', 'nome')
                            ->where('id_cliente', $id)
                            ->get();
        
        return response()->json([$query_result]);
    }
}
