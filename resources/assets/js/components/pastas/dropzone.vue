<template> 
	<div>
	  	<form role="form" class="form" enctype="multipart/form-data">
		    <div id="dropzone" class="dropzone form-control"> 
		      <input type="file" class="input-file" id="fileItem" multiple @click.prevent @change="newFile"> 

          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="files in uploadedFiles">
                <td>{{ files.name }}</td>
                <td><i class="text-success fa fa-check"></i></td>
              </tr>
            </tbody>
          </table>
		    </div>
	    </form>

		<div class="form-group">
			<div class="progress">
			  <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="min-width: 5%;">
			    5%
			  </div>
			</div>
		</div>
	</div>

</template> 
 
<script> 
  const STATUS_INITIAL = 1, STATUS_SAVING = 2, STATUS_SUCCESS = 3, STATUS_FAILED = 0; 
 
  export default{ 
    name:'dropzone',
    props:['cliente', 'processo'],
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
      reset(){ 
        this.uploadedFiles = []
      },

      newFile: function(){
        var i = 0
        var vm = this

        var fieldOfInput = document.querySelector("#fileItem")
        var fileList = fieldOfInput.files
        
        while (i < fileList.length) {
          var file = fileList[i]

            axios.put('/pastas/upload/'+this.cliente+'/'+this.processo)
            .then(response => {
              vm.uploadStatus = STATUS_SUCCESS
              vm.uploadedFiles.push(file)
              console.log('=================== UPLOAD ENCERRADO ===================') 
            })

          console.log(file)
          i++
        }

      	// files.append('file', document.getElementById('fileItem').files[0])
      	// this.FilesToUpload.push(files)
      } 
    }
  } 
</script>