// var nunm = 1
// num = 3
// var price = 1.5
// var myName = "Packt"
// var trueValue = true
// var nullVar = null 
// var und

// console.log('num: ' + num);
// console.log('myName: ' + myName);
// console.log('trueValue: ' + trueValue);
// console.log('price: ' + price);
// console.log('nullVar: ' + nullVar);
// console.log('und: ' + und);

// const fibonacci = []
// fibonacci[1] = 1
// fibonacci[2] = 1

// for (let i = 1; i < fibonacci.length; i++) {
// console.log(fibonacci[i]); 
// }

//even and odd number

// let number = [1,2,3,1,5,6,5,8,3,5]
// // let evenNumbers = []
// // let oddNumbers = []

// function duplicatedNumber(arr){
// let repeatedNumber = arr.filter((item, index) =>  index !== arr.indexOf(item))

// return repeatedNumber

// }
// let result = duplicatedNumber(number)
// console.log(result)
// function Numbers(num){
// for (var i = 0; i < num.length; i++) {
// 	let currentResult = num[i]
// 	if(currentResult % 2 === 0){
//   evenNumbers.push(currentResult)
//   // console.log(evenNumbers)
// 	} else if(currentResult % 2 !== 0){
// 		oddNumbers.push(currentResult)
// 		// console.log(oddNumbers)
// 	}

// }	
// }

// Numbers([1,2,3,4,5,6,7,8,9,10])

//   console.log(evenNumbers)

// 	console.log(oddNumber

// sum of all the numbers in an array

// let num = [1,2,3,4,5,6,7,8,9,10]


// for (var i = 0; i < num.length; i++) {
// 	let currentNumber = num[i]
// 	if(currentNumber){
//         num.reduce((previous, current) => previous + current)
      
// 	} 

// }	



// console.log(num)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//  let result = numbers.reduce((previous, current) => previous + current, 0)

//   console.log(result)

//divisor of 10
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let result = numbers.map((item) => item % 10 === 0)
// console.log(result)

//return all the negative numbers

// let numbers = [1, -2, 3, 4, 5, 6, 7, 8, 9, 10, -11, 12, 13, 14, 15];

// let result = numbers.filter((item) => item < 0)
// console.log(result)

// let numbers = [10, 2, 6, 4, 5, 3, 14, 8, 9, 1, 11, 12, 13, 7, 15];

// let result = numbers.sort((a,b) => a - b)
// // let finallyResult = result.reverse()
// let sum = result.reduce((a,b) => a + b)
// let evenNumbers = result.filter((a) => a % 2 === 0)
// let oddNumbers = numbers.filter((a) => a % 2 !== 0)
// console.log(sum)
// console.log(evenNumbers)
// console.log(oddNumbers)
// console.log(finallyResult)

// var result = [""];
// for (var i = 1; i <= 11; i++) {
//     for (var j = 1; j <= 11; j++) {
//         result += (i*j) + ' ';
//     }
//     result += [""]
// }

// console.log(result)



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 10, 11, 12, 13, 14, 15];
// let moveNum = []
// let  resultIndex = numbers.filter((item, index) => index !== numbers.indexOf(item))
// if(resultIndex){
//   let removedNumber = numbers.splice(resultIndex)
//   moveNum.push(numbers)


//    console.log(removedNumber)
//    console.log(moveNum)
// }


// for (let i = 0; i < numbers.length; i++) {
// 	let currentNumber = numbers[i]
// 	if(currentNumber){
// 	 let  resultIndex = numbers.findIndex((item, index) => index !== numbers.indexOf(item))
// 	 console.log(resultIndex)
// 	 moveNum.splice(resultIndex)

// 	}
// }
// console.log(moveNum)
// console.log(resultIndex)

// let numbers = [2,4,6,8,7]
// // let result = numbers.filter((item, index) => item % 2 !== 0)
// // console.log(result)
// let ones = numbers.fill(1, );
// console.log(ones) 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 10, 11, 12, 13, 14, 15];
// let result = numbers.forEach((item, index) => index !== numbers.indexOf(item))

// const stack = new Stack()
// console.log(stack.isEmpty())  

