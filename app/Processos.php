<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Processos extends Model
{
    protected $fillable = 
    [
    	'id_processo',
    	'numero_prcesso',
    	'nome_processo',
    	'autor',
    	'reu',
    	'cliente',
    	'cliente_fk',
    	'competencia_fk',
    	'comarca',
    	'unidade',
    	'valor_causa',
    	'observacao'
    ];
}