const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];

const countLetter = (arr) => {
	const obj = {};

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] !== ' ') {
				obj[arr[i][j].toLowerCase()] = 0;
			}
		}
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] !== ' ') {
				obj[arr[i][j].toLowerCase()] += 1;
			}
		}
	}
	return obj;
};

console.log(countLetter(array));
