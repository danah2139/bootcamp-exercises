const exam = (score) => {
	if (score == 0 || score < 65) {
		return 'F';
	} else if (score < 70) {
		return 'D';
	} else if (score < 80) {
		return 'C';
	} else if (score < 90) {
		return 'B';
	} else if (score < 100) {
		return 'A';
	} else {
		return 'not in the range';
	}
};

console.log(exam(101));
