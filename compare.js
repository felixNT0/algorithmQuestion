function lunch(stundents, sandWich){
	let len = stundents.length
  for (let i = 0; i < len; i++) {
  	let temStudent = stundents
  	// console.log(temStudent)
     
     for(let i = 0; i < temStudent.length; i++){
     	let firstStudent = temStudent[0];
     	// console.log(firstStudent)
     	temStudent.shift();
     	// console.log(temStudent)
     	if(firstStudent !== sandWich[0]){
     		temStudent.push(firstStudent)
     		// console.log(temStudent)
     	}
     	else{
     		sandWich.shift()
     		// console.log(sandWich)
     	}
     }
    
    stundents = temStudent
    // console.log(stundents)
  }
  return stundents.length
}

console.log(lunch([1,1,1,0,0,1], [1,0,0,0,1,1]))