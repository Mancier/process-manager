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

    public function upload(Request $recived){
    //	   $files = \Request::file('files');
    //     $directorieCliente = ;
    //     $directories = Storage::directories();

    //     if($directories === $directoriesCliente){

    //     }
    }
}
