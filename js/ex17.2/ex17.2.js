const btn = document.querySelector('.btn');
const textarea = document.querySelector('textarea');
const error = document.querySelector('p');
error.style.color = 'red';
error.style.visibility = 'hidden';

function errorMessage() {
	if (textarea.value.length < 100) {
		error.style.visibility = 'visible';
	}
}

btn.addEventListener('click', errorMessage);
