const isLeapYear = (year) => {
	if (year % 4 == 0) {
		if (year % 100 == 0 && year % 400 != 0) {
			return false;
		} else return true;
	} else {
		return false;
	}
};

if (isLeapYear(2400)) {
	console.log('It is indeed a leap year');
} else {
	console.log('This is not a leap year.');
}
