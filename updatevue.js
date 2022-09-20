function updateVue(){	
	shiftList.workers = 0;
	shiftList.workerList = 0;
	shiftList.workers = workers;
	shiftList.workerList = workerList;
	shiftList.amountDays = mounthDays;
	
	workIdshiftList.shifts = mounthShift;
	workIdshiftList.amountDays = mounthDays;
	seeShiftMounth = JSON.parse(JSON.stringify(mounthShift));
	seeListOfWorkers = JSON.parse(JSON.stringify(workers));
}