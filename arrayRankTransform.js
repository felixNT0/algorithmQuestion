function arrayRankTransform(arr){
    let arrResult = []
    let objResult = {}
    // let arrObj = {}
  
  let ans = arr.filter((element,index) => arr.indexOf(element) === index).sort((a,b) => a-b)

  Object.assign(objResult, ans)

  let objValue = Object.values(objResult)

  let objKey = Object.keys(objResult)

    // arrResult.push(objResult, arrObj)
    for(let i = 0; i < ans.length; i++){
    	objResult[ans[i]] = i

  // console.log(objResult)

    }

	for(let i = 0; i < arr.length; i++){

     arrResult.push(objResult[arr[i]] + 1)
	}
	

		// console.log(objValue)
  //    	console.log(arr)

  return arrResult

	

}
// console.log(arrayRankTransform([40,10,20,30]))
// console.log(arrayRankTransform([100,100,100]))
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))


