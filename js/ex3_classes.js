class sortNumber {
	constructor() {
		this.numList = [];
	}

	isContaining(num) {
		for (let i = 0; i < this.numList.length; i++)
			if (this.numList[i] === num) return true;
		return false;
	}

	isPrim(num) {
		if (num === 0 || num === 1) return true;

		for (let i = 2; i <= num / 2; i++) {
			if (num % i === 0) return false;
		}

		return true;
	}

	insertByVal(num) {
		if (this.numList.length === 0) {
			this.numList.push(num);
		} else if (num > this.numList[this.numList.length - 1]) {
			this.numList.push(num);
		} else {
			let isAdd = false;
			for (let i = 0; i < this.numList.length && !isAdd; i++) {
				if (num < this.numList[i]) {
					isAdd = true;
					this.numList.splice(i, 0, num);
				}
			}
		}
	}

	addNum(num) {
		if (this.isContaining(num) || !this.isPrim(num)) return false;

		this.insertByVal(num);

		return true;
	}

	removeNum(num) {
		if (this.isContaining(num)) {
			const i = this.numList.indexOf(num);
			this.numList.splice(i, 1);
			return true;
		}
		return false;
	}

	getAll() {
		return this.numList;
	}

	print() {
		console.log(this.numList);
	}
	share(sortNumber) {
		let counter = 0;
		const secondArr = sortNumber.getAll();
		this.numList.forEach((value) => {
			if (secondArr.indexOf(value) > -1) counter++;
		});
		return counter;
	}

	union(sortNumber) {
		let result = [],
			i = 0,
			j = 0,
			arr1 = this.numList,
			arr2 = sortNumber.getAll();

		while (i < arr1.length || j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				result.push(arr1[i]);
				i++;
			} else if (arr1[i] > arr2[j]) {
				result.push(arr2[j]);
				j++;
			} else {
				result.push(arr1[i]);
				i++;
				j++;
			}
		}

		return result;
	}
}

const sortNumber = new SortNumber();

console.log(sortNumber.addNum(8));
console.log(sortNumber.addNum(2));
console.log(sortNumber.addNum(4));
console.log(sortNumber.addNum(5));
console.log(sortNumber.addNum(12));
console.log(sortNumber.addNum(11));
console.log(sortNumber.addNum(3));
console.log(sortNumber.getAll());

console.log(sortNumber.removeNum(7));
console.log(sortNumber.removeNum(2));
console.log(sortNumber.getAll());

const sortNumber2 = new SortNumber();

console.log(sortNumber2.addNum(7));
console.log(sortNumber2.addNum(1));
console.log(sortNumber2.addNum(2));
console.log(sortNumber2.addNum(5));
console.log(sortNumber2.addNum(12));
console.log(sortNumber2.addNum(11));
console.log(sortNumber2.addNum(14));
sortNumber2.print();

console.log(sortNumber.share(sortNumber2));
console.log(sortNumber.union(sortNumber2));
