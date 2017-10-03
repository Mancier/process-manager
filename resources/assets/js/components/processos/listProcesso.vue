<script>
	export default{
		props: ['data'],

		data: function() {
			return {
				newProcess:{
					numero_processo:'',
					nome_processo:'',
					autor:'',
					reu:'',
					cliente:'',
					cliente_fk:'',
					comarca:'',
					unidade:'',
					observacao:'',
					competencia_fk:'',
					valor_causa:''
				},

				processosInDatabase: [],
				competenciasInDatabase: [],
				whoIsCliente: [],
				isListVisible: true
			}
		},

		created(){
			this.processosInDatabase = JSON.parse(this.data)
			this.getCompetencias()
			$('.item-navbar').removeClass('active')
			$("#processos").prop('class', 'active')
		},

		methods:{
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

            getCompetencias() {
            	var back = this
            	axios.get('/competencias')
            	.then(function(response){
            		back.competenciasInDatabase = response.data.competencias
            	})
            }, //End => getCompetencias()

            addProcesso(){
            	var back = this
            	var newProcesso = {
            		'nome_processo':this.newProcess.nome_processo,
            		'numero_processo':this.newProcess.numero_processo,
					'autor':this.newProcess.autor,
					'reu':this.newProcess.reu,
					'cliente':this.newProcess.cliente,
					'cliente_fk':this.newProcess.cliente_fk,
					'comarca':this.newProcess.comarca,
					'unidade':this.newProcess.unidade,
					'observacao':this.newProcess.observacao,
					'competencia_fk':this.newProcess.competencia_fk,
					'valor_causa':this.newProcess.valor_causa
            	}
            	window.console.log(newProcesso)
            	axios({
            		url: '/processo/store',
                    method: 'post',
                    xsrfHeaderName: 'XSRF-TOKEN',
                    data: newProcesso
            	})
            	.then(function(response){
            		switch (response.status) {
            			case 200:
            				 $.sweetModal({
                                content: 'Cadastro Inserido com sucesso',
                                icon: $.sweetModal.ICON_SUCCESS,

                                buttons: [
                                    {
                                        label: 'OK',
                                        classes: 'greenB'
                                    }
                                ]
                            }),

            				 back.processosInDatabase.push(newProcesso)
            				 back.toggleVisible(true)
            				break
            				// Edn -> case 200

            			case 500:
            				$.sweetModal({
                                title: 'Oops!',
                                content: 'Error: '+response.message,
                                icon: $.sweetModal.ICON_ERROR,

                                buttons: [
                                    {
                                        label: 'OK',
                                        classes: 'redB'
                                    }
                                ]
                            }) //End -> default
            			break

            			default:
            				console.log('Default option')
            			break

            		} // End => switch
            	}) //End => .then()
            }, //End => addProcesso()

            findCliente: function(){
            	var back = this
    			axios.get('/clientes/search')
				.then(function(response){
					response.data.forEach( function(info) {
							back.whoIsCliente = info
					})
				})
            }, //End => findCliente()

            desabilitandoCampos: function(){
            	var back = this
            	switch (this.newProcess.cliente) {
            		case "Autor":
            			$("#autorButton").removeClass('disabled')
            			break

            		case "Réu":
            			$("#reuButton").removeClass('disabled')
            			break
            		default:
            			
            			break
            	}
            },// End => desabilitandoCampos()

            clientSelected: function(valueId, nome){
            	
            	let back = this

            	//Verificando dados - Debug
            	window.console.log('ID: '+valueId+'\nNome: '+nome)

            	//Definindo o ID do nosso cliente
            	this.newProcess.cliente_fk = valueId

            	//Setando o valor nos campos como se devem
            	if (this.newProcess.cliente === "Autor") {
            		back.newProcess.autor = nome
            		$("#autor").prop('readonly', true)
            		$('#clienteModal').modal('hide')
            		window.console.log(nome)
            	}
            	else {
            		back.newProcess.reu = nome
            		$("#reu").prop('readonly', true)
            		$('#clienteModal').modal('hide')
            		window.console.log(nome)
            	}
            }
		}
	}
</script>

