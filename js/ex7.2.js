const mycountry = {
	country: 'Israel',
	capital: 'Jerusalem',
	language: 'Hebrew',
	population: 9.5,
	neighbours: ['Lebenanon', 'Syria', 'West Bank', 'Egypt', 'Jorden'],
	describe() {
		return `${this.country} has ${this.population} million people,
     their mother tongue is ${this.language}, they
    have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
	},
	checkIsland() {
		return (this.isIsland = this.neighbours.length < 1 ? true : false);
	},
};

console.log(mycountry.describe());
console.log(mycountry.checkIsland());
