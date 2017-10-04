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
            ->select('id_arquivo','nome', 'caminho')
            ->where('processo_fk', $id)
            ->get();

        return response()
           ->json($x);
    }

    public function searchInDatabaseAll(){
        $query = Arquivos::all();

        return response()->json($query);
    }

    public function upload(Request $request, $clienteID, $processoID){
        
        if ($request->hasFile('file')) {
            print ('Válido, pode prosseguir');
            exit;
        }
        else{
            print('Error!');
            exit;
        }

        $cliente = json_decode(DB::table('clientes')->select('id_cliente', 'nome')->where('id_cliente', $clienteID)->get(), true);
        $processo = json_decode(DB::table('processos')->select('id_processo', 'numero_processo')->where('id_processo', $processoID)->get(), true);
        $caminho = '/'.$cliente[0]['nome'].'/'.$processo[0]['numero_processo'].'/';

        $storage = storage_path().$caminho;

        $fileName = $file->getClientOriginalName();
        $fileModel = new \App\Arquivos();

        $fileModel->name = $fileName;

        Arquivos::create([
            'nome' => $fileName,
            'cliente_fk' => $cliente['id_cliente'],
            'processo_fk' => $processo['id_processo'],
            'caminho' => $storage.$fileName
        ]);

        return $file->move($storage, $fileName);

    }
}
