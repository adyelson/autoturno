///atulizar com metodo novo
function includeWorkers(){
	workerList = []
	document.querySelectorAll(".worker.include").forEach((item)=>{
		let id = item.querySelector('#id').value;
		let workerName = item.querySelector('#worker').value;		
		let levelInput = item.querySelector('#level').value;
		let workerData = {workerId: id, name: workerName, level: levelInput, shiftWork: [], daysOfWork: 0, workHours: 0, especialSituation: []};
		workerList.push(workerData);
	});
	includeShift();
}
