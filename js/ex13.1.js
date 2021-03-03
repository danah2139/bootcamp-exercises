const listOfNeighbours = [
	['Canada', 'Mexico'],
	['Spain'],
	['Norway', 'Sweden', 'Russia'],
];

const loopNeighbours = (arr) => {
	//let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			console.log(`Neighbour: ${arr[i][j]}`);
		}
	}
	return;
};

loopNeighbours(listOfNeighbours);
