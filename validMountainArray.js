
function validMountainArray(num){
	if(num.length < 3) return false;

	let mountainState = 1
	let increaseCount = 0

 for(let i = 0; i < num.length; i++){
   let currentNumber = num[i]
   	let lastNumber = num[i - 1] || -1
     if(currentNumber === lastNumber)  return false;
     if(mountainState === 0 && lastNumber < currentNumber) return false
     if(mountainState === 1 && lastNumber > currentNumber) mountainState = 0;

     if(currentNumber > lastNumber){
    	increaseCount = increaseCount + 1;
    }
}	
	if(mountainState === 1 || increaseCount === 1) return false;
	return true;
}

console.log(validMountainArray([0,3,2,1]))