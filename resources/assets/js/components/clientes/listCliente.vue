<template>
	<table class="table table-striped table-hover">
		<thead>
			<tr>
				<th>Nome</th>
                <th>Email</th>
                <th>CPF/CNPJ</th>
                <th>Telefone</th>
                <th>CEP</th>
                <th>Opções</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="cliente in clientes">
				<td>{{ cliente.nome }}</td>
				<td>{{ cliente.email }}</td>
				<td>{{ cliente.cpf }}</td>
				<td>{{ cliente.telefone }}</td>
				<td>{{ cliente.cep }}</td>
				<td></td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	export default{
		props: ['dados'],

		data() {
			return{
				clientes:[]
			}
		},


		created() {
			this.clientes = JSON.parse(this.dados)
		},
	}
</script>