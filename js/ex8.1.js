let obj1 = {
	name: 'a',
};

let obj2 = { name: 'b' };
let obj3 = {
	name: 'c',
};

let myMap = new Map();

myMap.set(obj1, '1');
myMap.set(obj2, '2');
myMap.set(obj3, '3');

for (let [item, id] of myMap) {
	console.log(item.name, id);
}
