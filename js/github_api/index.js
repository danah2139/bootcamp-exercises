const form = document.getElementById('form');
const baseEndpoint = `https://api.github.com/users/`;
const inputUser = document.querySelector('[type="text"]');
const btn = document.querySelector('[type="submit"]');
const container = document.querySelector('.container');
//let card = document.createElement('div');
let userNameArr = [];

let githubUserName = '';
async function getData(githubUserName) {
	try {
		const response = await fetch(baseEndpoint + githubUserName);
		if (response.status !== 200) {
			throw 'not found';
		}
		const data = await response.json();
		displayCard(data);
	} catch (e) {
		console.log(e);
	}
}

function displayCard(data) {
	let card = document.createElement('div');
	card.classList.add('card');
	let imgData = data.avatar_url;
	let githubLink = data.html_url;
	let repos = data.public_repos;
	let img = document.createElement('img');
	img.src = imgData;
	let link = document.createElement('a');
	link.href = githubLink;
	link.appendChild(img);
	card.appendChild(link);
	let userNameTitle = document.createElement('a');
	userNameTitle.href = githubLink;
	userNameTitle.textContent = githubUserName;
	card.appendChild(userNameTitle);
	let reposTitle = document.createElement('a');
	reposTitle.href = githubLink;
	reposTitle.textContent = repos;
	card.appendChild(reposTitle);
	container.appendChild(card);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	githubUserName = inputUser.value;
	if (githubUserName !== '' && !userNameArr.includes(githubUserName)) {
		userNameArr.push(githubUserName);
		getData(githubUserName);
	}
	inputUser.value = '';
});

// inputUser.addEventListener('keyup', function (e) {
// 	if (e.keyCode == 13) {
// 		e.preventDefault();
// 		//console.log('click');
// 		btn.click();
// 		// 	console.log(inputUser);
// 		// 	githubUserName = inputUser.value;
// 	}
// });

// btn.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	console.log(inputUser.value);
// 	githubUserName = inputUser.value;
// });
