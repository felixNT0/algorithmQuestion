class Queue{
	constructor(){
		this.count = 0
		this.lowerstCount = 0
		this.items = {}
	}

	enqueue(item){
		this.items[this.count] = item;
		this.count++
	}

	isEmpty(){
		return this.count - this.lowerstCount === 0
	}

	dequeue(){
		if(this.isEmpty()){
			return undefined
		}
		const result = this.items[this.lowerstCount]
		delete this.items[this.lowerstCount]
		this.lowerstCount++
		return result
	}
	
	peek(){
		if(this.isEmpty()){
			return undefined
		}
		return this.items[this.lowerstCount]
	}

	size(){
		return this.count - this.lowerstCount;
	}

	clear(){
		this.items = {}
		this.count = 0
        this.lowerstCount = 0
	}

	toString() {
	if (this.isEmpty()) {
	return '';
	}
	let objString = `${this.items[this.lowestCount]}`;
	for (let i = this.lowestCount + 1; i < this.count; i++) {
	objString = `${objString},${this.items[i]}`;
	}
	return objString;
	}
}

// const queue = new Queue()



// // console.log(queue.isEmpty())
// queue.enqueue("John")
// queue.enqueue("Jack")
// console.log(queue.toString())
// // queue.enqueue(10)

// // console.log(queue.toString(10))
// console.log(queue.isEmpty()); 
// queue.dequeue(); 
// queue.dequeue(); 
// // console.log(queue.toString());
// console.log(queue.items)
// setTimeout(, 3000);
function hotPotato(elementList, num){
	const queue = new Queue()
	const eliminatedList = []

	for(let i = 0; i < elementList.length; i++){
		queue.enqueue(elementList[i])
	}
	while(queue.size() > 1){
		for(let i = 0; i < num; i++){
			queue.enqueue(queue.dequeue())
		}
		eliminatedList.push(queue.dequeue())
	}
	return {
		eliminated: eliminatedList,
		winner: queue.dequeue()
	}

}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"]
const result = hotPotato(names, 1)

result.eliminated.forEach(name =>{
	console.log(`${name} was eliminated from the Hot Potato game`)
})

console.log(`The winner is: ${result.winner}`)