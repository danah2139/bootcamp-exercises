let people = ['Greg', 'Mary', 'Devon', 'James'];
for (let i = 0; i < people.length; i++) {
	console.log(people[i]);
}

//console.log(people.slice(1, 4));
let people1 = people.slice(1, 4);

console.log(people1);

people1 = people1.slice(0, 2);
console.log(people1);

people1 = ['Matt', ...people1];

people1 = [...people1, 'dana'];

for (let i = 0; i < people1.length; i++) {
	console.log(people1[i]);
	if (people1[i] === 'Mary') {
		break;
	}
}

console.log(people1);
let people1New = people1.slice(2, 4);
console.log(people1New);

console.log(people1.indexOf('Mary'));

console.log(people1.indexOf('Foo'));

people = [...people.slice(0, 2), 'Elizabeth', 'Artie', ...people.slice(3)];
console.log(people);
let withBob = ['Bob', ...people];
console.log(withBob);
