const 
			titulo = document.querySelector('title'),
			tempo = document.querySelector('.tempo'),
			iniciar = document.querySelector('.iniciar'),
			pausar = document.querySelector('.pausar'),
			resetar = document.querySelector('.resetar');

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
resetar.addEventListener('click', resetarTempo)

let timer;
let seg = 0;
let min = 0;
let hor = 0;

function iniciarTempo(){
	iniciar.setAttribute('disabled', '');
	timer = setInterval(() => {
		if(seg === 59) {
			seg = 0;
			min += 1;
		}
		else if(min === 59){
			seg = 0;
			min = 0;
			hor += 1;
		}

		const cron = `${hor}:${min}:${seg++}`;
		tempo.innerText = cron;
		titulo.innerText = cron;
	},1000);
}

function pausarTempo(){
	iniciar.removeAttribute('disabled');
	clearInterval(timer);
}
function resetarTempo(){
	location.reload();
}