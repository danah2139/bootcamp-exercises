// ex 1
console.log(this);
// In this case it referring to global object.

//ex 2
const myObj = {
	name: 'Timmy',
	greet: function () {
		console.log(`Hello ${this.name}`);
	},
};
myObj.greet();
//undefined -> arrow function point to the parent
// to fix use normal function

//ex 3
const myFuncDec = function () {
	console.log(this);
};
//myFuncDec();
//In a function this refers to owner of this method, in this case global object.

// ex 4
const myFuncArrow = () => {
	console.log(this);
};
myFuncArrow();
//In arrow functions, this retains the value of the enclosing lexical context's this.
//In global code, it will be set to the global object
//return { }, Because NodeJS runs your code in a module,
//and this references the object it creates for your module's exports,

//ex 5
// document.querySelector('.element').addEventListener(() => {
// 	console.log(this);
// });
//In this case it referring to global object, because it arrow function;
