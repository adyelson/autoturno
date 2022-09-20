function add(i,u,w, reqLevel){
	//days - daysOfWork or hour - workHours
	let workArrayPos = [];	
	let arrayObjects = Object.entries(workerList);
	let listEntries = [];


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
				 }
			}
		

			if(!cantEnter){

				let alreadyPut = !!actualWork.shiftWork[i];
				
				//checar se já foi escalado no dia
				if(!alreadyPut){

					listEntries.push(actualWork);
				}


			}else{
				actualWork.shiftWork[i] = putSignal;
			}
		}
	}
	console.log(arrayObjects);
	console.log(listEntries);
	listEntries.forEach(element => {
		console.log(element);
		console.log(element.dayMultiplier);
		workArrayPos.push(element.daysOfWork*element.dayMultiplier);		
	});

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
