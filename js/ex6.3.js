const newArray = (arr) => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr = [...newArr, arr[i].length];
	}
	return newArr;
};

console.log(newArray(['boo', 'doooo', 'hoo', 'ro']));
