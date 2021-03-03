let checkboxInput = document.querySelector('input');
let photo = document.querySelector('img');
photo.style.width = '200px';
photo.style.height = '200px';
photo.style.objectFit = 'cover';
photo.style.visibility = 'hidden';

checkboxInput.addEventListener('change', (e) => {
	if (e.currentTarget.checked) {
		photo.style.visibility = 'visible';
	} else {
		photo.style.visibility = 'hidden';
	}
});
