// 	function getUser(userId) {
//     return new Promise((resolve, reject) => {
//         console.log('Get the user from the database.');
//         setTimeout(() => {
//             resolve({
//                 userId: userId,
//                 username: 'admin'
//             });
//         }, 1000);
//     })
// }

// function getServices(user) {
//     return new Promise((resolve, reject) => {
//         console.log(`Get the services of ${user.username} from the API.`);
//         setTimeout(() => {
//             resolve(['Email', 'VPN', 'CDN']);
//         }, 3 * 1000);
//     });
// }

// function getServiceCost(services) {
//     return new Promise((resolve, reject) => {
//         console.log(`Calculate the service cost of ${services}.`);
//         setTimeout(() => {
//             resolve(services.length * 100);
//         }, 2 * 1000);
//     });
// }


// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The first promise has resolved');
//     resolve(10);
//   }, 1 * 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The second promise has reject');
//     reject("sorry failed");
//   }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The third promise has resolved');
//     resolve(30);
//   }, 3 * 1000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The four promise has reject');
//     reject("sorry failed again");
//   }, 4 * 1000);
// });
// const p5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The fifth promise has resolved');
//     resolve(50);
//   }, 5 * 1000);
// });

// Promise.all([p1, p2, p3, p4, p5]).then(console.log).catch(console.log)


// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve("Was successful");
//     }, 1 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has rejected');
//         reject("Was not successful");
//     }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve("Was successful");
//     }, 3 * 1000);

// });


// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(reason => console.log(`Rejected: ${reason}`));


// class Connection {
//     execute(query) {
//         if (query != 'Insert' && query != 'Update' && query != 'Delete') {
//             throw new Error(`The ${query} is not supported`);
//         }
//         console.log(`Execute the ${query}`);
//         return this;
//     }
//     close() {
//         console.log('Close the connection')
//     }
// }


// function getUserById(id) {
//     if (typeof id !== 'number' || id <= 0) {
//         throw new Error('Invalid id argument');
//     }

//     return new Promise((resolve, reject) => {
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// getUserById('a')
//     .then(user => console.log(user.username))
//     .catch(err => console.log(err));

// function* generate() {
//     let result = yield;
//     console.log(`result is ${result}`);
// }

// let g = generate();
// console.log(g.next()); 

// console.log(g.next(1000));

// let colors = ['Red', 'Green', 'Blue'];

// for (const [index, color] of colors.entries()) {
//     console.log(`${color} is at index ${index}`);
// }

// const ratings = [
//     {user: 'John',score: 3},
//     {user: 'Jane',score: 4},
//     {user: 'David',score: 5},
//     {user: 'Peter',score: 2},
// ];

// let sum = 0;
// for (const [index, ratings] of ratings) {
// 	// sum += score;
//     console.log(`${ratings} is at index ${index}`);
// }
// console.log(`Total scores: ${sum}`);

// let colors = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'back'];
// // let color = colors;
// // for (const color of cmyk) {
// //   
// // }
// colors.push(...cmyk);

// console.log(colors);

// const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
// const flatNumbers = numbers.flat(Infinity);

// console.log(flatNumbers);

// let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];

// let newResult = sentences.flatMap((item) => item.split(" "))
// console.log(newResult)

// let cart = [{
//         name: 'Smartphone',
//         qty: 2,
//         price: 500,
//         freeOfCharge: false
//     },
//     {
//         name: 'Tablet',
//         qty: 1,
//         price: 800,
//         freeOfCharge: false
//     }
// ];

// let newCart = cart.flatMap(
//     (item) => {
//     	let result = {
//                 name: 'Screen Protector',
//                 qty: 3,
//                 price: 5,
//                 freeOfCharge: true
//             }
//    return [].concat(item, result)
//   }
// );

// console.log(newCart);

// function getScores() {
//    return [70, 80];
// }


// function add(...num){
// 	let data = getScores()
// 	const result = [...data, num];
// 	let answer = result.flat()
// 	return answer
// }

// console.log(add(90, 100, 110))



// let [a, b, c] = getScores();

// console.log(a);
// console.log(b);
// console.log(c); 

// let chars = ['A', ...'BC', ...'DEF'];
// console.log(chars);


// let str = 'JS indexOf';
// let substr = '';

// let index = str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());
// if(index){
// 	console.log("not found")
// }else(

// console.log(index)
// 	)


// result = 'Hello'.repeat();
// console.log({ result });

// let str = 'JS will, Js will rock you!';
// let newStr = str.replaceAll(/JS/gi,'JavaScript');

// console.log(newStr);


// let str = 'JS will, Js will, js will rock you.';

// let pattern = /js/gi;
// let newStr = str.replaceAll(pattern, function(match, offset, str) {
//     if(pattern) return 'JavaScript';
//     return '';
// });

// console.log(newStr);

let sch = []
let check = [{
	name: "felix", dept: "100"
},
{
	name: "ali", dept: "500"
},{
	name: "john", dept: "200"
}]

check.forEach((element, index) => {
	if(element.name === "felix"){
		  check.splice(index, 1)
		  sch.push(element)
		  sch.splice(index, 1)
		  check.push(element)
		  // console.log(element)
}
	
})
console.log(check)
console.log(sch)
