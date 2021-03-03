const callBack = (str) => {
	console.log(str);
};
const isString = (str, callBack) => {
	if (typeof str === 'string') {
		callBack(str);
	}
};

const dashesBetween = (str) => {
	str = str.split(' ').join('-');
	return str;
};

const lowerCaseStr = (str) => {
	str = str.toLowerCase();
	return str;
};

const firstWordUpperCase = (str, callBack) => {
	str = str.split(' ');
	str[0] = str[0].toUpperCase();
	str = str.join(' ');
	str = callBack(str);
	return str;
};

console.log(firstWordUpperCase('njknjkn jnjnjn njkn', dashesBetween));
console.log(firstWordUpperCase('njknjkn jnjnjn njkn', lowerCaseStr));

const dubleOne = (x) => x + x;
const dubleAll = (arr, callBack) => {
	return arr.map(callBack);
};
console.log(dubleAll([1, 2, 3, 4], dubleOne));
