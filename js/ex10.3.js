const data = [
	{
		name: 'John',
		birthday: '1-1-1995',
		favoriteFoods: {
			meats: ['hamburgers', 'sausages'],
			fish: ['salmon', 'pike'],
		},
	},
	{
		name: 'Mark',
		birthday: '10-5-1980',
		favoriteFoods: {
			meats: ['hamburgers', 'steak', 'lamb'],
			fish: ['tuna', 'salmon', 'barracuda'],
		},
	},
	{
		name: 'Mary',
		birthday: '1-10-1977',
		favoriteFoods: {
			meats: ['ham', 'chicken'],
			fish: ['pike'],
		},
	},
	{
		name: 'Thomas',
		birthday: '1-10-1990',
		favoriteFoods: {
			meats: ['bird', 'rooster'],
			fish: ['salmon'],
		},
	},
	{
		name: 'Mary',
		birthday: '1-10-1977',
		favoriteFoods: {
			meats: ['hamburgers', 'lamb'],
			fish: ['anchovies', 'tuna'],
		},
	},
];

const arrOfName = (data) => {
	let arrName = [];
	arrName = data.map((element) => {
		return element.name;
	});
	return arrName;
};

const ageOfData = (date) => {
	let newArr = [];
	data.map((element) => {
		let [day, month, year] = element.birthday.split('-');
		year < 1990 ? newArr.push(element) : null;
	});
	return newArr;
};

console.log(ageOfData(data));

const foods = (data) => {
	strFoods = '';

	data.foreach((element) => {
		let obj = {};
		element.favoriteFoods.meats.foreach((meatFoods) => {
			obj[meatFoods] = obj[meatFoods] + 1 || 1;
		});
		element.favoriteFoods.fish.foreach((fishFoods) => {
			obj[fishFoods] = obj[fishFoods] + 1 || 1;
		});

		return obj;
	});
};
