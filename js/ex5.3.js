const pValidation = (password) => {
	if (password.length > 7) {
		return 'Strong';
	} else {
		return 'Weak';
	}
};

const pValidation1 = (password) => {
	return password.length > 7 ? 'Strong' : 'Weak';
};

const pValidation3 = (password) => {
	let r = (password.length > 7 && 'Strong') || 'Week';
	return r;
};

const pValidation2 = (password) => {
	return (password.length > 7 && 'Strong') || 'Week';
};

// console.log(pValidation3('njknjknj7'));

const advanced = (password) => {
	if (password.length > 7 && password[0] == password[0].toUpperCase()) {
		return 'Very Strong ';
	}

	return (password.length > 7 && 'Strong') || 'Week';
};
console.log(pValidation2('Njj7'));
