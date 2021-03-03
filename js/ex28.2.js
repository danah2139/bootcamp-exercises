const obj = {
	name: 'dana',
	print: function () {
		console.log(this.name);
	},
	printAfterSeconed: function () {
		setTimeout(
			function () {
				console.log(this.name);
			}.bind(this),
			1000
		);
	},
};

obj.print();

let bindFunc = obj.printAfterSeconed.call(obj);
