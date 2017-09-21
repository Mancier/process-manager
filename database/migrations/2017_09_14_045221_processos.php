<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Processos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('processos', function (Blueprint $table) {
            $table->increments('id_processo');
            $table->string('numero_processo');
            $table->string('nome_processo', 255);
            $table->string('autor', 255)->nullable();
            $table->string('reu', 255)->nullable();
            $table->string('cliente', 5);
            $table->integer('cliente_fk')->unsigned();
            $table->foreign('cliente_fk')->references('id_cliente')->on('clientes');
            $table->integer('competencia_fk')->unsigned();
            $table->foreign('competencia_fk')->references('id_competencia')->on('competencias');
            $table->string('comarca', 50)->nullable();
            $table->string('unidade', 75);
            $table->string('valor_causa', 20);
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
