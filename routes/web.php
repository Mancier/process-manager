<?php
/*
	============== Manual de Interpretação ==============
	1-Funções - CRUD
		1.1 - Create => Inserção de dados, seja ele qual tipo seja. Ex: @create,  @createFunction, @createUser...
		1.2 - Read => Voltadas para a leitura das páginas, normalmente elas são utilizadas apenas para carregar a página, normalmente não transmitem informações em JSON
		1.3 - Update
			1.3.1 - Find to Update => É a função que irá buscar o dado no Banco e retornar com um JSON contendo os dados
			1.3.2 - Update => É o próprio update, ele segue a mesma regra do CREATE(1.1)
		1.4 - Delete => A função mais complicada, o DELETE vai remover do BD aquela informação apenas, todos os dados relacionados continuam
*/

Route::get('/', function () {
    return view('pages.home');
});

//Route -> Home
Route::get('/home', 'HomeController@read')->name('home');

//Route -> Processo
Route::get('/processo', 'ProcessoController@read')->name('processo');
Route::post('/processo/store', 'ProcessoController@create')->name('processo.store');


//Route -> Movimentacao
Route::get('/movimentacao',' MovimentacaoController@read')->name('movimentacao');

// Route -> Pastas
Route::get('/pastas', 'PastasController@read')->name('pastas');

//Route -> Cliente
Route::match(['get', 'post'], '/clientes', 'ClientesController@read')->name('clientes');
Route::post('/clientes/store', 'ClientesController@create')->name('clientes.store');
Route::get('/clientes/search', 'ClientesController@serchInDatabase');

//Route -> Others
Route::get('/competencias','OtherController@competenciasRead');

