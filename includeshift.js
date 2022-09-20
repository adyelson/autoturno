function includeShift(currentDay, typeOfDay, weekDay){
	shiftModelWeek = [];

	document.querySelectorAll(".shift.include").forEach((item)=>{
		let shiftName = item.querySelector('#shiftName').value;
		let shiftTag = item.querySelector('#shiftTag').value;
		let levelInput = item.querySelector('#level').value;
		let startHour = parseInt(item.querySelector('#startTime').value);		
		let minWorkers = parseInt(item.querySelector('#minWorkers').value);
		let workHours = parseInt(item.querySelector('#workHours').value);
		let restAfter = parseInt(item.querySelector('#restAfter').value);
		let shiftData = {day: currentDay, weekDay:weekDay, typeOfDay: typeOfDay, tittle: shiftName, shift: shiftTag, reqLevel: levelInput, workers:[], minWorkers: minWorkers, ch: workHours, startHour: startHour, restAfter: restAfter};
		shiftModelWeek.push(shiftData);
	});
	return(shiftModelWeek);
}
