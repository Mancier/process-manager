/*Components*/
Vue.component('newCliente', require('./components/clientes/adicionarCliente.vue'));
// Vue.component('listCliente', require('./components/clientes/listCliente.vue'));

/*Vue Instance*/
$(function() {
	var cv =new Vue({
		el:'#app'
	})		
});