@extends('layout.app')

@section('content')
<div class="container">
	
	<new-cliente data="{{ $clientes }}"></new-cliente>

</div>

@endsection

@section('script')
@parent

<script type="text/javascript" src="{{ asset('js/cliente.js') }}"></script>

@stop