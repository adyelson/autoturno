function exportData(){
    
	exportShiftModelWeek = [];
	document.querySelectorAll(".shift.include").forEach((item)=>{
		let shiftName = item.querySelector('#shiftName').value;
		let shiftTag = item.querySelector('#shiftTag').value;
		let levelInput = item.querySelector('#level').value;
		let minWorkers = parseInt(item.querySelector('#minWorkers').value);
		let workHours = parseInt(item.querySelector('#workHours').value);
		let shiftData = {tittle: shiftName, shift: shiftTag, reqLevel: levelInput, workers:[], minWorkers: minWorkers, ch: workHours};
		exportShiftModelWeek.push(shiftData);
	});

    exportWorkerList = []
	document.querySelectorAll(".worker.include").forEach((item)=>{
		/////// ---------- rever errro
		let cantEnterDays = [];

		item.querySelectorAll(".condition.include").forEach((condition)=>{
			let startDay = parseInt(condition.querySelector('.dayStart').value)-1;		
			let endDay = parseInt(condition.querySelector('.dayEnd').value);
			let signalToPut = condition.querySelector('.signal').value;
			let hourStart = parseInt(condition.querySelector('.hourStart').value);		
			let hourEnd = parseInt(condition.querySelector('.hourEnd').value);
			let afterRest = parseInt(condition.querySelector('.restAfterSpecial').value);
			
			let daysToPut = [];
			
			for(let t=startDay;t<endDay;t++){
				daysToPut.push(t);
			}
			
			let conditionToAppend = {signal: signalToPut,days: daysToPut, afterRest:afterRest, hourEnd: hourEnd, hourStart: hourStart};

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
        exportWorkerList.push({workerId: id, name: workerName, level: levelInput, shiftWork: [], dayMultiplier: dayMultiplier,  daysOfWork: 0, workHours: 0, especialSituation: cantEnterDays});
	});

    let json = {woker: exportWorkerList, shift: exportShiftModelWeek }

   let dataStr = JSON.stringify(json);
   let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
   let exportFileDefaultName = 'data';
   let linkElement = document.createElement('a');
   linkElement.setAttribute('href', dataUri);
   linkElement.setAttribute('download', exportFileDefaultName);
   linkElement.click();
}