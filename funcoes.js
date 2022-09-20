let escalaMes= [];

for (let i=0; i<diasMes;i++){
	//turnos loop
	let diaAtual = [];
	//console.log('dia '+ parseInt(i+1)+'------')
	for (let u=0; u < mes[i].length; u++){
		let habReq = mes[i][u].reqHab;
		// colocar controladores no turno
		let efetivoTurnoAtual = [];		
		//console.log(mes[i][u].title+'------')
		for (let w = 0; w < mes[i][u].qtdNecessaria; w++){				
			console.log('w entra: '+w);
			let nome ='';
			if(habReq=='ctr'){
				valueReturn = adicionarControlador(i,u,w);
				
			}
			w = valueReturn.w;
			efetivoTurnoAtual.push(valueReturn.nome);
					
		}	

		let objetoTurno = {
			dia: i+1,
			turno: mes[i][u].turno,
			qtdNecessaria:mes[i][u].qtdNecessaria,
			efetivo: efetivoTurnoAtual
		}
		diaAtual.push(objetoTurno);
	}
	escalaMes.push(diaAtual);
}


function adicionarControlador(i,u,w){
	let posicoesNomes = [];

	
		nomes.forEach(element => {
			posicoesNomes.push(element.dias);		
		});
	
	
	let menorDias = Math.min.apply(Math, posicoesNomes)  
	let posicao = posicoesNomes.findIndex((element)=> element == menorDias);
	let nome = nomes[posicao].nome.toString();
		
	
	if((i==3 && nomes[posicao].nome=='work 1') || (i==13 && nomes[posicao].nome=='work 10') || (i==27 && nomes[posicao].nome=='work 20')){
		nomes[posicao].dias+=2;
		nomes[posicao].turnos[i] = 'SGT';	
		nomes[posicao].cargaHoraria += 24;
	
		w--;
		
	}else{
		if(nomes[posicao].turnos[i-1]== 'SGT'){
			
			
			posicao++;
			nomes[posicao].dias++;
			nomes[posicao].turnos[i] = mes[i][u].turno;	
			nomes[posicao].cargaHoraria += mes[i][u].ch;
			
		}else{
			nomes[posicao].dias++;
			nomes[posicao].turnos[i] = mes[i][u].turno;	
			nomes[posicao].cargaHoraria += mes[i][u].ch;
		}
	}
	let valueReturn = {nome, w};
	
	return (valueReturn);

}



