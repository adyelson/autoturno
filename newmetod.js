
let nomes = {

}

let dadosInseridos = [
    {nome: 'felix', hab: 'sup', turnos: []},
    {nome: 'aline', hab: 'ctr', turnos: []},
    {nome: 'work 1', hab: 'ctr', turnos:[]},
	{nome: 'work 2', hab: 'ctr', turnos:[]},
	{nome: 'work 3', hab: 'ctr', turnos:[]},
	{nome: 'work 4', hab: 'sup', turnos:[]},
	{nome: 'work 5', hab: 'ctr', turnos:[]},
	{nome: 'work 6', hab: 'ctr', turnos:[]},
	{nome: 'work 7', hab: 'ctr', turnos:[]},
	{nome: 'work 8', hab: 'ctr', turnos:[]},
	{nome: 'work 9', hab: 'ctr', turnos:[]},
	{nome: 'work 10', hab: 'ctr', turnos:[]},
	{nome: 'work 12', hab: 'sup', turnos:[]},
	{nome: 'work 11', hab: 'ctr', turnos:[]},
	{nome: 'work 14', hab: 'ctr', turnos:[]},
	{nome: 'work 15', hab: 'ctr', turnos:[]},
	{nome: 'work 16', hab: 'ctr', turnos:[]},
	{nome: 'work 17', hab: 'ctr', turnos:[]},
	{nome: 'work 18', hab: 'ctr', turnos:[]},
	{nome: 'work 19', hab: 'ctr', turnos:[]},
	{nome: 'work 20', hab: 'ctr', turnos:[]},
	{nome: 'work 21', hab: 'ctr', turnos:[]},
	{nome: 'work 22', hab: 'ins', turnos:[]},
	{nome: 'work 23', hab: 'ctr', turnos:[]},
	{nome: 'work 24', hab: 'ctr', turnos:[]},
	{nome: 'work 25', hab: 'ctr', turnos:[]},
	{nome: 'work 26', hab: 'ctr', turnos:[]},
	{nome: 'work 27', hab: 'ctr', turnos:[]},
	{nome: 'work 28', hab: 'ctr', turnos:[]},
	{nome: 'work 29', hab: 'ctr', turnos:[]},
	{nome: 'work 30', hab: 'ctr', turnos:[]},
	{nome: 'work 31', hab: 'ctr', turnos:[]},

]

let turnos = [
  {turno: 'm', reqHab: 'sup'},
  {turno: 't', reqHab: 'ctr'}
]


  dadosInseridos.forEach(element => {
      nomes[element.nome] = {nome: element.nome, hab: element.hab, turnos:[]}
      
    
    
  });
