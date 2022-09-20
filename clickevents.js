document.querySelector('.escalarButton').addEventListener('click',()=>{
	includeShift();
});

document.querySelector('.buttonAddWorker').addEventListener('click', ()=>{
	indexLane++;
	document.querySelector('.countWorker').innerHTML = indexLane;
	let workerInputLane = document.querySelector('.worker').cloneNode(true);
	workerInputLane.setAttribute('id',indexLane);	
	workerInputLane.querySelector('#id').value = indexLane;
	workerInputLane.classList.add('include');	
	workerInputLane.querySelector('.buttonRemove').addEventListener('click', ()=>{
		workerInputLane.remove();
		indexLane--;
		document.querySelector('.countWorker').innerHTML = indexLane;	
	});
	document.querySelector('.workers').append(workerInputLane);
});

document.querySelector('.buttonAddShift').addEventListener('click', ()=>{
	indexLaneShift++
	let shiftInputLane = document.querySelector('.shift').cloneNode(true);
	shiftInputLane.setAttribute('id',indexLaneShift);	
	shiftInputLane.classList.add('include');	
	shiftInputLane.querySelector('.buttonRemove').addEventListener('click', ()=>{		
		shiftInputLane.remove();
		indexLaneShift--;		
	})
	document.querySelector('.shifts').append(shiftInputLane);
});