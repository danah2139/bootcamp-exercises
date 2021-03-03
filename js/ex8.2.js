const maxCount = 1000000;

console.time('My operation'); // <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
	//Perform the operation to be measured multiple times
	let obj = {};
	obj = { item: 'a' };
	//obj.car = 'shavi';
	// obj.item;
	//delete obj.item;
}
console.timeEnd('My operation'); // <---- Stops the time

//const maxCount = 1000000;
console.time('My Mapoperation'); // <---- Starts the timer
for (let i = 0; i < maxCount; i++) {
	//Perform the operation to be measured multiple times
	let myMap = new Map();
	let item = 1;
	myMap.set(item, 'a');

	//let car = 1;
	//myMap.set(car, 'shavi');
	//myMap.delete(item);
	// myMap.get(item);
}
console.timeEnd('My Mapoperation'); // <---- Stops the time
