// //ex 1
// var b = 1;
// function someFunction(number) {
// 	function otherFunction(input) {
// 		return b;
// 	}
// 	b = 5;
// 	return otherFunction;
// }
// var firstResult = someFunction(9); // fother get number =9
// var result = firstResult(2); // sun get input=2
//console.log(result);
// 5

//ex 2

var a = 1;
function b2() {
	a = 10;
	return;
	a = () => {};
}
b2();
console.log(a);

// 1 -> a

//ex 3
// let i;
// for (i = 0; i < 3; i++) {
// 	const log = () => {
// 		console.log(i);
// 	};
// 	setTimeout(log, 100);
// }

// 3 3 3