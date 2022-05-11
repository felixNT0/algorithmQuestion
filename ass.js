


function balance(arr){
	let tempArray = []
	let counter = 0			

	for(let i = 0; i < arr.length; i++){

		let currentString = arr[i]
   		let lastString = arr[i - i] 
		if(lastString === currentString){
			tempArray.push(currentString)
			
		}
		if(lastString !== currentString){
			tempArray.pop()

		}
		if(tempArray.length === 0){
			
			counter += 1
			
		}

	}

	return  counter;
}

console.log(balance("LLLRRR"))




