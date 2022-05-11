function sortedSquares(nums){
	let result = []
	for(let i = 0; i < nums.length; i++){
		let currentNum = nums[i]
		let squaredNum = currentNum * currentNum
		if(squaredNum >= 0){
			result.push(squaredNum)
			result.sort((a,b) => a-b)
		}
	}
return result;
}


// console.log(sortedSquares([-4,-1,0,3,10]))
console.log(sortedSquares([-7,-3,2,3,11]))