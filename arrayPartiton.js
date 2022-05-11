function arrayPartition(nums) {
let result = nums.sort((a,b) => a-b)
// console.log(result)
let filtered = result.filter((element,index) => index % 2 === 0)
// let oddFiltered = result.filter((element, index) => index % 2 !== 0)
// console.log(oddFiltered)
let finalAnswer = filtered.reduce((prev, next) => prev + next)
// console.log(finalAnswer)
return finalAnswer
};

console.log(arrayPartition([6,2,6,5,1,2]))
