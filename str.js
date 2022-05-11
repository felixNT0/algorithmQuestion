
function isPalindrome(s){
 // let arr =  s.split("")
 // let result = arr.reverse()
 // let final = result.join("")
 // if(s === final){
 // 	 return true;
 // 	} 
 // 	else if(s !== final){
 // 		return false;
 // 	}

 
 return s.split("").reverse().join("") === s;
 	
}

console.log(isPalindrome("abba"))