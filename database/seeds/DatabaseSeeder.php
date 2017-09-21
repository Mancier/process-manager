<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $nome_opcao = [
        'Cível',
        'Família e Sucessões',
        'Registros Públicos',
        'Infância e Juventude Cível',
        'Acidentes do Trabalho',
        'Criminal',                  
        'Falência e Recuperação Judicial/Extrajuda',
        'Fazenda Pública Municipal',
        'Fazenda Pública Estadual',
        'Corregedoria Cartórios Extrajudiciais',
        'Crimes Falimentares',      
        'Trabalhista',
        'Execuções Criminais',
        'Justiça Federal',
    ];

    foreach ($nome_opcao as $x){
        DB::table('competencias')->insert(['nome_opcao' => $x]);
    }
    
    }
}
