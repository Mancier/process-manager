<script>
	export default{

		props: ['data'],

		data() {
			return {
                cliente:{
                    tipo_pessoa:'',
                    nome:'',
                    cpf:'',
                    rg:'',
                    cnpj:'',
                    razao_social:'',
                    email:'',
                    telefone:'',
                    celular:'',
                    cep:'',
                    municipio:'',
                    uf:'',
                    numero:'',
                    endereco:'',
                    bairro:'',
                    complemento:'',
                    observacao:''
                },
				clientesInDatabase:{},
                outraPessoa:'Pessoa Jurídica',
                isPessoaFisica: true,
                isListVisible: true,
                clientesChecados: []
			}
		},

		created() {
			this.clientesInDatabase = JSON.parse(this.data)
            $('.item-navbar').removeClass('active')
            $("#clientes").addClass('active')
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
            },

            buscarCep() {
                var self = this

                this.cliente.endereco = '...'
                this.cliente.municipio = '...'
                this.cliente.uf = '...'
                this.cliente.bairro = '...'

                if (this.cliente.cep.length >= 8) {
                    window.console.log("Iniciando busca...")
                    $.getJSON('https://viacep.com.br/ws/'+this.cliente.cep+'/json/', function(dados) {

                    self.cliente.endereco = dados.logradouro
                    self.cliente.municipio = dados.localidade
                    self.cliente.uf = dados.uf
                    self.cliente.bairro = dados.bairro

                    //Verifica se o cep tem uma rua correspondente
                        if(dados.logradouro === ''){
                            $("#endereco").removeAttr('readonly')
                            $("#bairro").removeAttr('readonly')
                            
                            $("#bairro").focus();
                        }
                        else{
                        // focar no Campo Numero da casa
                            $("#endereco").add('readonly')
                            $("#bairro").add('readonly')
                            
                            $("#numero_casa").focus()
                        }
                    })
                }
            },

            togglePessoa(){
                this.isPessoaFisica = !this.isPessoaFisica
                if(!this.isPessoaFisica){
                    this.isPessoaFisica = false
                    this.outraPessoa = "Pessoa Física"
                }
                else{
                    this.isPessoaFisica = true
                    this.outraPessoa = "Pessoa Jurídica"
                }
            },

			addCliente() {
                var back = this
                var newCliente = {
                        'tipo_pessoa': this.outraPessoa,
                        'nome': this.cliente.nome,
                        'cpf': this.cliente.cpf,
                        'rg': this.cliente.rg,
                        'cnpj': this.cliente.cnpj,
                        'razao_social': this.cliente.razao_social,
                        'email': this.cliente.email,
                        'telefone': this.cliente.telefone,
                        'celular': this.cliente.celular,
                        'cep': this.cliente.cep,
                        'municipio': this.cliente.municipio,
                        'uf': this.cliente.uf,
                        'numero': this.cliente.numero,
                        'endereco': this.cliente.endereco,
                        'bairro': this.cliente.bairro,
                        'complemento': this.cliente.complemento,
                        'observacao': this.cliente.observacao
                    }

                    window.console.log('Iniciando o axios...\nSera inserido esses dados: \n'+newCliente)

				axios({
                    url: '/clientes/store',
                    method: 'post',
                    xsrfHeaderName: 'XSRF-TOKEN',
                    data: newCliente
                })
                .then(function (response) {
                    switch (response.status) {
                        case 200:
                            $.sweetModal({
                                content: 'Cliente inserido com sucesso',
                                icon: $.sweetModal.ICON_SUCCESS,

                                buttons: [
                                    {
                                        label: 'OK',
                                        classes: 'greenB'
                                    }
                                ]
                            }),

                            back.clientesInDatabase.push(newCliente)
                            back.toggleVisible(true)
                            break

                        default:
                            $.sweetModal({
                                title: 'Oops!',
                                content: 'Verifique se os dados estão corretos!',
                                icon: $.sweetModal.ICON_ERROR,

                                buttons: [
                                    {
                                        label: 'OK',
                                        classes: 'redB'
                                    }
                                ]
                            })
                            break
                    }
                  })
			}, /*End => addCliente*/

            information(id){
                axion.get('/clientes?q='+id)
                .then(response => alert("A requisição foi envidada e recebida"))
            }
		}
	}
</script>

