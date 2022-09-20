

let listaEscala = new Vue({
    el:'#listaEscala',
    data:{
    nomes: nomes,
		qtdDias: diasMes
    }
});

let listaEfetivo = JSON.parse(JSON.stringify(nomes));