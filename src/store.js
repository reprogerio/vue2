import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import {Time} from './time';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
	view: 'tabela',
	times: []
}

const mutations  = {
	'data'(state, times){
		state.times  = times;
	},
	update(state, time){
		let index  = state.times.findIndex(element => time.id == element.id);
		if(index!=-1)
			state.times[index]  = time;
	},
	'listagem'(state){
		state.view  = 'tabela';
	},
	'cadastro'(state){
		state.view  = 'novojogo';
	}
}

const actions  = {
	'dados'(dados){
		Vue.http.get("localhost:8080/dist/times.json").then(response => {
			let times  = response.data.map(element => new Time(element.id, element.nome, element.escudo));
			dados.commit('data', times);
		})
	}
};

export default new Vuex.Store({
	state,
	mutations,
	actions
});