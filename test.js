// function person(firstName, lastName){
// 	console.log(new.target)
// 	this.firstName = firstName;
// 	this.lastName = lastName;

// 	this.getFullNAme = function (){
// 		return this.firstName + " " + this.lastName;
// 	}
// }
// let name = new person("Felix", "Kolo")

// console.log(name.getFullNAme())

// let names = {
// 	firstName: "Felix",
// 	lastName: "Tsowa",
// 	getFullNAme: function(){
// 		return this.firstName + " " + this.lastName; 
// 	}
// }

// console.log(names.getFullNAme())

// function say(message) {
//     message = typeof message !== 'undefined' ? message : 'Hi';
//     console.log(message);
// }
// say("Hello"); 

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     ssn: '299-24-2351'
// };

// for(var prop in person) {
//     console.log(prop + ': ' + person[prop]);
// }

// let names = {
// 	firstName: "Felix",
// 	lastName: "Tsowa",
// }

// names.age = 25;

// for (const key in names) {
//     console.log(names);
// }


// const profile = [1,2,4]
// console.log(profile.concat([3]))



// class Person {
// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
//     this.lastName = lastName;
// 	}
    
// }



// Person.prototype.getName = function () {
//     return this.firstName + " " + this.lastName
// };

// var name = new Person("Felix", "Tsowa");
// let name = john.getName()
// console.log(name.firstName, name.lastName);

// class Person {
//     constructor(name) {
//         this.setName(name);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(newName) {
//         newName = newName.trim();
//         if (newName === '') {
//             console.log('The name cannot be empty') ;
//         }
//         this.name = newName;
//     }
// }

// let person = new Person('Jane Doe');
// console.log(person); 

// person.setName('Jane Smith');
// console.log(person.getName());


// let meeting = {
//     attendees: [],
//     add(attendee) {
//         console.log(`${attendee} joined the meeting.`);
//         this.attendees.push(attendee);
//         return this;
//     },
//     get latest() {
//         let count = this.attendees.length;
//         return count == 0 ? undefined : this.attendees[count - 1];
//     }
// };

// meeting.add('John').add('Jane').add('Peter').add("felix").add("kolo");
// console.log(`The latest attendee is ${meeting.latest}.`);

// function factory(aClass) {
//     return new aClass();
// }

// let greeting = factory(class {
//     sayHi() { console.log('Hi'); }
// });

// greeting.sayHi(); // 'Hi'

// let app = new class {
//     constructor(name) {
//         this.name = name;
//     }
//     start() {
//         console.log(`Starting the ${this.name}...`);
//     }
// }('Awesome App');

// app.start(); // Starting the Awesome App...

// let propName = "z"

// const rank = {
// 	x: 1,
//     y: 2,
//     [propName]: 3,
// }

// console.log(rank)


// let name = "getFullName";

// class Person {
// 	constructor(firstName, lastName){
// 		this.firstName = firstName
//         this.lastName = lastName
// 	}
// 	get [name](){
// 		return `${this.firstName} ${this.lastName}`
// 	}
// }

// let person = new Person("Felix", "Kolo")
// console.log(person.getFullName)

// function Person(name) {
//     this.name = name;
// }

// let john = new Person('John');
// console.log(john.name); // john


// class Person {
//     constructor(name) {
//         this.name = name;
//         console.log(new.target.name);
//     }
// }

// class Employee extends Person {
//     constructor(name, title) {
//         super(name);
//         this.title = title;
//           // console.log(new.target.title);
//     }
// }

// let felix = new Person('John Doe'); 
// let kolo = new Employee('Lily Bush', 'Programmer'); 

// console.log(kolo instanceof Person)


// function add(x, y) {
//     return x + y;
// }

// console.log(add(10, 20))


// let cat = { type: 'Cat', sound: 'Meow' };
// let dog = { type: 'Dog', sound: 'Woof' };

// const say = function (message) {
//   console.log(message);
//   console.log(this.type + ' says ' + this.sound);
// };

// say.call(cat, 'What does a ' + cat.type + ' say?');
// say.call(dog, 'What does a ' + dog.type  + ' say?');


// const car = {
//   name: 'car',
//   start() {
//     console.log('Start the ' + this.name);
//   },
//   speedUp() {
//     console.log('Speed up the ' + this.name);
//   },
//   stop() {
//     console.log('Stop the ' + this.name);
//   },
// };

