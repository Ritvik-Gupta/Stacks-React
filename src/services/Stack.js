class Stack {
	constructor(array = new Array(10).fill(null), top = -1) {
		this.stack = array;
		this.size = array.length;
		this.top = top;
	}

	isFull() {
		return this.top === this.size - 1;
	}

	isEmpty() {
		return this.top === -1;
	}

	push(value) {
		if (!this.isFull()) {
			this.stack[++this.top] = value;
			return true;
		}
		return false;
	}

	pop() {
		if (!this.isEmpty()) {
			const value = this.stack[this.top];
			this.stack[this.top--] = null;
			return value;
		}
		return null;
	}

	get copy() {
		return [...this.stack];
	}
}

export default Stack;
