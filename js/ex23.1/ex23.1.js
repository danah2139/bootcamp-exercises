const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
const hours = document.querySelector('#hours');

let countSec = 0;
let countMin = 0;
let countHr = 0;

setInterval(startClock, 1000);

function startClock() {
	countSec++;
	seconds.textContent = leftFillNum(countSec, 2);
	if (countSec === 59) {
		countSec = 0;
		countMin++;
		minutes.textContent = leftFillNum(countMin, 2);
	}
	if (countMin === 60) {
		countMin = 0;
		countHr++;
		minutes.textContent = leftFillNum(countMin, 2);
		hours.textContent = leftFillNum(countHr, 2);
	}
}

function leftFillNum(num, targetLength) {
	return num.toString().padStart(targetLength, 0);
}
