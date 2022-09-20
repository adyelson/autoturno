function getDaysInMonth(year, month) {
	return new Date(year, month, 0).getDate();
  }

function checkTypeOfDay(date = new Date()){

	let holidays = [];
	if(holidays.includes(date.getDate())){
		return 'Holiday'
	}else{

		if(date.getDay() === 0){
			return 'Sunday'
		}
		if(date.getDay() === 6){
			return 'Saturday'
		}
		if(date.getDay() === 5){
			return 'Friday'
		}
		if(date.getDay() !== 6 || date.getDay() !== 0 || date.getDay() !== 5){
			return 'Normal'
		}
	}

}

function setDays(){
	headerShiftNormal = [];
	let dataInputMonth = (document.querySelector('.qtdDiasMes').value);
	mounthDays = getDaysInMonth(dataInputMonth.split('-')[0],dataInputMonth.split('-')[1])

	

	let today = new Date(dataInputMonth+'-'+1);

	
	for (let a=0; a<mounthDays;a++){
		today.setDate(a+1);
		typeOfDay = checkTypeOfDay(today);
		mounth[a] = includeShift(today.getDate(),typeOfDay,today.getDay())
		
	}

	for(let z=0; z<mounth.length;z++){
		headerShiftNormal.push(mounth[z][0].typeOfDay);
	}
	
	includeWorkers();
}