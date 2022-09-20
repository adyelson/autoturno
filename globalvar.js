let indexLane = 0;
let indexLaneShift = 0;
let workerList = {};
let mounth = [];
let workers = [];
let shiftList = new Vue({
	el:'#shiftList', 
	data:{
		workers: workers, 
		workerList: workerList,
		amountDays: 0
	}
});
let mounthShift= [];
let workIdshiftList = new Vue({
	el:'#workIdshiftList', 
	data:{
		shifts: mounthShift, 
		amountDays: 0
	}
});
let seeListOfWorkers = 0;
let seeShiftMounth = 0;
let specialSituation = [{type: 'dayoff', legend: '', startData: '', endData: '', free: false, plus: 0},]
let shiftModelWeek = [];

