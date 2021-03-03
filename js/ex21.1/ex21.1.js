let div = document.querySelector('div');
let btn = document.querySelector('button');
let input = document.querySelector('input');
let text = document.createElement('p');
div.appendChild(text);
text.style.color = 'red';
const handleInput = (e) => {
	text.textContent =
		input.value > 18 ? 'you can drink appear' : 'you’re too young';
};

btn.addEventListener('click', handleInput);
