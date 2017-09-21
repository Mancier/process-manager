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

    public function serchInDatabase(){

            $query_result = Clientes::all();
            
        return response()->json([$query_result]);
    }
}
