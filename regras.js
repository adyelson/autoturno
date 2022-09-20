
let mes = []



const modeloTurnosSemana = [
	{title: 'Noite', turno: 'N', reqHab: 'ctr', efetivo:[],qtdNecessaria: 5, ch: 5.25},
	{title: 'Tarde', turno: 'T', reqHab: 'ctr', efetivo:[],qtdNecessaria: 9, ch: 6.25},
	{title: 'Manhã', turno: 'M', reqHab: 'sup', efetivo:[],qtdNecessaria: 9, ch: 6.25},

]

let diasMes = 30;
for (let a=0; a<diasMes;a++){
	mes[a] = modeloTurnosSemana;
}
