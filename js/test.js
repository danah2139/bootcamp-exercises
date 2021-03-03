/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h.

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

function Car(name, speed) {
	this.name = name;
	this.speed = speed;
}

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(this.speed);
};

Car.prototype.brake = function () {
	this.speed -= 10;
	console.log(this.speed);
};

let car1 = new Car('BMW', 120);
let car2 = new Car('Mercedes', 95);

car1.accelerate();
car2.accelerate();
car2.brake();
