function add(i,u,w, reqLevel, shiftTagS,typeOfDay){
	//days - daysOfWork or hour - workHours
	//i = dia
	//u = turno
	//w = numero do trabalho no dia
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
			let mustRest = 0;
			if(actualWork.especialSituation.length>0){
				for(let s=0; s<actualWork.especialSituation.length;s++){
				 if(actualWork.especialSituation[s].days.includes(parseInt(i))){
					cantEnter = true;
					putSignal = actualWork.especialSituation[s].signal; 
					extraWorkPlus = workerList[actualWork.name];
					extraHourPlus = actualWork.especialSituation[s].workHourPLus;
				 }
			}
			
			
			/////after especial situation - OK
			for(let a=0; a<actualWork.especialSituation.length;a++){
				
				if(actualWork.especialSituation[a].daysOfRest.includes(parseInt(i))){
					let posCheck = actualWork.especialSituation[a].daysOfRest.length;
					let checkValueLast = actualWork.especialSituation[a].daysOfRest[posCheck-1];
					let checkValueFirst = actualWork.especialSituation[a].daysOfRest[0];
					mustRest++;

					if(i==checkValueFirst){
						if(actualWork.especialSituation[a].firstDayOfRestHour>=actualWork.especialSituation[a].hourEnd){
							mustRest--;
							// console.log(actualWork.name+' tem que descansar do turno '+mounth[i][u].shift+' no dia '+ i);
						}
					
					}
					
					if(i==checkValueLast){
						if(actualWork.especialSituation[a].lastDayOfRestHour<startShiftHour){
							mustRest--;
							// console.log(actualWork.name+' tem que descansar do turno '+mounth[i][u].shift+' no dia '+ i);
						}
				    }
					
					
				}			   
				}
		   }
		
		
			if(mustRest==0){
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
	listEntries.reverse();
	listEntries.forEach(element => {	
		if(typeOfDay=='weekend'){
			//workArrayPos.push((element.workHours+element.daysOfWorkTotalWeekEnd+(2*element.daysOfWork[shiftTagS].days))*element.dayMultiplier);		
			workArrayPos.push((element.workHours+3*(element.daysOfWorkTotalWeekEnd)+(8*element.daysOfWork[shiftTagS].days))*element.dayMultiplier);		

			//workArrayPos.push((element.daysOfWorkTotalWeekEnd+(2*element.daysOfWork[shiftTagS].days))*element.dayMultiplier);		
		}else{
			//workArrayPos.push((element.workHours+element.daysOfWorkTotalNormal+(2*element.daysOfWork[shiftTagS].days))*element.dayMultiplier);		
			workArrayPos.push((element.workHours+3*(element.daysOfWorkTotalNormal)+(8*element.daysOfWork[shiftTagS].days))*element.dayMultiplier);		

			//workArrayPos.push(((2*element.daysOfWork[shiftTagS].days))*element.dayMultiplier);		
		}
	});
	// se listaentries vazio, pular e não preencher vaga, deixar vazio devido impossibilida e reportar isso no relatorio

	///// criterio menor dia
	let lessDays = Math.min.apply(Math, workArrayPos)	
	let arrayPos = workArrayPos.findIndex((element)=> element == lessDays);
	
	///
	if(arrayPos==-1){
		alert('Não existe funcionário suficiente que atendam as regras');
	}

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
	//////------------------------------------------------------------------
	//////------------------------------------------------------------------
	//////------------------------------------------------------------------
	//////------------------------------------------------------------------
	//////------------------------------------------------------------------
	
	let cont = 6-1; 
	let sequenceRest = 60;
	let checkSequenceOfWork = [];

	for (let zw=i-cont; zw<i;zw++){ 
		checkSequenceOfWork.push(workerList[workerName].shiftWork[zw]);
		
	}
	
	let endDay = i;
	let endHour = mounth[i][u].ch+mounth[i][u].startHour;
	let afterRest = 0;
		//tem folga no meio do intervalo escolhido
	if(checkSequenceOfWork.includes(undefined)){
		afterRest = mounth[i][u].restAfter;
	}else{
		afterRest = sequenceRest;
	}
		

	let restObjectData = getRestDays(endDay,endHour,afterRest);
	let daysToRest = restObjectData.daysR;
	let startRestHour =restObjectData.startHR;
	let endRestHour = restObjectData.endHR;


	let daysToPut = [];
	for(let t=i;t<=endDay;t++){
		daysToPut.push(t);
	}

	let conditionToAppend = {
		workHourPLus: mounth[i][u].ch, 
		signal: mounth[i][u].shift,
		days: daysToPut,
		daysOfRest: daysToRest,
		firstDayOfRestHour:startRestHour, 
		lastDayOfRestHour: endRestHour,
		afterRest:afterRest,	 
		hourEnd: endHour,
		hourStart: mounth[i][u].startHour
	};
     //// transformar descanso em condicao especial sem pos descanso

	workerList[workerName].especialSituation.push(conditionToAppend);


	//////------------------------------------------------------------------
	//////------------------------------------------------------------------
	
	//////------------------------------------------------------------------
	//////------------------------------------------------------------------

	let valueReturn = {workerId, w};
	return (valueReturn);
}
