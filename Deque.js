// class Deque{
// 	constructor(){
// 		this.count = 0
// 		this.lowerstCount = 0
// 		this.items = {}
// 	}

// 	addFront(item){
// 		if(this.isEmpty()){
// 			this.addBack(item)
// 		}
// 		else if(this.lowerstCount > 0){
// 			this.lowerstCount--
// 			this.items[this.lowerstCount] = item
// 		}
// 		else{
// 			this.count++
// 			this.lowerstCount = 0
// 			this.items[0] = item
// 		}
// 	}

// 	isEmpty(){
// 		return this.count - this.lowerstCount === 0
// 	}

// 	dequeue(){
// 		if(this.isEmpty()){
// 			return undefined
// 		}
// 		const result = this.items[this.lowerstCount]
// 		delete this.items[this.lowerstCount]
// 		this.lowerstCount++
// 		return result
// 	}
	
// 	peek(){
// 		if(this.isEmpty()){
// 			return undefined
// 		}
// 		return this.items[this.lowerstCount]
// 	}

// 	size(){
// 		return this.count - this.lowerstCount;
// 	}

// 	clear(){
// 		this.items = {}
// 		this.count = 0
//         this.lowerstCount = 0
// 	}

// 	toString() {
// 	if (this.isEmpty()) {
// 	return '';
// 	}
// 	let objString = `${this.items[this.lowestCount]}`;
// 	for (let i = this.lowestCount + 1; i < this.count; i++) {
// 	objString = `${objString},${this.items[i]}`;
// 	}
// 	return objString;
// 	}
// }


class Deque{
	constructor(){
		this.items = []
	}

	push(item){
		this.items.push(item)
	}

	pop(){
		return this.items.pop()
	}

	shift(){
		return this.items.shift()
	}

	unshift(item){
		this.items.unshift(item)
	}
	isEmpty(){
		return this.items.length === 0
	}
	clear(){
		return this.items = []
	}
}

const deque = new Deque()

// console.log(deque.isEmpty())

deque.push(10)
deque.push(15)
deque.push(20)
// console.log(deque.items)

deque.unshift(5)
// console.log(deque.items)

deque.shift()
deque.pop()
deque.unshift(5)
console.log(deque.items)