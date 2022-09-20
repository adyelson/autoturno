let indexLane = 0;
let indexLaneShift = 0;
let workerList = {};
let mounth = [];
let convertedShift = [];
let headerConvertedShift = [];
let workers = [];
let headerShiftNormal = [];
let shiftList = new Vue({
	el:'#shiftList', 
	data:{
		workers: workers, //array
		workerList: workerList,//obj objt
		amountDays: 0,
		headerShift: headerShiftNormal
	}
});
let mounthShift= [];
let workIdshiftList = new Vue({
	el:'#workIdshiftList', 
	data:{
		shifts: convertedShift,
		header: headerConvertedShift,
		amountDays: 0
		
		
	}
});
let seeListOfWorkers = 0;
let seeShiftMounth = 0;
let specialSituation = [{type: 'dayoff', legend: '', startData: '', endData: '', free: false, plus: 0},]
let shiftModelWeek = [];