<template>
    <div>
        <button type="button" class="btn btn-default buttonFloating" @click="toggleVisible"><i id="changeIcon" class="fa fa-plus"></i></button>
    	<div id="tableCliente" v-if="isListVisible">
    		<table class="table table-striped table-hover">
    			<thead>
    				<tr>
    					<th>Nome</th>
                		<th>Email</th>
                		<th>CPF/CNPJ</th>
                		<th>Telefone</th>
                		<th>CEP</th>
                		<th><input type="checkbox" name="todos"></th>
    				</tr>
    			</thead>
    			<tbody>
    				<tr v-for="cliente in clientesInDatabase" @click="information()" class="teste">
    					<td>{{ cliente.nome }}</td>
    					<td>{{ cliente.email }}</td>
    					<td>{{ cliente.cpf ? cliente.cpf : cliente.cnpj }}</td>
    					<td>{{ cliente.telefone }}</td>
    					<td>{{ cliente.cep }}</td>
    					<td colspan="1">
                           <input type="checkbox" :value="cliente.id_cliente" v-model="clientesChecados">
                        </td>
    				</tr>
    			</tbody>
    		</table>
    	</div>


    	<div class="container-half" v-else>
    		<center>
                <button type="button" class="btn btn-default" @click="togglePessoa">Trocar para {{ outraPessoa }}</button>
            </center>

            <div id="fisico" v-if="isPessoaFisica">
                <div class="form-group">
                	<label for="nome">Nome<span class="text-danger">*</span></label>
                    <input type="text" name="nome" id="nome" class="form-control" required="true" v-model="cliente.nome">
                </div>

                 <div class="row">
                    <div class="form-group col-md-6">
                    	<label for="cpf">CPF<span class="text-danger">*</span></label>
                        <input type="text" name="cpf" id="cpf" class="form-control" required="true" v-model="cliente.cpf">
                    </div>
                    <div class="form-group col-md-6">
                    	<label for="rg">RG<span class="text-danger">*</span></label>
                        <input type="text" name="rg" id="rg" class="form-control" v-model="cliente.rg">
                    </div>
                </div>
            </div>

            <div id="juridico" v-else>
                <div class="row">
                    <div class="form-group col-md-6">
                    	<label for="nome">Nome Fantasia</label>
                        <input type="text" name="nome" id="nome" class="form-control" v-model="cliente.nome">
                    </div>

                    <div class="form-group col-md-6">
                    	<label for="cnpj">CNPJ</label>
                        <input type="text" name="cnpj" id="cnpj" class="form-control" v-model="cliente.cnpj">
                    </div>
                </div>

                <div class="form-group">
                	<label for="razaoSocial">Razão Social</label>
                    <input type="text" name="razaoSocial" id="" class="form-control" v-model="cliente.razao_social">
                </div>
            </div>

            <div id="geral">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" class="form-control" v-model="cliente.email">
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                    	<label for="telefone">Telefone</label>
                    	<input type="text" name="telefone" id="telefone" class="form-control" v-model="cliente.telefone">
                    </div>

                    <div class="form-group col-md-6">
                    	<label for="celular">Celular</label>
                    	<input type="text" name="celular" id="" class="form-control" v-model="cliente.celular">
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-3">
                    	<label for="cep">CEP<span class="text-danger">*</span></label>
                        <input type="text" name="cep" id="cep" class="form-control" required="true" v-model="cliente.cep" @keyup="buscarCep">
                    </div>
                        
                    <div class="form-group col-md-5">
                    	<label for="municipio">Cidade</label>
                    	<input type="text" name="municipio" id="cidade" class="form-control" v-model="cliente.municipio" readonly>
                    </div>

                    <div class="form-group col-md-2">
                    	<label for="uf">UF</label>
                    	<input type="text" name="uf" id="uf" class="form-control" v-model="cliente.uf" readonly>
                    </div>

                    <div class="form-group col-md-2">
                    	<label for="numero_casa">Número</label>
                    	<input type="text" name="numero_casa" id="numero_casa" class="form-control" v-model="cliente.numero_casa" required="true">
                    </div>

                </div>
            
                <div class="row">
                    <div class="form-group col-md-7">
                    	<label for="endereco">Logradouro</label>
                    	<input type="text" name="endereco" id="endereco" class="form-control" v-model="cliente.endereco" readonly>
                    </div>

                    <div class="form-group col-md-5">
                    	<label for="bairro">Bairro</label>
                    	<input type="text" name="bairro" id="bairro" class="form-control" v-model="cliente.bairro" readonly>
                    </div>
                </div>

                <div class="form-group">
              		<label for="complemento">Complemento</label>
              		<input type="text" name="complemento" id="complemento" class="form-control" v-model="cliente.complemento">
                </div>
                

                <div class="form-group">
               		<label for="observacao">Observação</label>
               		<textarea name="observacao" class="form-control" v-model="cliente.observacao" rows="3"></textarea>                            
                </div>
                
                <button class="btn btn-success" style="float: right" @click="addCliente()">Salvar <i class="fa fa-plus"></i></button>

            </div> 
    	</div>
    </div>
</template>