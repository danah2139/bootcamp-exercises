function countOccurrences(str, char) {
	let counter = 0;
	// debugger;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === char) {
			counter++;
		}
	}
	return counter;
}
countOccurrences('ini mini miny moe', 'n');
