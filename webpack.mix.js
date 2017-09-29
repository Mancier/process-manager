let mix = require('laravel-mix');

mix
	//Compilação
	.js('resources/assets/js/app.js', 'public/js')
	.js('resources/assets/js/cliente.js', 'public/js')
	.js('resources/assets/js/processos.js', 'public/js')
	.js('resources/assets/js/pastas.js', 'public/js')
	.sass('resources/assets/sass/app.scss', 'public/css')
	.sass('node_modules/font-awesome/scss/font-awesome.scss', 'public/css')
	.sass('resources/assets/sass/style.scss', 'public/css')
	
	//Plain Scripts And Styles
	.styles([
		'public/css/app.css',
		'node_modules/sweet-modal/dist/min/jquery.sweet-modal.min.css',
		'public/css/font-awesome.css'
		 ],
		 'public/css/all.css')

	.scripts([
		'node_modules/sweet-modal/dist/min/jquery.sweet-modal.min.js',
		],
		'public/js/sweet-modal.js')
	.scripts([
		'node_modules/blueimp-file-upload/js/main.js',
		'node_modules/blueimp-file-upload/js/jquery.fileupload.js',
		'node_modules/blueimp-file-upload/js/jquery.fileupload-audio.js',
		'node_modules/blueimp-file-upload/js/jquery.fileupload-image.js',
		'node_modules/blueimp-file-upload/js/jquery.fileupload-process.js',
		'node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js',
		'node_modules/blueimp-file-upload/js/jquery.fileupload-video.js',
		'node_modules/blueimp-file-upload/js/jquery.iframe-transport.js'
		],
		'public/js/upload.js');

