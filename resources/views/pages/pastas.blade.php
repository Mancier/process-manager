@extends('layout.app')

@section('content')
<div class="container">
	
	<new-pastas data="{{ $clientes }}" token="{{ csrf_token() }}"></new-cliente>


</div>

@endsection

@section('script')
@parent

<script type="text/javascript" src="{{ asset('js/pastas.js') }}"></script>
<!-- <script type="text/javascript" src="{{ asset('js/upload.js') }}"></script> -->

@stop