let arr = [];
arr.length = 50;
arr.fill(5, 0, 50);
console.log(arr);
//console.log(arr.fill(5, 0, 50));
let arr1 = [];
//arr.length = 50;

arr1 = Array.from({ length: 100 }, (v, i) => i);

function createRange(start, end) {
	const range = Array.from({ length: end - start + 1 }, function (item, index) {
		return index + start;
	});
	return range;
}

console.log(arr1);
// console.log(Array.isArray(arr1));
console.log(createRange(1, 100));

let newArr = arr1.slice(0, arr.length - 1);
let changeArr = newArr.splice(0, 0);
changeArr[4] = 50;
console.log(newArr);
