function boom(n) {
	let arr = [];
	for (var i = 1; i <= n; i++) {
		if (i % 7 == 0) {
			arr.push(i);
			if (arr.includes(7)) {
				console.log('BOOM-BOOM');
				arr.pop(i);
			} else {
				console.log('BOOM');
			}
		} else {
			console.log(i);
		}
	}
	return;
}

boom(18);
