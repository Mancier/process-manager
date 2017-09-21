let mix = require('laravel-mix');

mix.js(['resources/assets/js/app.js', 'node_modules/sweet-modal/dist/min/jquery.sweet-modal.min.js'], 'public/js/app.js')
	.js('resources/assets/js/cliente.js', 'public/js')
	.js('resources/assets/js/processos.js', 'public/js')
	.sass('resources/assets/sass/app.scss', 'public/css')
	.sass('node_modules/font-awesome/scss/font-awesome.scss', 'public/css')
	.sass('resources/assets/sass/style.scss', 'public/css')
	.styles(['node_modules/sweet-modal/dist/min/jquery.sweet-modal.min.css', 'public/css/app.css', 'public/css/style.css'], 'public/css/sweet-modal.css');
