///atulizar com metodo novo
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

			let daysToPut = [];
			for(let t=startDay;t<endDay;t++){
				daysToPut.push(t);
			}
			
			let conditionToAppend = {signal: signalToPut,days: daysToPut,afterRest:afterRest,	 hourEnd: endHour, hourStart: startHour};

			cantEnterDays.push(conditionToAppend);
		});
		/////// ---------- rever errro

		
		let id = item.querySelector('#id').value;
		let workerName = item.querySelector('#worker').value;	
		
		/////////////
		

		let daySubtractor = 0;

		for (let cant=0; cant<cantEnterDays.length;cant++){
			daySubtractor+= cantEnterDays[cant].days.length;
		}
		/////////////
		
		let dayMultiplier =1;
		//dayMultiplier = mounthDays/(mounthDays-daySubtractor);

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
