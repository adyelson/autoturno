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
	let countDay = true;
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
					countDay = actualWork.especialSituation[s].CountDay;
				 }
			}
			
			for(let a=0; a<actualWork.especialSituation.length;a++){
				
				if(actualWork.especialSituation[a].daysOfRest.includes(parseInt(i))){
					let posCheck = actualWork.especialSituation[a].daysOfRest.length;
					let checkValueLast = actualWork.especialSituation[a].daysOfRest[posCheck-1];
					let checkValueFirst = actualWork.especialSituation[a].daysOfRest[0];
					mustRest++;

					if(i==checkValueFirst){
						if(actualWork.especialSituation[a].firstDayOfRestHour>=actualWork.especialSituation[a].hourEnd){
							mustRest--;
						}					
					}					
					if(i==checkValueLast){
						if(actualWork.especialSituation[a].lastDayOfRestHour<startShiftHour){
							mustRest--;
						}
				    }				
				}			   
				}
		   }
		
		
			if(mustRest==0){
				if(!cantEnter){
				let alreadyPut = !!actualWork.shiftWork[i];				
				if(!alreadyPut){
					listEntries.push(actualWork);
				}
			}else{
				if(actualWork.shiftWork[i] == putSignal){
				}else{
					let existThis = !!extraWorkPlus.daysOfWork[putSignal];
					if(!existThis){						
						extraWorkPlus.daysOfWork[putSignal]={days: 1};						
					}else{
						extraWorkPlus.daysOfWork[putSignal].days++;
					}
					if(countDay){
						extraWorkPlus.daysOfWorkTotal++;
					}
					extraWorkPlus.workHours+=extraHourPlus;

					extraWorkPlus.daysOfWorkType[typeOfDay]++;

					
					actualWork.shiftWork[i] = putSignal;					
					
				}
			}
		}
	}
	}
	/////////////////////////////////////////////////////////////
	let listToChoose = [];
	listEntries.reverse();
	let usedRules = [];
	usedRules.push('shiftType');
	// usedRules.push('totalDays');
	//usedRules.push('typeDays');
	// usedRules.push('hours');
	let arrayPos = 0;	
		usedRules.forEach((rule)=>{
			workArrayPos = [];
			if(rule=='shiftType'){
				console.log('1');
				listEntries.forEach(element => {	
					workArrayPos.push((element.daysOfWork[shiftTagS].days));			
				});				
			}
			if(rule=='hours'){
				listEntries.forEach(element => {	
					workArrayPos.push((element.workHours));			
				});
				console.log('2');
			}
			if(rule=='typeDays'){
				listEntries.forEach(element => {	
					workArrayPos.push((element.daysOfWorkType[typeOfDay]));			
				});
				console.log('3');
			}
			if(rule=='totalDays'){
				listEntries.forEach(element => {	
					workArrayPos.push((element.daysOfWorkTotal)*element.dayMultiplier);			
				});
				console.log('4');
			}
			
			let lessDays = Math.min.apply(Math, workArrayPos)	
			arrayPos = workArrayPos.findIndex((element)=> element == lessDays);
			
			if(arrayPos==-1){
				alert('Não existe funcionário suficiente que atendam as regras');
			}

			listToChoose.push(listEntries[arrayPos].name);
		
		})	
		
		console.log(listToChoose);
		
		let counts= [];
		listToChoose.forEach((el)=>{
			counts[el] = (counts[el] || 0 )+1;
		});
		
		let lastArrayCheckPoint = [];
		
		for(let m=0;m<listToChoose.length;m++){
			lastArrayCheckPoint.push(counts[listToChoose[m]]);
			
		}
		lastArrayCheckPoint.reverse();
		let maxPoint = Math.max.apply(Math, lastArrayCheckPoint)	
		let turnPos = lastArrayCheckPoint.findIndex((element)=> element == maxPoint);
		console.log(listToChoose[turnPos]);

////////////////////////////////////////////////////////
	let workerName = listToChoose[turnPos];
	let workerId = workerList[workerName].workerId;
	workerList[workerName].daysOfWorkType[typeOfDay]++;
	workerList[workerName].daysOfWork[shiftTagS].days++;
	workerList[workerName].daysOfWorkTotal++;	
	workerList[workerName].shiftWork[i] = mounth[i][u].shift;	
	workerList[workerName].workHours += mounth[i][u].ch;
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
		workHourPLus: 0, 
		signal: mounth[i][u].shift,
		days: daysToPut,
		daysOfRest: daysToRest,
		firstDayOfRestHour:startRestHour, 
		lastDayOfRestHour: endRestHour,
		afterRest:afterRest,	 
		hourEnd: endHour,
		hourStart: mounth[i][u].startHour
	};
    

	workerList[workerName].especialSituation.push(conditionToAppend);
	//////------------------------------------------------------------------
	//////------------------------------------------------------------------

	let valueReturn = {workerId, w};
	return (valueReturn);
}
