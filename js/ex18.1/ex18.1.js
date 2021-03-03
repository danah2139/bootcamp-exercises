const btn = document.querySelector('.btn');
const text = document.querySelector('input');
const errorMessage = document.querySelector('p');
const messageContainer = document.querySelector('.message');

errorMessage.style.color = 'red';
errorMessage.style.visibility = 'hidden';
const createSmily = () => {
	const img = document.createElement('img');
	img.src = './Smiley.svg';
	img.width = 50;
	img.height = 50;
	return img;
};

function onClick() {
	let num = Number(text.value);
	if (!num) {
		errorMessage.style.visibility = 'visible';
	} else {
		for (let i = 0; i < num; i++) {
			const img = createSmily();
			messageContainer.appendChild(img);
		}
	}
}

btn.addEventListener('click', onClick);
