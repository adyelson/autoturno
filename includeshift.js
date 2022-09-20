function includeShift(){
	shiftModelWeek = [];
	document.querySelectorAll(".shift.include").forEach((item)=>{
		let shiftName = item.querySelector('#shiftName').value;
		let shiftTag = item.querySelector('#shiftTag').value;
		let levelInput = item.querySelector('#level').value;
		let minWorkers = parseInt(item.querySelector('#minWorkers').value);
		let workHours = parseInt(item.querySelector('#workHours').value);
		let shiftData = {tittle: shiftName, shift: shiftTag, reqLevel: levelInput, workers:[], minWorkers: minWorkers, ch: workHours};
		shiftModelWeek.push(shiftData);
	});
	setDays();
}
