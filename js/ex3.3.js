function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

let r1 = percentageOfWorld1(10);
let r2 = percentageOfWorld1(120);
let r3 = percentageOfWorld1(60);

console.log(r1, r2, r3);

const percentageOfWorld2 = (population) => (population / 7900) * 100;

let r4 = percentageOfWorld2(10);
let r5 = percentageOfWorld2(120);
let r6 = percentageOfWorld2(60);

console.log(r4, r5, r6);
