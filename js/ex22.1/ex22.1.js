let signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const response = confirm(
		`Please verify the data, Name: ${signupForm.name.value}, Email: ${
			signupForm.email.value
		}, Age: ${parseInt(signupForm.age.value)}`
	);
	if (response) {
		window.alert('congratulations you successfully sent this form');
	}
});
