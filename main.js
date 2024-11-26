const elRed = document.querySelector('.red');
const elYellow = document.querySelector('.yellow');
const elGreen = document.querySelector('.green');

function red (){
  elRed.classList.add('active');
	elYellow.classList.remove('active');
	elGreen.classList.remove('active');
}

function yellow(){
  elRed.classList.remove('active');
	elYellow.classList.add('active');
	elGreen.classList.remove('active');
}

function green(){
  elGreen.classList.add('active');
	elYellow.classList.remove('active');
	elRed.classList.remove('active');
}

setInterval(() => {
	setTimeout(() => {
    red();
	}, 0);

	setTimeout(() =>{
    yellow();
	}, 2000);

	setTimeout(() => {
    green()
	}, 4000);
}, 7000);
