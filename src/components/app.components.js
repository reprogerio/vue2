import store from '../store';
import TimeListComponent from './time_list.components';
import TimeNovoComponent from './time_novo.components';

export default {
	components: {
		'time_list': TimeListComponent,
		'time_novo': TimeNovoComponent
	},
	template: `
	<div class="container">
		<div class="row">
        <h3>Novo App</h3>
        <br>
        <div v-show="view == 'tabela'">
        	<time_list></time_list>
        </div>
        <div v-show="view == 'novojogo'">
        	<time_novo></time_novo>
        </div>
      </div>
    </div>`,
    computed: {
    	view(){
    		return store.state.view;
    	}
    }
};