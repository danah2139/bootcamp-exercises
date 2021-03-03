function makeAllCaps(words) {
	return new Promise((resolve) => {
		resolve(words.map((word) => word.toUpperCase()));
	});
}

function sortWords(words) {
	return new Promise((resolve, reject) => {
		let result = words.filter((word) => typeof word === 'string');
		if (result.length === words.length) {
			resolve(words.sort());
		} else {
			reject('error -> not all words string');
		}
	});
}
makeAllCaps(['hi', 'hello', 'bye']).then((words) => console.log(words));

sortWords(['hi', 3, 'bye'])
	.then((words) => console.log(words))
	.catch((err) => console.error(err));
