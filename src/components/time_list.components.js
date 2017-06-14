import store from '../store';
import _ from 'lodash';

export default {
	template: `
		<div>
			<a class="btn btn-primary" @click="btnNovo">Novo Jogo</a>
	        <input type="text" class="form-control" v-model="filter">
	        <table class="table table-striped">
	        	<thead>
	              <tr>
	                <th v-for="coluna in colunas">
	                  <a href="#" @click.prevent='sortBy(coluna)'>{{coluna | ucwords}}</a>
	                </th>
	              </tr>
	            </thead>
	            <tbody>
	              <tr v-for="time in timesFiltered">
	                <th>{{time.nome}}</th>
	                <th>{{time.pontos}}</th>
	                <th>{{time.gm}}</th>
	                <th>{{time.gs}}</th>
	                <th>{{time | saldo}}</th>
	              </tr>
	            </tbody>
	          </table>
        </div>`,
        created(){
        	store.dispatch('dados');
        },
	data(){
		return{
			configs: {
		  		orderBy: ['pontos', 'gm', 'gs'],
		  		order: ['desc', 'desc', 'asc']
		  	},
		  	filter: '',
		  	colunas: ['time', 'pontos', 'gm', 'gs', 'saldo'],
		  };
		},
	  methods: {
	  	btnNovo(){
	  		store.commit('cadastro');
	  	},
	  	sortBy(coluna){
	  		this.configs.orderBy  = coluna;
	  		this.configs.order    = this.configs.order == 'desc' ? 'asc' : 'desc';
	  	}
	  },
	  computed: {
	  	times(){
	  		return store.state.times;
	  	},
	  	timesFiltered(){
	  		let colecao = _.orderBy(this.times, this.configs.orderBy, this.configs.order);
	  		return _.filter(colecao, item => { return item.nome.indexOf(this.filter) >=0; });
	  	}
	  }
};