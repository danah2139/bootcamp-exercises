const candyStore = {
	candies: [
		{
			name: 'mint gum',
			id: 'as12f',
			price: 2,
			amount: 2,
		},
		{
			name: 'twix',
			id: '5hd7y',
			price: 5,
			amount: 4,
		},
	],
	cashRegister: 200,
};

function getCandy(candyStore, id) {
	return candyStore.candies.find((item) => item.id === id);
}

//console.log(getCandy(candyStore, '5hd7y'));

function getPrice(candyStore, id) {
	//your code

	for (let i = 0; i < candyStore.candies.length; i++) {
		if (candyStore.candies[i].id === id) {
			return candyStore.candies[i].price;
		}
	}
}

//nsole.log(getPrice(candyStore, '5hd7y'));

function addCandy(candyStore, id, name, price) {
	//your code
	candyStore.candies.push({ name, id, price, amount: 1 });
}

addCandy(candyStore, 'dana', '677cf', 65);

//console.log(candyStore);

function buy(candyStore, id) {
	let candy = candyStore.candies.find((item) => item.id == id);
	candyStore.cashRegister += candy.price;
	candy.amount -= 1;
	//return this.candyStore;
}

buy(candyStore, '5hd7y');

console.log(candyStore);
