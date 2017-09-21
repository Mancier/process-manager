<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Arquivos extends Model
{
	protected $fillable = [
		'id_aquivo',
		'nome',
		'cliente_fk',
		'processo_fk',
		'caminho'
	];

	// Conexões com tables distindas a mesma
	public function cliente(){
		return $this->hasOne('App\Clientes', 'cliente_fk');
	}

	public function processo(){
		return $this->hasOne('App\Processos', 'processo_fk');
	}

}
