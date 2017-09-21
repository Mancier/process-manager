<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Clientes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('clientes', function (Blueprint $table) {
            $table->increments('id_cliente')->unique();
            $table->string('nome', 255);
            $table->string('email')->nullable();
            $table->string('razao_social')->nullable();
            $table->string('tipo_pessoa', 16)->nullable();
            $table->string('telefone', 14);                        
            $table->string('celular', 15)->nullable();            
            $table->string('cpf', 25)->nullable();
            $table->string('cnpj', 25)->nullable();
            $table->string('rg', 15)->nullable();
            $table->string('cep', 15);
            $table->string('municipio', 75)->nullable();
            $table->string('uf', 155)->nullable();
            $table->string('endereco', 155)->nullable();
            $table->smallInteger('numero_casa')->nullable();
            $table->string('complemento', 255)->nullable();
            $table->string('bairro', 50);
            $table->text('observacao')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
