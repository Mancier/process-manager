<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- CSRF TOKEN -->
	<meta name="csrf-token" content="{{ csrf_token() }}">
	
	<!-- Titulo -->
	<title>{{ config('app.name') }}</title>

	<!-- Icone -->
	<link rel="shortcut icon" href="{{ asset('img/icone.png') }}">

	<!-- CSS -->
	@section('script')
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
	<link rel="stylesheet" href="{{ asset('css/style.css') }}">
	<link rel="stylesheet" href="{{ asset('css/font-awesome.css') }}">

	<!-- JavaScript -->
	<script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
	@show

	<!-- End => Head -->
</head>

<body>
	<div id="app">
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#"><span style="font-weight: bold; color: red">nw</span><span style="font-weight: bold">Maker()</span></a>
				</div>
		
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse navbar-ex1-collapse">
					<ul class="nav navbar-nav navbar-toggler-left">
						<li><a href="{{ route('home') }}" class="item-navbar">Home</a></li>
						<li><a href="{{ route('processo') }}" class="item-navbar">Processos</a></li>
						<li><a href="{{ route('movimentacao') }}" class="item-navbar">Movimentação</a></li>
						<li><a href="{{ route ('pastas') }}" class="item-navbar">Pastas</a></li>
						<li><a href="{{ route('clientes') }}" class="item-navbar">Clientes</a></li>

					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Opções <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li><a href="#">Ajuda</a></li>
								<li><a href="#">Informações</a></li>
								<li><a href="#">Sair</a></li
							</ul>
						</li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</div>
		</nav>
		<!-- O gancho para outras páginas serem inseridas -->
		@yield('content')
	</div>		
</body>

</html>