function completeEmpty(){
	
	workers = [];
	y = mounthDays-1;

	for (let a in workerList){
		
		workers.push(a);
	};

	

	updateVue();
}