///atulizar com metodo novo
function includeWorkers(){
	
	workerList = []
	document.querySelectorAll(".worker.include").forEach((item)=>{
		/////// ---------- rever errro
		let cantEnterDays = [];

		item.querySelectorAll(".condition.include").forEach((condition)=>{
			let startDay = parseInt(condition.querySelector('.dayStart').value)-1;		
			let endDay = parseInt(condition.querySelector('.dayEnd').value);
			let signalToPut = condition.querySelector('.signal').value;
			let daysToPut = [];
			console.log(startDay, endDay, signalToPut)
			for(let t=startDay;t<endDay;t++){
				daysToPut.push(t);
			}
			
			let conditionToAppend = {signal: signalToPut,days: daysToPut};

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
		// let dayMultiplier = mounthDays/(mounthDays-daySubtractor);


		let levelInput = item.querySelector('#level').value;
        workerList[workerName] = {workerId: id, name: workerName, level: levelInput, shiftWork: [], dayMultiplier: dayMultiplier,  daysOfWork: 0, workHours: 0, especialSituation: cantEnterDays};
	});
	startShift();
}