// const aircraft = {
//   name: 'aircraft',
//   fly() {
//     console.log('Fly');
//   },
// };

// car.start.call(aircraft);
// car.speedUp.call(aircraft);
// car.stop.call(aircraft.fly);
// aircraft.fly();

// const computer = {
//     name: 'MacBook',
//     isOn: false,
//     turnOn() {
//         this.isOn = true;
//         return `The ${this.name} is On`;
//     },
//     turnOff() {
//         this.isOn = false;
//         return `The ${this.name} is Off`;
//     }
// };
// const server = {
//     name: 'Dell PowerEdge T30',
//     isOn: false
// };
// let result = computer.turnOff.apply(server);

// let show = console.log(result)
// // setTimeout(show, 3000)
// let result = {}

// let add = (x, y) => { result:  x + y; };
// console.log(add(1, 3))


// function sum(...args) {
//   return args
//     .filter(function (e) {
//       return typeof e === 'boolean';
//     })
//   args.reduce(function(before, after){
//     	return before + " " + after
//     })
// }

// let result = sum(1,2,3,"hello", "me", null, undefined, true, false)
// console.log(result)

// function isOdd(number) {
//   return number % 2 != 0;
// }
// function isEven(number) {
//   return number % 2 == 0;
// }
// function isMultiple(number){
// 	return number + 2
// }

// function filter(numbers, fn) {
//   let results = [];
//   for (const number of numbers) {
//     if (fn(number)) {
//       results.push(number);
//     }
//   }
//   return results;
// }
// let numbers = [1, 2, 4, 7, 3, 5, 6];

// console.log(filter(numbers, isOdd));
// console.log(filter(numbers, isEven));
// console.log(filter(numbers, isMultiple));


// function getUsers() {
//   return [
//     { username: 'john', email: 'john@test.com' },
//     { username: 'jane', email: 'jane@test.com' },
//   ];
// }

// function findUser(username) {
//   const users = getUsers(); 
//   const user = users.find((user) => user.username === username);
//   if(user){
//   	   return user; 

//   }
// 	  console.log("sorry")
//   }

//  //  function addUser(details){
//  //  	const users = getUsers()
//  //    users.push(details)
//  //  }

//  // addUser({ username: 'felix', email: 'felix@test.com' })


// console.log(findUser('jane'));

// function getUsers() {
//   return [
//     { username: 'john', email: 'john@test.com' },
//     { username: 'jane', email: 'jane@test.com' },
//   ];
// }


// function UsersDetails(callback) {
// 	let users = getUsers()
//   setTimeout(() => {
//     callback(users);
//   }, 1000);
// }

// function findUser(username, callback) {
//   UsersDetails((users) => {
//     const user = users.find((user) => user.username === username);
//     callback(user);
//   });
// }

// findUser('john', console.log);

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ]);
//     }, 1000);
//   });
// }

// function onFulfilled(users) {
//   console.log(users);
// }

// const promise = getUsers();
// promise.then(onFulfilled);

// let success = true;

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           { username: 'john', email: 'john@test.com' },
//           { username: 'jane', email: 'jane@test.com' },
//         ]);
//       } else {
//         reject('Failed to the user list');
//       }
//     }, 1000);
//   });
// }

// function onFulfilled(users) {
//   console.log(users);
// }
// function onRejected(error) {
//   console.log(error);
// }

// const promise = getUsers();
// promise.then(onFulfilled, onRejected);

// let success = false;

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           { username: 'john', email: 'john@test.com' },
//           { username: 'jane', email: 'jane@test.com' },
//         ]);
//       } else {
//         reject('Failed to the user list');
//       }
//     }, 1000);
//   });
// }

// const promise = getUsers();

// promise.catch((error) => {
//   console.log(error);
// });


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 2);
//         }, 3 * 1000);
//     });
// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 3);
//         }, 3 * 1000);
//     });
// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 4);
//         }, 3 * 1000);
//     });
// }).then(result => console.log(result));


// function generateNumber(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num);
//     }, 3 * 1000);
//   });
// }

// generateNumber(Math.random())
//   .then((result) => {
//     console.log(result);
//     return generateNumber(result * 2);
//   })
//   .then((result) => {
//     console.log(result);
//     return generateNumber(result * 3);
//   })
//   .then((result) => console.log(result));
