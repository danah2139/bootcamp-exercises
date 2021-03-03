function greater(num) {
	return new Promise(function (resolve, reject) {
		if (num > 10) {
			resolve();
		} else {
			reject();
		}
	});
}

greater(11)
	.then(() => {
		console.log('resolve : greater than 10');
	})
	.catch(() => {
		console.log('reject : less than 10');
	});

greater(8)
	.then(() => {
		console.log('resolve : greater than 10');
	})
	.catch(() => {
		console.log('reject : less than 10');
	});
