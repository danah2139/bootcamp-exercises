function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
	console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (num) {
	console.log(`${this.name} used ${this.attackList[num]}`);
};

const Pikachu = new Pokemon('Pikachu', 'electric', [
	'Thunder Shock',
	'Thunder Wave',
	'Double Team',
	'Electro Ball',
]);

const charmander = new Pokemon('Charmander', 'fire', [
	'Growl',
	'Scratch',
	'Fire Fang',
]);
const bulbasaur = new Pokemon('Bulbasaur', 'grass', [
	'Magical Leaf',
	'Solar Beam',
	'Giga Drain',
]);

Pikachu.callPokemon();
Pikachu.attack(2);
charmander.callPokemon();
bulbasaur.callPokemon();
