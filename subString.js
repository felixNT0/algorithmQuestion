function subString(words){
    let result = []
    for(let i = 0; i < words.length; i++){
      let currentString = words[i]
 		 for(let j = 0; j < words.length; j++){
           let checkWord = words[j]
           let foundWord = checkWord.includes(currentString)
            if(foundWord){
           	if(currentString !== checkWord){
            result.push(currentString)
            }      
           }    
    	}
    }
    
    return result
}

// console.log(subString(["leetcode", "et", "code"]))
console.log(subString(["leetcoder","leetcode","od","hamlet","am"]))
