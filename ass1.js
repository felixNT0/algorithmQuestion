function maxDepth(s){
	let maxCounter = 0
	let tempCounter = 0
	for(let i = 0; i < s.length; i++){
     let currentParentheses = s[i]
     if(currentParentheses === "("){
     	tempCounter++
     	 if (tempCounter > maxCounter){
                maxCounter = tempCounter;
            }
     
     }
     if(currentParentheses === ")"){
           if (tempCounter > 0)

                  {
                     tempCounter--;
                 }	 
          }
	}
 
    return maxCounter;
	
}

console.log(maxDepth("(())"))
