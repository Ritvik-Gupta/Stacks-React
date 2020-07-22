class Stack {
	constructor(size = 10) {
		this.stack = new Array(size).fill(null);
		this.size = size;
		this.top = -1;
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

	static create(prevStack) {
		const newStack = new Stack();
		newStack.stack = prevStack.stack;
		newStack.size = prevStack.size;
		newStack.top = prevStack.top;
		return newStack;
	}

	get copy() {
		return [...this.stack];
	}
}

export default Stack;
