function add(i,u,w){
	//days - daysOfWork or hour - workHours
	let workArrayPos = [];	
	workerList.forEach(element => {
		workArrayPos.push(element.daysOfWork);		
	});
	let lessDays = Math.min.apply(Math, workArrayPos)  
	let arrayPos = workArrayPos.findIndex((element)=> element == lessDays);
	let workerId = workerList[arrayPos].workerId;
	workerList[arrayPos].daysOfWork++;
	workerList[arrayPos].shiftWork[i] = mounth[i][u].shift;	
	workerList[arrayPos].workHours += mounth[i][u].ch;	
	let valueReturn = {workerId, w};
	return (valueReturn);
}
