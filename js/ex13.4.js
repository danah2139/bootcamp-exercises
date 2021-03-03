// const steps = (n) => {
// 	let trim = ' ';
// 	let hashtag = '#';

// 	for (let i = 1; i <= n; i++) {
// 		console.log("'" + hashtag.repeat(i) + trim.repeat(n - i) + "'");
// 	}
// 	return;
// };

// steps(3);

// const ninja = (n) => {
// 	for (let i = 1; i <= n; i++) {
// 		let step = "'";
// 		for (let j = 0; j < n; j++) {
// 			if (j < i) {
// 				step += '#';
// 			} else {
// 				step += ' ';
// 			}
// 		}
// 		step += "'";
// 		console.log(step);
// 	}
// };
let step = '';
const steps = (n) => {
	if (n == 1) {
		return;
	}
	step += '#';
	let loop = steps(n - 1) + steps(n - 1);
	step += '!';
	console.log(step);

	//console.log(step);
	//console.log('!');
	step = '';

	//steps(n - 1);

	//return step;
};

steps(4);
