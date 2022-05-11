function shuffle(num, n){
	let result = []
	for (let i = 0; i < n; i++) {
		result.push(num[i])
		result.push(num[n + i]) 	
	}	
	
	return result
}

 console.log(shuffle([1,2,3,4,4,3,2,1], 4))