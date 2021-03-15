class Car {
	constructor(_brand, _speed) {
		this.brand = _brand;
		this.speed = _speed;
	}

	getBrand() {
		return this.brand;
	}
	getSpeed() {
		return this.speed;
	}
	print() {
		console.log(`${this.brand} speed is ${this.speed}`);
	}
}

const carArr = [
	new Car('Toyota', 200),
	new Car('Volkswagen', 210),
	new Car('Ford', 290),
	new Car('Honda', 160),
];

let maxSpeed = carArr
	.map((car) => car.getSpeed())
	.reduce((max, speed) => {
		speed > max ? speed : 0;
	});
carArr.sort((a, b) => {
	a.getSpeed - b.getSpeed();
});