<template>
	<div>
		
		<button type="button" class="btn btn-default buttonFloating" @click="toggleVisible"><i id="changeIcon" class="fa fa-plus"></i></button>

		<div id="tableProcesso" v-if="isListVisible">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Número</th>
						<th>Autor</th>
						<th>Réu</th>
						<th>Valor (R$)</th>
						<th colspan="1">
							<input type="checkbox">
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="processo in processosInDatabase">
						<td>{{ processo.nome_processo }}</td>
						<td>{{ processo.numero_processo }}</td>
						<td>{{ processo.autor }}</td>
						<td>{{ processo.reu }}</td>
						<td>{{ processo.valor_causa }}</td>
						<td colspan="1">
							<input type="checkbox" :value="processo.id_processo">
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="container-half" v-else>
			<div class="row">
				<div class="form-group col-md-6">
					<label for="numero_processo">Número do processo<span class="text-danger">*</span></label>
					<input type="text" name="numero_processo" id="numero_processo" required="true" class="form-control" v-model="newProcess.numero_processo">
				</div>

				<div class="form-group col-md-6">
					<label for="nome_processo">Nome Ação<span class="text-danger">*</span></label>
					<input type="text" id="nome_processo" name="nome_processo" class="form-control" required="true" v-model="newProcess.nome_processo">
				</div>
			</div> <!-- row->end -->

			<div class="row">
				<div class="col-md-3 form-group">
					<label for="cliente">Cliente<span class="text-danger">*</span></label>
					<select name="cliente" class="form-control" @change="desabilitandoCampos" v-model="newProcess.cliente">
						<option value="Autor">Autor</option>
						<option value="Réu">Réu</option>
					</select>
				</div>

				<div class="col-md-5 form-group">
					<label for="competencia">Competencia<span class="text-danger">*</span></label>
						<select name="competencia" id="competencia" class="form-control" v-model="newProcess.competencia_fk">
						<option v-for="competenciaSelect in competenciasInDatabase" :value="competenciaSelect.id_competencia">{{ competenciaSelect.nome_opcao }}</option>
					</select>
				</div>

				<div class="col-md-4 form-group">
					<label for="valor_causa">Valor da Causa<span class="text-danger">*</span></label>
					<div class="input-group">
                    	<span class="input-group-addon">R$</span>
                    	<input type="text" name="valor_causa" id="valor_causa" class="form-control" required="true" v-model="newProcess.valor_causa">
                	</div>
				</div>
			</div>

			<div class="form-group">
				<label for="autor">Autor<span class="text-danger">*</span></label>
				<div class="input-group">
					<input type="text" name="autor" id="autor" required="true" class="form-control" v-model="newProcess.autor">
					<span class="input-group-btn">
						<a href="#clienteModal" @click="findCliente" id="autorButton" class="btn btn-default disabled" data-toggle="modal"><i class="fa fa-search"></i></a>
					</span>
				</div>
			</div>
		
			<div class="form-group">
				<label for="reu">Réu<span class="text-danger">*</span></label>
				<div class="input-group">
					<input type="text" name="reu" id="reu" class="form-control" required="true" v-model="newProcess.reu">
					<span class="input-group-btn">
						<a href="#clienteModal" @click="findCliente" id="reuButton" class="btn btn-default disabled" data-toggle="modal"><i class="fa fa-search"></i></a>
					</span>
				</div>
				
			</div>

			<div class="row">
				<div class="form-group col-md-5">
					<label for="comarca">Comarca<span class="text-danger">*</span></label>
					<input type="text" name="comarca" id="comarca" class="form-control" v-model="newProcess.comarca">
				</div>
				<div class="form-group col-md-7">
					<label for="unidade">Unidade<span class="text-danger">*</span></label>
					<input type="text" name="unidade" id="unidade" class="form-control" v-model="newProcess.unidade">
				</div>
			</div>

			<div class="form-group">
				<label for="observavao">Observção</label>
				<textarea name="observacao" id="observacao" class="form-control" rows="5" v-model="newProcess.observacao"></textarea>
			</div>

			<button type="button" class="btn btn-success" @click="addProcesso" style="float: right">Salvar <i class="fa fa-plus"></i></button>

			<div class="modal fade" id="clienteModal">
				<div class="modal-dialog" role="document" style="width: 65%">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
								<span class="sr-only">Close</span>
							</button>
							<h4 class="modal-title"><center>Clientes</center></h4>
						</div>
						<div class="modal-body">
							<table class="table table-striped">
								<thead>
									<tr>
										<!-- <th></th> -->
										<th>Nome</th>
										<th>CNPJ/CPF</th>
										<th>Email</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="option in whoIsCliente" @dblclick="clientSelected(option.id_cliente, option.nome)">
										<!-- <td colspan="1">
											<center>
												<input type="radio" name="cliente" v-model="cliente_fk" :value="option.id_cliente">		
											</center>
										</td> -->
										<td>{{ option.nome }}</td>
										<td>{{ option.cpf ? option.cpf : option.cnpj }}</td>
										<td>{{ option.email }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</div><!-- /.modal-content -->
				</div><!-- /.modal-dialog -->
			</div><!-- /.modal -->

		</div>
	</div>
</template>