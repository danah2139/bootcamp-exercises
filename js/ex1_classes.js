class Animal {
	constructor(_name, _sound) {
		this.name = _name;
		this.sound = _sound;
	}

	getName() {
		return this.name;
	}
	getSound() {
		return this.sound;
	}
	print() {
		console.log(`${this.name} sound is ${this.sound}`);
	}
}

const dog = new Animal('dog', 'woof-woof');
const cat = new Animal('cat', 'mew');
const chicken = new Animal('chicken', 'cock-a-doodle-doo');

console.log(dog.getSound());

dog.print();
cat.print();
chicken.print();
