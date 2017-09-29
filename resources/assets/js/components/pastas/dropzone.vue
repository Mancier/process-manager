<template>
	<div>
		<div id="dropzone" class="dropzone">
			<input type="file" class="input-file" name="arquivos[]" multiple @click.prevent="" @change="filesRecived($event.target.files)">
		</div>
	</div>
</template>

<script>
	const STATUS_INITIAL = 1, STATUS_SAVING = 2, STATUS_SUCCESS = 3, STATUS_FAILED = 0;

	export default{
		name:'dropzone',
		data(){
			return{
				uploadedFiles:[],
				uploadError: null,
				uploadStatus: null
			}
		},

		computed:{
			isInitial() {
		    	return this.uploadStatus === STATUS_INITIAL;
		    },
		    isSaving() {
		    	return this.uploadStatus === STATUS_SAVING;
		    },
		    isSuccess() {
		    	return this.uploadStatus === STATUS_SUCCESS;
		    },
		    isFailed() {
		    	return this.uploadStatus === STATUS_FAILED;
		    }	
		},

		creates(){
			window.console.log("Dropzone Iniciada")
		},

		 mounted() {
	      this.reset();
	    },

		methods:{
			filesRecived(arquivosRecebidos){
				//Vou começar a olahr os arquivos relacionados
				var arrayOfFiles = []
				window.console.log('Iniciando o tratamento')

				if (!arquivosRecebidos.length) return

				Array
					.from(Array(arquivosRecebidos.length).keys())
					.map(x => {
						arrayOfFiles.push(arquivosRecebidos[x], arquivosRecebidos[x].name)
					})

				window.console.log('Array => '+ arrayOfFiles)
				//Salvando
				window.console.log("Iniciando o UPLOAD")
				this.upload(arrayOfFiles)
			},

			upload(filesToUpload){
				window.console.log("UPLOAD iniciado")
				axios({
					method: 'post',
					url: './pastas/upload',
					data: this.filesToUpload
				})

				.then(x => {
					window.console.log('Component => '+ this.uploadedFiles.lenght)
					this.uploadedFiles = [].concat(x)
					this.uploadStatus = STATUS_SUCCESS
				})
				.catch(err => {
					window.console.log("ERROR!\n"+this.err.response)
					this.uploadError = err.response
					this.uploadStatus = STATUS_FAILED
				})
			},

			reset(){
				window.console.log("NÃO ME ENCHA MAIS")
			}
		}
	}
</script>