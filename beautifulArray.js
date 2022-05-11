function longestMountain(arr){
	if(arr.length < 3) return 0;
    let i = 0
	let mountainState1 = -1
	let mountainState2 = -1
	let increaseCount = 0
	// let result = []
	for(let i = 0; i < arr.length; i++){
		let arrLength = arr.length;
		let currentNumber = arr[i]
   		let lastNumber = arr[i - 1] 
   		let nextNumber = arr[i + 1]
 	 if(nextNumber > currentNumber) {
        if(mountainState1 !== -1){
        	mountainState1 = -1
        	mountainState2 = -1
        	if(mountainState2 === -1)
        		mountainState2 = i

        	
        }
 	 }
 	 else{
 	 	if(nextNumber < currentNumber){
 	 		
 	 	}
 	 }


	}
	return 

}

console.log(longestMountain([2,1,4,7,3,2,5]))