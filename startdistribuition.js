function startShift(){
    mounthShift = [];    
    for (let i=0; i<mounthDays;i++){
        let actualDay = [];
        for (let u=0; u < mounth[i].length; u++){    
            let reqLevel = mounth[i][u].reqLevel;    
            let shiftWorks = [];		
            for (let w = 0; w < mounth[i][u].minWorkers; w++){				
                valueReturn = add(i,u,w,reqLevel);
                w = valueReturn.w;
                shiftWorks.push(valueReturn.workerId); 
            }	
            let shiftObject = {
                dia: i+1,
                shift: mounth[i][u].shift,
                minWorkers:mounth[i][u].minWorkers,
                workers: shiftWorks
            }    
            actualDay.push(shiftObject);
        }
        mounthShift.push(actualDay);
    }    
    completeEmpty();
}