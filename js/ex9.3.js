const foods = ['falafel', 'sabich', 'hummus', 'pizza with extra pineapple'];
console.log(foods.sort());
console.log(foods.sort().reverse());

const foodsWithUpperCase = [
	'falafel',
	'Sabich',
	'hummus',
	'pizza with extra pineapple',
];

console.log(foodsWithUpperCase.sort((a, b) => a.localeCompare(b)));
console.log(foodsWithUpperCase.sort((a, b) => a.localeCompare(b)).reverse());

const words = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];

console.log(
	words.sort((a, b) => {
		return a.length < b.length ? 1 : -1;
	})
);
