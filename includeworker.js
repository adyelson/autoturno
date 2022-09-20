

function includeWorkers(){
	
	workerList = []
	document.querySelectorAll(".worker.include").forEach((item)=>{
		/////// ---------- rever errro
		let cantEnterDays = [];
		let daysOfWorkObject = {};
	
		item.querySelectorAll(".condition.include").forEach((condition)=>{
			let startDay = parseInt(condition.querySelector('.dayStart').value)-1;		
			let endDay = parseInt(condition.querySelector('.dayEnd').value);
			let startHour = parseInt(condition.querySelector('.hourStart').value)-1;		
			let endHour = parseInt(condition.querySelector('.hourEnd').value);
			let afterRest = parseInt(condition.querySelector('.restAfterSpecial').value);
			let signalToPut = condition.querySelector('.signal').value;

			let useHour = condition.querySelector('#countHour');
			let totalHourOfCondition =  0;
				
			if(useHour.checked){				
				totalHourOfCondition =	sumHour(startDay+1,endDay,startHour,endHour);				
			}

			let restObjectData = getRestDays(endDay,endHour,afterRest);
			let daysToRest = restObjectData.daysR;
			let startRestHour =restObjectData.startHR;
			let endRestHour = restObjectData.endHR;


			let daysToPut = [];
			for(let t=startDay;t<endDay;t++){
				daysToPut.push(t);
			}
			
			let conditionToAppend = {
				workHourPLus: totalHourOfCondition, 
				signal: signalToPut,
				days: daysToPut,
				daysOfRest: daysToRest,
				firstDayOfRestHour:startRestHour, 
				lastDayOfRestHour: endRestHour,
				afterRest:afterRest,	 
				hourEnd: endHour,
				hourStart: startHour
			};

			cantEnterDays.push(conditionToAppend);
		});
		/////// ---------- rever errro

		
		let id = item.querySelector('#id').value;
		let workerName = item.querySelector('#worker').value;	
		
		/////////////
		

		let daySubtractor = 0;

		for (let cant=0; cant<cantEnterDays.length;cant++){
			if(cantEnterDays[cant].workHourPLus==0){

				daySubtractor+= cantEnterDays[cant].days.length;
			}
		}
		/////////////
		
		let dayMultiplier =1;
		dayMultiplier = mounthDays/(mounthDays-daySubtractor);

		shiftModelWeek.forEach(element => {
			daysOfWorkObject[element.shift] = {days: 0};
		});
		
		let levelInput = item.querySelector('#level').value;
        workerList[workerName] = {
			workerId: id,
			name: workerName,
			level: levelInput, 
			shiftWork: [], 
			dayMultiplier: dayMultiplier,
			daysOfWork: daysOfWorkObject, 		
			daysOfWorkTotalNormal: 0,
			daysOfWorkTotalWeekEnd: 0,
			daysOfWorkTotalHoliday: 0,
			daysOfWorkTotal: 0, 
			workHours: 0, 
			especialSituation: cantEnterDays};
	});

	startShift();
}

function getRestDays(endDay,endHour,afterRest){
	let startHourRest = endHour;
	
	let totalHourRest = afterRest;
	let modifier = 0;
	let modifier2 = 0;
	if(afterRest<24){
		totalHourRest = afterRest-24;
		modifier=1;
		modifier2=24;
	}
		let amountDaysRestInt = parseInt(totalHourRest/24)+modifier;
		let amountDaysRestFloat = (totalHourRest/24)
	
	let daysRestArray = [];
	for(let w=0;w<=amountDaysRestInt;w++){
		daysRestArray.push(endDay+w);
	}
	let endHourRest = (24*(amountDaysRestFloat-amountDaysRestInt)+startHourRest)+modifier2;
	console.log('24',amountDaysRestFloat,amountDaysRestInt,startHourRest);
	console.log(`no dia ${daysRestArray[0]} começar a folga as ${startHourRest}`);
	console.log(`os dias são ${daysRestArray}`);
	console.log(`acbaa no dia ${daysRestArray.splice(-1)} as ${endHourRest}`);
	let restaData = {startHR: startHourRest, daysR: daysRestArray, endHR:endHourRest }

	return restaData;
}

function sumHour(startDay,endDay,startHour,endHour){
	let part1 = (24-startHour)-1;
	let part2 = 24*((endDay)-(startDay+1)); 
	let part3 = endHour;
	let totalHour = part1+part2+part3;
	
	return totalHour;
}