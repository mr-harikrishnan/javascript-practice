class Stack {
    constructor() {
        this.items = [];
    }

    push(number) {
        this.items.push(number);
    }

    pop() {
        if (this.items.length === 0)
            return "Oops, the stack is empty!";
        return this.items.pop();
    }


    peek() {
        return this.items[this.items.length - 1];
    }


    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}


let myStack = new Stack();
myStack.push(5);
myStack.push(10);
console.log(myStack.peek());  // Output: 10
myStack.pop();
console.log(myStack.peek());  // Output: 5