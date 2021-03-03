const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let total1 = average(89, 120, 103);
let total2 = average(116, 94, 123);

const result = (total1, total2) => {
	if (total1 > total2) {
		console.log('team1 win!');
	} else if (total2 > total1) {
		console.log('team2 win!');
	} else {
		console.log('its a draw!');
	}
	return;
};
result(total1, total2);

total1 = average(70, 120, 103);
total2 = average(116, 60, 110);

result(total1, total2);

let total3 = average(97, 134, 105);

const resultWith3Elemnts = (total1, total2, total3) => {
	if (total1 > total2 && total1 > total3) {
		console.log('team1 win!');
	} else if (total2 > total1 && total2 > total3) {
		console.log('team2 win!');
	} else if (total3 > total2 && total3 > total1) {
		console.log('team3 win!');
	} else {
		console.log('its a draw!');
	}
	return;
};

resultWith3Elemnts(total1, total2, total3);

total1 = average(70, 160, 120);
resultWith3Elemnts(total1, total2, total3);
