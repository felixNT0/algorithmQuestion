function shiftString(s, goal){ 
 //   let str = s.split("")
 //   let counter = 0

	// for(let i = 0; i < s.length; i++){
 //         let currentString = s[i]
 //         let lastString = s[i + 1]
 //         // console.log(currentString)
 //         // console.log(lastString)
 //     if(currentString){
 //     	str.shift(currentString)
 //     	str.push(currentString)
 //     	console.log(str)
     	
 //     }
    
 //    // return
	// }

	// // if(s === goal){
	// // 	return true
	// // }
	// // else if(s !== goal){
	// // 	return false
	// // }
	let firststr = "";
      let secondstr = "";
      let j = 0;
      let k = 0;
      while (j < s.length) {
        if (s[k] === goal[j]) {
          secondstr += s[k];
          k++;
        } else {
          firststr += goal[j];
        }
        j++;
      }
      if (!secondstr) return false;
      if (firststr + secondstr === goal) return true;

      return false;
}

console.log(shiftString("ABCDE", "CDEAB"))


