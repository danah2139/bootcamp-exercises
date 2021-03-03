function calcCircle(radius) {
	let calc = 2 * Math.PI * radius;
	console.log(calc);
	calc = Math.round(calc).toFixed(2);
	return calc;
}
console.log(calcCircle(2));
