<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Competencias;

class OtherController extends Controller
{
    public function competenciasRead()
    {
    	$competencias = Competencias::all();

    	return response()->json(['competencias' => $competencias]);
    }
}
