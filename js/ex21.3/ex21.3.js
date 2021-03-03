const users = [
	{
		id: 167464,
		firstName: 'Jimmy',
		lastName: 'Arnold',
		email: 'jimmya@gmail.com',
	},
	{
		id: 578447,
		firstName: 'Martha',
		lastName: 'Goldman',
		email: 'gold@hotmail.com',
	},
	{
		id: 864578,
		firstName: 'Tim',
		lastName: 'Burton',
		email: 'timmy.hotmail.com',
	},
];

const list = document.createElement('ol');

users.forEach((person) => {
	const item = document.createElement('li');
	item.textContent = person.firstName + ' ' + person.lastName;
	item.setAttribute('data-id', person.id);
	list.appendChild(item);
});

list.style.listStyle = 'none';

document.body.appendChild(list);
