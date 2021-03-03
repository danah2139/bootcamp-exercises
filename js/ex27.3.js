Array.prototype.myFilter = function (callback) {
	let arr = [];
	for (let index = 0; index < this.length; index++) {
		if (callback(this[index], index, this)) {
			arr.push(this[index]);
		}
	}
	return arr;
};

Array.prototype.myFind = function (callback) {
	if (typeof callback !== 'function') {
		throw new TypeError('no callback function');
	}
	for (let index = 0; index < this.length; index++) {
		if (callback(this[index], index, this)) {
			return this[i];
		}
	}
};

Array.prototype.myReduce = function (callback) {
	let acc = this[0];
	for (let index = 0; index < this.length; index++) {
		acc = callback(acc, this[index], index);
	}
};
