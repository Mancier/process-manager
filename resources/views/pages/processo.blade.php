@extends('layout.app')

@section('content')
<div class="container">
	<processo-list data="{{ $processos }}"></processo-list>
</div>

@endsection

@section('script')
@parent

<script type="text/javascript" src="{{ asset('js/processos.js') }}"></script>

@stop