function reverseOnlyLetter(s){
let ans = s.split("")
	for (let i = 0; i < ans.length; i++) {
		let current = s[i]
		// console.log(current)
		if(current === "-" || current === "1" ||current === "=" || current === "!"){
			// console.log(current)
			let index = ans.indexOf(current)
			if(index){
				
			}
		}
	    
	}
return ans.join("")
}
// console.log(reverseOnlyLetter("a-bC-dEf-ghIj"))
console.log(reverseOnlyLetter("Test1ng-Leet=code-Q!"))
// console.log(reverseOnlyLetter("ab-cd"))

// function reverseOnlyLetter(s){
// 	let ans = s.split("")
//   let result = []
//     for(let i = 0; i < ans.length; i++){
//       let currentString = ans[i]
//       // console.log(currentString)
//  		 for(let j = 0; j < ans.length; j++){
//            let checkWord = ans[j]
//            // console.log(checkWord)
//            let foundWord = checkWord.includes(currentString)
//             if(foundWord){
//            	if(currentString === checkWord){
//             result.push(currentString)

//             }      
//            }    
//     	}
//     }
    
//     return result.reverse().join("")

// }
// console.log(reverseOnlyLetter("a-bC-dEf-ghIj"))
// // console.log(reverseOnlyLetter("Test1ng-Leet=code-Q!"))
// console.log(reverseOnlyLetter("ab-cd"))
   