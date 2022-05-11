function fibonacci(n){
		let f0 = 0
		let f1 = 1
        let fn = n 
	for (let i = 2; i <= n; i++) {
	    fn = f1 + f0;
	    // console.log(fn)
		f0 = f1;
		// console.log(f0)
		f1 = fn;
		// console.log(f1)
	}
	 return fn

}

console.log(fibonacci(9))