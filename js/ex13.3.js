const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];

const compareStrings = (arr1, arr2) => {
	let arr = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			//console.log(arr[i],arr[j])
			if (arr1[i] === arr2[j]) {
				arr.push(arr1[i]);
			}
		}
	}
	return arr;
};

console.log(compareStrings(food, food1));
