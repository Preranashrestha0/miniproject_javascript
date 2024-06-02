// // 1. Promises
// // Create a function fetchData that simulates fetching data from an API. The function should
// // return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
// // should represent a user with properties id, name, and age.

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = [
//                 { id: 1, name: 'Alice', age: 25 },
//                 { id: 2, name: 'Bob', age: 30 },
//                 { id: 3, name: 'Charlie', age: 35 }
//             ];
//             resolve(data);
//         }, 2000);
//     });
// }
// fetchData().then(users => {
//     console.log(users);
// }).catch(error => {
//     console.error('Error:', error);
// });

// // // 2. Closures
// // Create a function createCounter that returns an object with two methods: increment and
// // getCount. The increment method should increase the internal count by 1, and the getCount
// // method should return the current count. Use a closure to maintain the internal count variable.
// function createCounter() {
//     let count = 0; 
//     return {
//         increment() {
//             count += 1;
//         },
//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// console.log(counter.getCount()); 
// counter.increment();
// console.log(counter.getCount()); 
// counter.increment();
// console.log(counter.getCount());

// // 3. Callbacks
// // Create a function processData that accepts an array of numbers and a callback function. The
// // function should process each number in the array using the callback function and return a
// // new array of processed numbers.
// function processData(numbers, callback){
//     let processedNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         processedNumbers.push(callback(numbers[i]));
//     }
//     return processedNumbers;
// }
// function add(num) {
//     return num += num;
// }
// const numbers = [1, 2, 3, 4, 5];

// const addedNumbers = processData(numbers, add);
// console.log(addedNumbers);

// 4. Async/Await
// Rewrite the fetchData function from Question 1 using async and await.
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = [
//                 { id: 1, name: 'Alice', age: 25 },
//                 { id: 2, name: 'Bob', age: 30 },
//                 { id: 3, name: 'Charlie', age: 35 }
//             ];
//             resolve(data);
//         }, 2000);
//     });
// }
// async function displayData() {
//     const users = await fetchData();
//     console.log(users);
    
// }

// displayData();

// 5. Array Manipulation: Map
// Given an array of numbers, create a function that doubles each number using map.
// function doubleNumbers(numbers) {
//     return numbers.map(num => num * 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// const doubled = doubleNumbers(numbers);
// console.log(doubled); 

// 6. Array Manipulation: Filter
// Given an array of numbers, create a function that filters out numbers less than 10 using filter.
// function filterNumbers(numbers) {
//     return numbers.filter(num => num <= 10);
// }

// const numbers = [5, 12, 8, 130, 44, 9, 15];
// const filteredNumbers = filterNumbers(numbers);
// console.log(filteredNumbers); 

// 7. Array Manipulation: Find
// Given an array of numbers, create a function that finds the first number greater than 15 using
// find.
// function findNumber(numbers) {
//     return numbers.find(num => num > 15);
// }

// const numbers = [10, 5, 20, 30, 8];
// const find_Number = findNumber(numbers);
// console.log(find_Number); 


// 8. Array Manipulation: Reduce
// Given an array of numbers, create a function that sums all numbers using reduce.
// function reducer(total, num) {
//     return total + num;
// }

// function sumNumbers(numbers) {
//     return numbers.reduce(reducer, 0);
// }

// const numbers = [1, 2, 3, 4, 5];
// const sum = sumNumbers(numbers);
// console.log(sum); 

// 9. Object Manipulation
// Given an array of user objects, write a function to transform this array into an object where the
// keys are user IDs and the values are the corresponding user objects.
// function arrayTransforming(usersArray) {
//     const usersObj = {};
    
//     // Iterate over the array of user objects
//     usersArray.forEach(user => {
//       // Using user ID as the key and the user object as the value
//       usersObj[user.id] = user;
//     });
    
//     return usersObj;
//   }
  
//   const usersArray = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Alice' },
//     { id: 3, name: 'Bob' }
//   ];
  
//   const usersObj = arrayTransforming(usersArray);
//   console.log(usersObj);
  
// 10. Classes and Objects
// Create a Person class with a constructor that accepts name and age parameters. Add a
// method describe that returns a string describing the person.
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     describe() {
//       return `${this.name} is ${this.age} years old.`;
//     }
//   }
  
//   const person1 = new Person('Prerana', 20);
//   console.log(person1.describe()); 
  
//   const person2 = new Person('Preji', 25);
//   console.log(person2.describe()); 
  
// 11. Inheritance
// Create a Student class that extends Person and adds a grade property. Add a method study
// that returns a string indicating the student is studying.
// class Student extends Person {
//     constructor(name, age, grade) {
//       super(name, age);
//       this.grade = grade;
//     }
  
//     study() {
//       return `${this.name} is studying.`;
//     }
//   }
  
//   const student1 = new Student('John', 20, 'A');
//   console.log(student1.describe()); 
//   console.log(student1.study()); 
  
//   const student2 = new Student('Alice', 22, 'B');
//   console.log(student2.describe()); 
//   console.log(student2.study()); 
   
  
// 12. Error Handling with Promises
// Modify the fetchData function to randomly reject the promise with an error message'Failed to
// fetch data'. Handle this error using .catch when calling the function.
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       // Simulate a random success or failure
//       const random = Math.random();
//       if (random < 0.5) {
//         // Simulate a successful fetch
//         setTimeout(() => {
//           resolve("Data fetched successfully");
//         }, 1000);
//       } else {
//         // Simulate a failed fetch
//         setTimeout(() => {
//           reject("Failed to fetch data");
//         }, 1000);
//       }
//     });
//   }
  
//   fetchData()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
  
// 13. Error Handling with Async/Await
// Modify the fetchData function with async/await to handle errors using try/catch blocks.
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       // Simulate a random success or failure
//       const random = Math.random();
//       if (random < 0.5) {
//         // Simulate a successful fetch
//         setTimeout(() => {
//           resolve("Data fetched successfully");
//         }, 1000);
//       } else {
//         // Simulate a failed fetch
//         setTimeout(() => {
//           reject("Failed to fetch data");
//         }, 1000);
//       }
//     });
//   }

//   async function fetchAndHandleData() {
//     try {
//       const data = await fetchData();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   fetchAndHandleData();
  
// 14. Complex Array Manipulation
// Given an array of users, where each user has a name and an array of hobbies, create a
// function that returns an array of all unique hobbies using reduce.

// // Conceptual Questions:
// // Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.
// // Ans: Promises are used in JavaScript to handle asynchronous operations in a more manageable, predictable, and cleaner way compared to traditional callback functions. 
// // Advantages of using promises over traditional callback functions:-
// // Improves Code Readability
// // Better handling of asynchronous operations
// // Better flow of control definition in asynchronous logic
// // Better Error Handling

// // 2. What is a closure in JavaScript? Provide an example.
// // Closure in Javascript is a feature that allow inner functions to access variables from their outer scope, even after the outer function has completed execution.
// // Example: 
// function outerFunction() {
//     let text = 'Hello! I am Prerana.';

//     function innerFunction() {
//         console.log(text);
//     }

//     return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure(); 

// // 3. What is a callback function and why is it used in JavaScript?
//A callback function is a function that is passed as an argument to another function and is executed after some asynchronous operation or at a later time in the program's execution
// // 4. What are async/await in JavaScript and how do they improve asynchronous
// // programming?

// // 5. Write the difference between ES6 and JS.
// // 6. What are some of the major features introduced in ES6?

