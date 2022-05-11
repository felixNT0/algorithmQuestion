function rotate(nums, k){
	let len = nums.length;
	let kVal = k % len
 	let rn = nums.splice(len - kVal, kVal)

	return rn.concat(nums);
}

 console.log(rotate([1,2,3,4,5,6,7], 3))

