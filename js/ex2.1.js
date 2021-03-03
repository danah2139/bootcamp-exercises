function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
let str1 = describeCountry('Finland', '6 million', 'Helsinki');
console.log(str1);
let str2 = describeCountry('France', '120 million', 'Paris');
console.log(str2);
let str3 = describeCountry('Israel', '10 million', 'Jerusalem');
console.log(str3);
