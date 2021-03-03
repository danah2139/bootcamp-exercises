class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
	draw() {
		console.log(this.element);
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	isEmpty() {
		return this.size === 0;
	}
	addLast(element) {
		let node = new Node(element);
		let current;
		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		if (this.head == null) {
			return this.head;
		}

		current = this.head;
		while (current.next) {
			current = current.next;
		}
		return current;
	}
	draw() {
		let current = this.head;
		while (current) {
			current.draw();
			console.log('->');
			current = current.next;
		}
		console.log('null');
	}
	reverse() {
		let prev = null;
		let nextTemp = null;
		let current = this.head;
		while (current) {
			nextTemp = current.next; // 2 3 4 null // advance pointer
			current.next = prev; // null 1 2 3 // reverse pointer to before
			prev = current; //1 2 3 4 // advance pointer
			current = nextTemp; // 2 3 4 null // // advance pointer
		}
		this.head = prev;
	}
	removeKNode(k) {
		let prev = this.head;
		let current = prev.next;
		let i = 1;
		if (k === 1) {
			this.head = this.head.next;
			return;
		}
		if (k > this.size) return;
		while (k > i) {
			prev = current;
			current = current.next;
			i++;
		}
		prev.next = current.next;
	}

	setNext(element) {}

	circularLinkedList() {
		let current = this.head;
		let i = 0;
		while (this.size >= i && current) {
			i++;
			current = current.next;
		}
		if (this.size < i) {
			return true;
		}
		return false;
	}
}

let linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
//linkedList.draw();
//linkedList.reverse();
//linkedList.draw();
linkedList.removeKNode(2);
linkedList.draw();
