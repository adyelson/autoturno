function add(i,u,w, reqLevel, shiftTagS,typeOfDay){
	//days - daysOfWork or hour - workHours
	let workArrayPos = [];	
	let arrayObjects = Object.entries(workerList);
	let listEntries = [];
	let startShiftHour =mounth[i][u].startHour;
	let extraWorkPlus = 0;
	let extraHourPlus = 0;
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
					extraHourPlus = actualWork.especialSituation[s].workHourPLus;
				 }
			}
			let mustRest = false;
			//////after shift

			/////after especial situation - OK
			for(let a=0; a<actualWork.especialSituation.length;a++){
				if(actualWork.especialSituation[a].daysOfRest.includes(parseInt(i))){
					if(actualWork.especialSituation[a].lastDayOfRestHour>=startShiftHour){
						mustRest = true;
						// console.log(actualWork.name+' tem que descansar do turno '+mounth[i][u].shift+' no dia '+ i);
					}
				  				   
				}
		   }

			//befor especial situation???

			if(!mustRest){
				if(!cantEnter){
				let alreadyPut = !!actualWork.shiftWork[i];				
				//checar se já foi escalado no dia
				if(!alreadyPut){
					listEntries.push(actualWork);
				}
			}else{
				if(actualWork.shiftWork[i] == putSignal){
				}else{
					let existThis = !!extraWorkPlus.daysOfWork[putSignal];
					if(!existThis){
						if(typeOfDay=='weekend'){
							extraWorkPlus.daysOfWorkTotalWeekEnd++;
						}else{
							extraWorkPlus.daysOfWorkTotalNormal++;
						}
						extraWorkPlus.daysOfWork[putSignal]={days: 1}
						extraWorkPlus.daysOfWorkTotal++;
						extraWorkPlus.workHours+=extraHourPlus;
					}else{
						if(typeOfDay=='weekend'){
							extraWorkPlus.daysOfWorkTotalWeekEnd++;
						}else{
							extraWorkPlus.daysOfWorkTotalNormal++;
						}

						extraWorkPlus.daysOfWork[putSignal].days++;
						extraWorkPlus.daysOfWorkTotal++;
					}
					actualWork.shiftWork[i] = putSignal;
				}
			}
		}
		}
	}	
	listEntries.forEach(element => {
	
		if(typeOfDay=='weekend'){
			
			workArrayPos.push((element.workHours+element.daysOfWorkTotalWeekEnd+(2*element.daysOfWork[shiftTagS].days))*element.dayMultiplier);		
		}else{

			workArrayPos.push((element.workHours+element.daysOfWorkTotalNormal+(2*element.daysOfWork[shiftTagS].days))*element.dayMultiplier);		
		}
	});
	// se listaentries vazio, pular e não preencher vaga, deixar vazio devido impossibilida e reportar isso no relatorio

	///// criterio menor dia
	let lessDays = Math.min.apply(Math, workArrayPos)	
	let arrayPos = workArrayPos.findIndex((element)=> element == lessDays);
	///
	

	let workerName = listEntries[arrayPos].name;
	let workerId = workerList[workerName].workerId;

	if(typeOfDay=='weekend'){
		workerList[workerName].daysOfWorkTotalWeekEnd++;
	}else{		
		workerList[workerName].daysOfWorkTotalNormal++;		
	}
	workerList[workerName].daysOfWork[shiftTagS].days++;
	workerList[workerName].daysOfWorkTotal++;
	
	workerList[workerName].shiftWork[i] = mounth[i][u].shift;	
	workerList[workerName].workHours += mounth[i][u].ch;
	
	let valueReturn = {workerId, w};
	return (valueReturn);
}
