class MinStack {
    stack = []
    stackTop = -1
    min = null

    constructor() { }

    push(val) {
        this.stackTop++
        this.stack[this.stackTop] = val

        if (this.min === null) {
            this.min = val
        } else if (val < this.min) {
            this.min = val
        }
    }

    top() {

        return this.stack[this.stackTop]

    }

    pop() {

        this.stack[this.stackTop] = null
        this.stackTop--
        this.min = null

        for (let i = 0; i <= this.stackTop; i++) {
            if (this.min === null) {
                this.min = this.stack[i]
            } else if (this.stack[i] < this.min) {
                this.min = this.stack[i]
            }
        }

    }

    getMin() {

        return this.min

    }

}

const stack = new MinStack()

stack.push(-2)
stack.push(0)
stack.push(-3)
console.log(stack.getMin())
stack.pop()
console.log(stack.top())
console.log(stack.getMin())