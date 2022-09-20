function completeEmpty(){
	workers.data = workerList;
	y = mounthDays-1;
	for(let b=0;b<workers.data.length;b++){
			if(!workers.data[b].shiftWork[y]){
				workers.data[b].shiftWork[y] = '';
		}
	}
	updateVue()
}