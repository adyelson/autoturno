let form = document.querySelector('#upload');
let file = document.querySelector('#file');
form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
	// Stop the form from reloading the page
	event.preventDefault();
	// If there's no file, do nothing
	if (!file.value.length) return;
	// Create a new FileReader() object
	let reader = new FileReader();
	// Setup the callback event to run when the file is read
	reader.onload = logFile;
	// Read the file
	reader.readAsText(file.files[0]);

}

function logFile (event) {
	let str = event.target.result;
	let json = JSON.parse(str);
    document.querySelectorAll('.buttonRemove').forEach((e)=>{e.click()})
  

	refreshData(json);
}

function refreshData(json){
    
    let workersData = json.woker;
    let shiftsData = json.shift;
       
    for (let i = 0; i<workersData.length;i++){
        
        
        let idR = workersData[i].workerId;
        let nameR = workersData[i].name;
        let levelR = workersData[i].level;
        let especialSituationR = workersData[i].especialSituation;

        let workerInputLane = document.querySelector('.worker').cloneNode(true);
        workerInputLane.setAttribute('id',idR);	
        workerInputLane.querySelector('#id').value = idR;
        workerInputLane.classList.add('include');	

        workerInputLane.querySelector('#level').value = levelR;
        workerInputLane.querySelector('#worker').value = nameR;

        workerInputLane.querySelector('.buttonRemove').addEventListener('click', ()=>{
        	workerInputLane.remove();
        	indexLane--;
        	document.querySelector('.countWorker').innerHTML = indexLane;	
        });

        workerInputLane.querySelector('.buttonPlus').addEventListener('click', ()=>{
        	let conditionInputLane = workerInputLane.querySelector('.condition').cloneNode(true);
        	conditionInputLane.classList.add('include');
        	workerInputLane.querySelector('.especialSituation').append(conditionInputLane);
        	conditionInputLane.querySelector('.buttonRemoveCondition').addEventListener('click',()=>{
        		conditionInputLane.remove();
        	})
        });
        for(let c=0; c<especialSituationR.length;c++){
            
            let conditionInputLane = workerInputLane.querySelector('.condition').cloneNode(true);

            let signalR = especialSituationR[c].signal;
            let startDayR = parseInt(especialSituationR[c].days[0])+1;
            let endDayR = parseInt(especialSituationR[c].days.slice(-1))+1;

            let endHourR = parseInt(especialSituationR[c].hourEnd);
            let startHourR = parseInt(especialSituationR[c].hourStart);
            let afterRestR = parseInt(especialSituationR[c].afterRest);
         
            conditionInputLane.querySelector('.dayStart').value = startDayR;
            conditionInputLane.querySelector('.dayEnd').value = endDayR;
            conditionInputLane.querySelector('.signal').value = signalR;
            conditionInputLane.querySelector('.hourEnd').value = endHourR;
            conditionInputLane.querySelector('.hourStart').value = startHourR;
            conditionInputLane.querySelector('.restAfterSpecial').value = afterRestR;

        	conditionInputLane.classList.add('include');

        	workerInputLane.querySelector('.especialSituation').append(conditionInputLane);

        	conditionInputLane.querySelector('.buttonRemoveCondition').addEventListener('click',()=>{
        		conditionInputLane.remove();
            });
        }
        document.querySelector('.workers').append(workerInputLane);
    }
    indexLane = workersData.length+indexLane;
    document.querySelector('.countWorker').innerHTML = indexLane;



    indexLaneShift++
    for(let w=0;w<shiftsData.length;w++){
        
        let tittleR = shiftsData[w].tittle;
        let shiftR = shiftsData[w].shift;
        let reqLevelR = shiftsData[w].reqLevel;
        let minWorkersR = shiftsData[w].minWorkers;
        let chR = shiftsData[w].ch;
        let restAfterR = shiftsData[w].restAfter;
        let startHourR = shiftsData[w].startHour;

        let shiftInputLane = document.querySelector('.shift').cloneNode(true);
        shiftInputLane.setAttribute('id',indexLaneShift);	
        shiftInputLane.querySelector('#shiftName').value = tittleR;
        shiftInputLane.querySelector('#shiftTag').value = shiftR;
        shiftInputLane.querySelector('#level').value = reqLevelR;
        shiftInputLane.querySelector('#minWorkers').value = minWorkersR;
        shiftInputLane.querySelector('#workHours').value = chR;
        shiftInputLane.querySelector('#startTime').value = startHourR;
        shiftInputLane.querySelector('#restAfter').value = restAfterR;


        shiftInputLane.classList.add('include');	
        shiftInputLane.querySelector('.buttonRemove').addEventListener('click', ()=>{		
            shiftInputLane.remove();
            indexLaneShift--;		
        })
        document.querySelector('.shifts').append(shiftInputLane);
    }
    indexLaneShift = shiftsData.length;
 
    alert('Dados inseridos com sucesso!')
    file.value = '';
}