///atulizar com metodo novo
function includeWorkers(){
	
	workerList = []
	document.querySelectorAll(".worker.include").forEach((item)=>{
		let cantEnterDays = [{
			signal: '-',
			days: []
		}];
		
		let id = item.querySelector('#id').value;
		let workerName = item.querySelector('#worker').value;		
		if(workerName=='Felix'){
			cantEnterDays = [{
				signal: 'SJC',
				days: [8,9,10]
			},{
				signal: 'GW',
				days: [15,16,17,18]
			}];

		}

		let daySubtractor = 0;

		for (let cant=0; cant<cantEnterDays.length;cant++){
			daySubtractor+= cantEnterDays[cant].days.length;
		}

		

		let dayMultiplier = mounthDays/(mounthDays-daySubtractor);


		let levelInput = item.querySelector('#level').value;
        workerList[workerName] = {workerId: id, name: workerName, level: levelInput, shiftWork: [], dayMultiplier: dayMultiplier,  daysOfWork: 0, workHours: 0, especialSituation: cantEnterDays};
	});
	startShift();
}
