function getDaysInMonth(year, month) {
	return new Date(year, month, 0).getDate();
  }
function isWeekend(date = new Date()) {
	return date.getDay() === 6 || date.getDay() === 0;
}
function setDays(){
	headerShiftNormal = [];
	let dataInputMonth = (document.querySelector('.qtdDiasMes').value);
	mounthDays = getDaysInMonth(dataInputMonth.split('-')[0],dataInputMonth.split('-')[1])

	

	let today = new Date(dataInputMonth+'-'+1);

	
	for (let a=0; a<mounthDays;a++){
		today.setDate(a+1)

		
		if(isWeekend(today)){
			typeOfDay = 'weekend';
		}else{
			typeOfDay = 'normal';
		}
		
		
		
		mounth[a] = includeShift(today.getDate(),typeOfDay,today.getDay())
		
	}

	for(let z=0; z<mounth.length;z++){
		headerShiftNormal.push(mounth[z][0].typeOfDay);
	}

	includeWorkers();
}