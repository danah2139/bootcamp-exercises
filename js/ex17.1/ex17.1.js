const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const text = document.querySelector('p');
let fontSize = window.getComputedStyle(text).fontSize;
function increaseFont() {
	fontSize = `${parseInt(fontSize) + 20}px`;
	text.style.fontSize = fontSize;
}
function decreaseFont() {
	fontSize = `${parseInt(fontSize) - 20}px`;
	text.style.fontSize = fontSize;
}

plusBtn.addEventListener('click', increaseFont);
minusBtn.addEventListener('click', decreaseFont);
