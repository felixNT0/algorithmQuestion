//JavaScript Stack

class Stack{
	constructor(){
		this.count = 0 
		this.items = {}
	}

	push(element) {
		this.items[this.count] = element;
		this.count++;
	}
	size(){
		return this.count
	}
	isEmpty(){
		return this.count === 0n
	}
	pop(){
		if(this.isEmpty()){
			return undefined
		}
		this.count--
		const result = this.items[this.count]
		delete this.items[this.count]
		return result
	}
	peek(){
		if(this.isEmpty()){
			return undefined
		}
		return this.items[this.count - 1]
	}
	clear(){
		this.items = {}
		this.count = 0
	}

}	


const stack = new Stack();
stack.push(5)
stack.push(8)


// console.log(stack.isEmpty())
stack.push(11)

stack.pop()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.items)
stack.clear()
console.log(stack.items)



