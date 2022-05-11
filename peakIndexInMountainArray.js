function peakIndexInMountainArray(arr){
  let newArray = []
	let max = Math.max(...arr)
    arr.forEach((element, index) => {
	let ans = arr.indexOf(max) === index
	if(ans){
      newArray.push(index)
	}	
	})
	return newArray
	}

setTimeout(() => {
	console.log("Waiting")
        let total = peakIndexInMountainArray([1,2,5,3,4,7,6,8,3,9,10,23,5]);
        console.log( total);
        return total;
    }, 1000);

// console.log(peakIndexInMountainArray([1,2,5,3,4,7,6,8,3,9,10,23,5]))

// return