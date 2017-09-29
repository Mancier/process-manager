<script>
import fileDropzone from '../../components/pastas/dropzone.vue'

export default{
	props:['data', 'token'],

	components:{
		fileDropzone
	},

	data(){
		return{
			clientesInDatabase: [],
			isListVisible: true
		}
	},
	created(){
		this.clientesInDatabase = JSON.parse(this.data)
	},

	methods: {
		toggleVisible(input) {
            if (input === null) {
                this.isListVisible = this.input
            }
            else {
                this.isListVisible = !this.isListVisible
                    if (!this.isListVisible) 
                    {
                        $("#changeIcon").removeClass('fa-plus')
                        $("#changeIcon").addClass('fa-list')
                    }

                    else
                    {
                        $("#changeIcon").removeClass('fa-list')
                        $("#changeIcon").addClass('fa-plus')
                    }
            }
        }, // End => toggleVisible()
    }
}
</script>

<template>
	<div>

		<button type="button" class="btn btn-default buttonFloating" @click="toggleVisible"><i id="changeIcon" class="fa fa-plus"></i></button>

		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<select class="form-control" name="clientes">
						<option></option>
						<option v-for="cliente in clientesInDatabase" :value="cliente.id_cliente">{{ cliente.nome }}</option>
					</select>
				</div>
			</div>

			<div class="col-md-6">
				<div class="form-group">
					<select class="form-control" name="processos" id="processosRelacionados">
						<option value=""></option>
					</select>
				</div>
			</div>
		</div> <!-- End => .row -->

		<div v-if="isListVisible">
			
		</div>

		<file-dropzone v-else></file-dropzone>

	</div>
</template>