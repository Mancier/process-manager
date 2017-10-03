<template> 
	<div>
	  	<form role="form" class="form" onsubmit="return false;">
		    <div id="dropzone" class="dropzone form-control"> 
		      <input type="file" class="input-file" id="files" multiple @click.prevent @dragend="newFile"> 
		    </div> 
	    </form>

		<div class="form-group">
			<button class="btn btn-primary col-md-2" @click="upload">Upload <i class="fa fa-upload"></i></button>
			<div class="progress col-md-10">
			  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
			    60%
			  </div>
			</div>
		</div>
	</div>

</template> 
 
<script> 
  const STATUS_INITIAL = 1, STATUS_SAVING = 2, STATUS_SUCCESS = 3, STATUS_FAILED = 0; 
 
  export default{ 
    name:'dropzone',
    props:['token'],
    data(){ 
      return{ 
        uploadedFiles:[],
        FilesToUpload:[],
        tokenData: null,
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
      tokenData = this.token
    }, 
 
     mounted() { 
        this.reset(); 
    },

    methods:{ 
      upload(){ 
        //Vou começar a olahr os arquivos relacionados 
        var vm = this
        var data = new FormData()
        data.append('file',document.getElementById('files').files[0])

        var config = {
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            }
        }

        axios.put('/pastas/upload', data, config)
        .then(x => {
        	vm.uploadedFiles.push(x.data)
        	vm.uploadStatus = STATUS_SUCCESS 
          	console.log('=================== UPLOAD ENCERRADO ===================')
        })
        .catch(err => {
        	vm.uploadError = err.message 
        	vm.uploadStatus = STATUS_FAILED 
        })
      }, 
 
      reset(){ 
        this.uploadedFiles = []
      },

      newFile: function(){
      	var files = new FormData()
      	files.append('file', document.getElementById('files').files[0])
      	this.FilesToUpload.push(files)
      	console.log(files)
      } 
    }
  } 
</script>