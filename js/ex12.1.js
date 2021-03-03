const arr = [3, 5, 7, 3, 10, 3, 6];
const max = (arr) => {
	let newArr = arr.reduce((maxNum, currentValue) => {
		return maxNum < currentValue ? currentValue : maxNum;
	});
	return newArr;
};

const sumOfEvenNumbers = (arr) => {
	return arr.reduce((accumulator, currentValue) => {
		return currentValue % 2 === 0 ? accumulator + currentValue : accumulator;
	}, 0);
};

const average = (arr) => {
	return arr.reduce((accumulator, currentValue) => {
		return currentValue / arr.length + accumulator;
	}, 0);
};

console.log(average(arr));
