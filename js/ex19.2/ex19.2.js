let div = document.querySelector('div');
div.style.border = '1px black solid';
div.style.padding = '30px';
div.style.height = '200px';
div.style.width = '400px';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'space-between';
div.style.justifyItems = 'center';
let inputRow = document.querySelector('.input-row');
inputRow.style.display = 'flex';
inputRow.style.justifyContent = 'space-between';
let btn = document.querySelector('button');
let text = document.querySelector('p');
btn.style.color = 'white';
btn.style.backgroundColor = 'black';
btn.style.padding = '5px 20px';
const inputs = document.querySelectorAll('input');
let input1 = document.querySelector('[data-one]');
let input2 = document.querySelector('[data-two]');
let input3 = document.querySelector('[data-three]');
let input4 = document.querySelector('[data-four]');
let input5 = document.querySelector('[data-five]');
let input6 = document.querySelector('[data-six]');
input1.style.width = '40px';
input1.style.height = '50px';
input2.style.width = '40px';
input3.style.width = '40px';
input4.style.width = '40px';
input5.style.width = '40px';
input6.style.width = '40px';
const handlePaste = (e) => {
	let paste = e.clipboardData.getData('text');
	inputs.forEach((input, index) => {
		input.value = paste[index] || '';
	});
	inputs[paste.length - 1].focus();
};
input1.addEventListener('paste', handlePaste);
const handleInput = (e) => {
	let input = e.target;
	if (input.value && input.nextElementSibling) {
		e.target.nextElementSibling.focus();
	}
	if (inputs[inputs.length - 1].value) {
		btn.click();
	}
};
for (let index = 0; index < inputs.length; index++) {
	inputs[index].addEventListener('input', handleInput);
}
// btn.addEventListener('click', checkForVerify);
// function checkForVerify() {
// 	let str =
// 		input1.value +
// 		input2.value +
// 		input3.value +
// 		input4.value +
// 		input5.value +
// 		input6.value;
// 	if (text.textContent === str) {
// 		return true;
// 	}

// 	console.log(str);
// }
