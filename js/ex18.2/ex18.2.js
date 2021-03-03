const myDiv = document.createElement('div');
const text = document.createElement('p');
text.textContent = 'hello Everyone My Name is Dana!';
text.style.color = 'red';
document.body.insertAdjacentElement('afterbegin', myDiv);
myDiv.appendChild(text);
