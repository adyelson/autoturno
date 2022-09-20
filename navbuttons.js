let instructions = document.querySelector('.instructions');
let workerInsertAreaButton = document.querySelector('.workerInsertAreaButton');
let shiftInsertAreaButton = document.querySelector('.shiftInsertAreaButton');
let shiftAreaButton = document.querySelector('.shiftAreaButton');
let workerInsertArea = document.querySelector('.workerInsertArea');
let shiftInsertArea = document.querySelector('.shiftInsertArea');
let shiftArea = document.querySelector('.shiftArea');

shiftAreaButton.addEventListener('click',()=>{
	shiftAreaButton.classList.add('show');
	shiftArea.classList.remove('hide');
	instructions.classList.add('hide');
	workerInsertArea.classList.add('hide');
	shiftInsertArea.classList.add('hide');
	workerInsertAreaButton.classList.remove('show');
	shiftInsertAreaButton.classList.remove('show');
});

workerInsertAreaButton.addEventListener('click',()=>{
	workerInsertAreaButton.classList.add('show');
	workerInsertArea.classList.remove('hide');
	instructions.classList.add('hide');
	shiftInsertArea.classList.add('hide');
	shiftArea.classList.add('hide');
	shiftAreaButton.classList.remove('show');
	shiftInsertAreaButton.classList.remove('show');
});

shiftInsertAreaButton.addEventListener('click',()=>{
	shiftInsertAreaButton.classList.add('show');
	shiftInsertArea.classList.remove('hide');
	instructions.classList.add('hide');
	workerInsertArea.classList.add('hide');
	shiftArea.classList.add('hide');
	shiftAreaButton.classList.remove('show');
	workerInsertAreaButton.classList.remove('show');
});


