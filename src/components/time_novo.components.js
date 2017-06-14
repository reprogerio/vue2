import store from '../store';
export default {
	template: `
		<div>
          <form class="form-inline">
            <div class="form-group">
              <input type="text" class="form-control" v-model="novoJogo.casa.gols">
              <label class="control-label" v-if="novoJogo.casa.time">
                {{novoJogo.casa.time.nome}}
                <img src="" style="height: 30px; width: 30px;">
              </label>
            </div>
            <span>X</span>
            <div class="form-group">
              <label class="control-label" v-if="novoJogo.fora.time">
                <img src="" style="height: 30px; width: 30px;">
                {{novoJogo.fora.time.nome}}
              </label>
              <input type="text" class="form-control" v-model="novoJogo.fora.gols">
            </div>
            <button type="button" class="btn btn-primary" @click="fimJogo">Fim de jogo</button>
          </form>
        </div>`,
        mounted(){
        	this.btnNovo(store.state.times);
        },
	data(){
		return{
			novoJogo:{
				casa:{
					time: null,
					gols: 0
				},
				fora:{
					time: null,
					gols: 0
				}
			},
		  };
		},
	  methods: {
	  	fimJogo(){
	  		let timeAdv   = this.novoJogo.fora.time;
	  		let timeCasa  = this.novoJogo.casa.time;
	  		let gols      = +this.novoJogo.casa.gols;
	  		let golsAdv   = +this.novoJogo.fora.gols;
	  		timeCasa.fimJogo(timeAdv, gols, golsAdv);
	  		store.commit('update', timeCasa);
	  		store.commit('update', timeAdv);
	  		store.commit('listagem');
	  	},
	  	btnNovo(times){
	  		let indexCasa  = Math.floor(Math.random()*6),
	  		indexFora      = Math.floor(Math.random()*6);

		  	this.novoJogo.casa.time  = times[indexCasa];
		  	this.novoJogo.casa.gols  = 0;
		  	this.novoJogo.fora.time  = times[indexFora];
		  	this.novoJogo.fora.gols  = 0;
	  	}
	  }
};