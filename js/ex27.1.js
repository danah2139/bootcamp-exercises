function Square(a, b, c, d) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.isSquare = function () {
		return this.a === this.b && this.b === this.c && this.c === this.d;
	};
}
let square = new Square(1, 1, 1, 1);
console.log(square.isSquare());
