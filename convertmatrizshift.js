function convertMatrizShift(){
    convertedShift = [];
    let dayC = [];
    headerConvertedShift= [];

    /// cabecalho turnos
    mounthShift[0].forEach(el=>{
            for(let a=0;a<el.minWorkers;a++){
                headerConvertedShift.push(el.shift);
            }
            headerConvertedShift.push(" ");
        
        })
    

    for(w=0;w<mounthShift.length;w++){
        dayC = []
        mounthShift[w].forEach(shift=>{
           // for(let a=0;a<el.minWorkers;a++){ para permitir vaga vazia
            (shift.workers).forEach(worker =>{
                dayC.push(worker);
            })          
            dayC.push("  ");
        })
        convertedShift.push(dayC);
    }
    updateVue();
}