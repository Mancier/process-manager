<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    protected $fillable = 
    [
        'id_cliente',
        'nome',
        'email',
        'telefone',
        'celular',
        'cpf',
        'cnpj',
        'razao_social',
        'numero_casa',
        'bairro',
        'tipo_pessoa',
        'rg',
        'cep',
        'municipio',
        'uf',
        'endereco',
        'complemento',
        'observacao'
    ];

    /*public function processo(){
        return $this->hasMany('App\Processos', 'clientes_id');
    }

    public function arquivos(){
        return $this->belongsToMany('App\Arquivos');
    }*/
}
