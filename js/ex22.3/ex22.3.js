let letter = document.querySelector('.letter');
const characters = 'abcdefghijklmnopqrstuvwxyz';
let keys = document.querySelector('.keys span');
let h3 = document.querySelector('h3');
let overview = document.querySelector('.overview_letter');
keys.textContent = '';
let randomChar = characters.charAt(
	Math.floor(Math.random() * characters.length)
);
const guessArr = [];

document.body.addEventListener('keyup', (e) => {
	console.log(e.key);
	let key = e.key;
	keys.textContent += key;
	if (key === randomChar) {
		letter.textContent = key;
		overview.textContent = 'Right letter!';
		overview.style.color = 'green';
		h3.textContent = 'Would you like to play again?';
		keys.outerHTML = '<button onclick="reset()">Yes</button>';
	} else {
		if (!guessArr.includes(key)) {
			overview.textContent = 'Nope, wrong letter';
			guessArr.push(key);
		} else {
			overview.textContent = `${key} has already been guessed!`;
		}
		overview.style.color = 'red';
	}
});

function reset() {
	window.location.reload();
}
