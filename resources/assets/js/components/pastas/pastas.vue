<script>
import fileDropzone from '../../components/pastas/dropzone.vue'

export default{
	props:['data', 'token'],

	components:{
		fileDropzone
	},

	data(){
		return{
			clienteID: null,
			clientePack: [],
			processoID:null,
			processoPack: [],
			filesPack: [],
			clientesInDatabase: [],
			tokenData: null,
			isListVisible: true
		}
	},
	created(){
		this.clientesInDatabase = JSON.parse(this.data)
		this.tokenData = this.token
	},

	computed:{

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

        findProcesso: function(){
        	var vm = this 
        	var clienteSelected = $("#clienteSelecionado")

        	this.clienteID = clienteSelected.val()

        	axios.get('/processo/search?'+clienteSelected.val())
        	.then(response => {
        		vm.processoPack = response.data
        	})
        }, //End => findProcesso()

        findFiles: function(){
        	var vm = this
        	var processoSelected = $("#processosRelacionados")

        	this.processoID = processoSelected.val()

        	axios.get('/pastas/search/'+processoSelected.val())
        	.then(response => {
        		console.log(response)
        		vm.filesPack = response.data
        	})
        }
    }
}
</script>

<template>
	<div>

		<button type="button" class="btn btn-default buttonFloating" @click="toggleVisible"><i id="changeIcon" class="fa fa-plus"></i></button>

		<div class="row">
			<div class="col-md-6">
				<div class="form-group">
					<select class="form-control" name="clientes" id="clienteSelecionado" @blur="findProcesso">
						<option v-for="cliente in clientesInDatabase" :value="cliente.id_cliente">{{ cliente.nome }}</option>
					</select>
				</div>
			</div>

			<div class="col-md-6">
				<div class="form-group">
					<select class="form-control" name="processos" id="processosRelacionados" @blur="findFiles">
						<option v-for="processo in processoPack" :value='processo.id_processo'>{{ processo.nome_processo }} - {{processo.numero_processo }}</option>
					</select>
				</div>
			</div>
		</div> <!-- End => .row -->

		<div v-if="isListVisible">
			<table class="table table-active table-striped table-hover">
				<thead>
					<tr>
						<th colspan="15">NOME</th>
						<th colspan="3">TIPO</th>
						<th colspan="5">UPLOAD</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						
					</tr>
				</tbody>
			</table>
		</div>
		
		<div v-else>
			<file-dropzone :processo = 'processoID' :cliente = 'clienteID'></file-dropzone> 
		</div>
	</div>
</template>