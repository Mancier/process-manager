<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Arquivos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('arquivos', function (Blueprint $table) {
            $table->increments('id_arquivo');
            $table->string('nome');
            $table->integer('clientes_fk')->unsigned();
            $table->foreign('clientes_fk')->references('id_cliente')->on('clientes');
            $table->integer('processo_fk')->unsigned();
            $table->foreign('processo_fk')->references('id_processo')->on('processos');
            $table->string('caminho', 255);
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
