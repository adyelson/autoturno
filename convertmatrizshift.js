function convertMatrizShift(){
    convertedShift = [];
    let dayC = [];
    headerConvertedShift= [];

    //// loop para ver todos os turnos e pegar onde tem o maior valor

    /// usar no codigo abaixo
    let sizeMonth = mounthShift.length;
    let sizeShift = mounthShift[0].length;
    let amountPerShift = [];
    let amountTotal = [];
    for(let b=0; b<sizeShift;b++){
        amountPerShift = [];
        for(let a = 0 ; a<sizeMonth;a++){
            amountPerShift.push(mounthShift[a][b].minWorkers)
        }
        amountTotal.push(Math.max.apply(Math, amountPerShift));
        
    }
    for(let w=0;w<amountTotal.length;w++){
        
            for(let a=0;a<amountTotal[w];a++){
                headerConvertedShift.push(mounthShift[0][w].shift);
                
            }
            headerConvertedShift.push(" ");
    }
    for(let c=0;c<mounthShift.length;c++){
        dayC = [];
        for(let w=0;w<amountTotal.length;w++){
            
            for(let a=0;a<amountTotal[w];a++){
                let worker = mounthShift[c][w].workers[a];
                if(worker==""){
                    dayC.push(" ");
                }else{
                    dayC.push(worker);                    
                }
                
            }
            dayC.push(" ");
        }
        convertedShift.push(dayC);
    }
    
    updateVue();

    myTimeout = setTimeout(refreshShift, 100);
    function refreshShift(){
        let listOfTittleShift = [];

        for(let p = 0; p<shiftModelWeek.length;p++){
            listOfTittleShift.push(shiftModelWeek[p].shift);
        }
        
        document.querySelectorAll(".everyshift").forEach(el=>{
            if(listOfTittleShift.includes(el.innerHTML) || el.innerHTML==''){
                el.classList.remove('especialShift');
            }else{
                el.classList.add('especialShift');
            }
    })
    }

}