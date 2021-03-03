const arr = ['1', 2, 1, 5, 4];
const doubleValues = (arr) => {
	let newArr = [];
	arr.map((element) => {
		newArr.push(element);
	});
	return newArr;
};

const onlyEvenValues = (arr) => {
	let newArr = [];
	arr.forEach((el) => {
		el % 2 === 0 ? newarr.push(el) : null;
	});
	return newArr;
};

const showFirstAndLast = (arr) => {
	let newArr = [];
	arr.forEach((el, i, arr) => {
		i === 0 || arr.length - 1 === i
			? typeof el === 'string'
				? newArr.push(el)
				: null
			: null;
	});
	return newArr;
};

let str = 'nkjnndjkjdvn njnknka hjnknkjn njnknkj';

const vowelCount = (str) => {
	const letters = {};
	str = str.replace(' ', '');
	let arr = str.split('');
	arr.forEach((letter) => {
		letters[letter] = letters[letter] + 1 || 1;
	});

	return letters;
};

//console.log(vowelCount(str));

const capitalizeStr = (str) => {
	//str = str.replace(' ', '');
	let arr = str.split('');
	arr = arr.map((letter) => {
		return letter.toUpperCase();
	});
	str = arr.join('');
	return str;
};

//console.log(capitalizeStr(str));

const CaesarCipher = (str) => {
	// you can comment this line
	str = str.toLowerCase();
	let arr = str.split('');
	var result = '';
	var charcode = 0;

	arr.forEach((element) => {
		charcode = element.charCodeAt() + 1; // move to asci
		result += String.fromCharCode(charcode); // move to string
	});
	return result;
};
//console.log(CaesarCipher('abcde'));

const swapCase = (str) => {
	let arr = str.split(' ');
	arr = arr.map((element, i) => {
		return i % 2 === 0 ? capitalizeStr(element) : element;
	});
	return arr.join(' ');
};

console.log(swapCase(str));
