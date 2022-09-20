// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// (c) Todos os direitos reservados. 2022
//
// Adyelson Felix Loureiro
//
// f3lixtech@f3lixtech.com 
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
function updateVue(){	
	shiftList.workers = 0;
	shiftList.workerList = 0;
	shiftList.definedShifts = definedShifts;

	shiftList.workers = workers;
	shiftList.workerList = workerList;
	shiftList.amountDays = mounthDays;
	shiftList.headerShift= headerShiftNormal;

	workIdshiftList.header = 0;
	workIdshiftList.shifts = 0;

	workIdshiftList.header = headerConvertedShift;
	workIdshiftList.shifts = convertedShift;
	workIdshiftList.amountDays = mounthDays;
	
	seeShiftMounth = JSON.parse(JSON.stringify(mounthShift));
	seeListOfWorkers = JSON.parse(JSON.stringify(workers));
	////////////////////////////////
	
	




	
}