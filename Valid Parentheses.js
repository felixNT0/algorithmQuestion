function maxDepth(s){
	let result = []
  let ans = true;
	for(let i = 0; i < s.length; i++){
     let currentParentheses = s[i]
     let nextParentheses = s[i + 1]
     let lastParentheses = s[i - 1]
     if(currentParentheses === "(" || currentParentheses === "{" || currentParentheses === "["){
      // console.log(currentParentheses)
      result.push(currentParentheses)
     }
     if(nextParentheses){
      result.pop(nextParentheses)
     }
     // if(currentParentheses !== nextParentheses){
     // return ans = false
     // }
  }
  return ans;
	
}

console.log(maxDepth("()[]{}"))

// function balance(arr){
//   let tempArray = []
//   let counter = 0     

//   for(let i = 0; i < arr.length; i++){

//     let currentString = arr[i]
//       let lastString = arr[i - i] 
//     if(lastString === currentString){
//       tempArray.push(currentString)
      
//     }
//     if(lastString !== currentString){
//       tempArray.pop()

//     }
//     if(tempArray.length === 0){
      
//       counter += 1
      
//     }

//   }

//   return  counter;
// }

// console.log(balance("()[]{}"))