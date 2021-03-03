const hero = {
	health: 5,
	power: 68,
	getStrength: function () {
		if (this.health <= 5) {
			return this.power - 10;
		} else return this.power;
	},
};
function whoIsStronger(getStrength) {
	const myStrength = 82;
	//console.log(getStrength());
	if (getStrength() < myStrength) {
		return 'I am stronger';
	} else return 'You are stronger';
}

let test = hero.getStrength.bind(hero);
//console.log(typeof test);
console.log(whoIsStronger(test));
console.log(test);
