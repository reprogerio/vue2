export class Time{
	constructor(id, nome, escudo){
		this.id      = id;
		this.nome    = nome;
		this.escudo  = escudo;
		this.pontos  = 0;
		this.gm      = 0;
		this.gs      = 0;
	}

	updPartida(pontos, golsMarcados, golsSofridos){
		this.pontos  += pontos;
		this.gm      += golsMarcados;
		this.gs      += golsSofridos;
	}

	fimJogo(timeAdv, gols, golsAdv){
		//alert('Time '+timeAdv+' Gols '+gols+' Gols fora '+golsAdv);
		if(gols==golsAdv){
			this.updPartida(1,gols,golsAdv);
			timeAdv.updPartida(1,golsAdv,gols);
		}else{
			if(gols>golsAdv){
				this.updPartida(3,gols,golsAdv);
				timeAdv.updPartida(0,golsAdv,gols);
			}else{
				this.updPartida(0,gols,golsAdv);
				timeAdv.updPartida(3,golsAdv,gols);
			}
		}
	}
}