function add(i,u,w, reqLevel){
	//days - daysOfWork or hour - workHours
	let workArrayPos = [];	
	let arrayObjects = Object.entries(workerList);
	let listEntries = [];
	
	let extraWorkPlus = 0;
	///// define level para vaga
	for(let z=0;z<arrayObjects.length;z++){
		let actualWork = arrayObjects[z][1];
		if(actualWork.level==reqLevel){
			let putSignal = '';
			let cantEnter = false;
			for(let s=0; s<actualWork.especialSituation.length;s++){
				 if(actualWork.especialSituation[s].days.includes(parseInt(i))){
					cantEnter = true;
					putSignal = actualWork.especialSituation[s].signal; 
					extraWorkPlus = workerList[actualWork.name];
				 }
			}
			if(!cantEnter){
				let alreadyPut = !!actualWork.shiftWork[i];				
				//checar se já foi escalado no dia
				if(!alreadyPut){
					listEntries.push(actualWork);
				}
			}else{
				if(actualWork.shiftWork[i] == putSignal){
				}else{
					extraWorkPlus.daysOfWork++;
					actualWork.shiftWork[i] = putSignal;				
				}
			}
		}
	}	
	listEntries.forEach(element => {	
		workArrayPos.push(element.daysOfWork*element.dayMultiplier);		
	});
	// se listaentries vazio, pular e não preencher vaga, deixar vazio devido impossibilida e reportar isso no relatorio

	///// criterio menor dia
	let lessDays = Math.min.apply(Math, workArrayPos)	
	let arrayPos = workArrayPos.findIndex((element)=> element == lessDays);
	///
	

	let workerName = listEntries[arrayPos].name;
	let workerId = workerList[workerName].workerId;

	

	workerList[workerName].daysOfWork++;
	workerList[workerName].shiftWork[i] = mounth[i][u].shift;	
	workerList[workerName].workHours += mounth[i][u].ch;	
	let valueReturn = {workerId, w};
	return (valueReturn);
}
