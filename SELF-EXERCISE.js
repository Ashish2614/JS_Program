//REVISION //
// ROCK-PAPER-SCISSORS //

// function rps(user, computer){
//     if(user === "rock" && computer === "scissors")  return "user";
//     if(user === "scissors" && computer === "paper") return "user";
//     if(user === "paper" && computer === "scissors") return "computer";

//     return "computer"
// }
// console.log(rps("rock", "scissors"))

//WAP to find a number between 1 to 50 which is devisible by 3 //

// for (let i = 0; i <= 50; i++) {
//     if (i % 3 === 0)
//         console.log(i)
// }

//Take user input from 1 and if that number is even or odd  //

// let val = prompt("Enter ther Number: ")

// for (let i = 1; i <= val; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

// var x = 5
// console.log(`x`)
// // x= 5;



// function outer(){
//      let count = 0

//     return function inner(){
//         count ++
//         console.log(count)
//     }
// }

// const fn = outer()
// fn()
// fn()


// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }



// for(let i = 1; i<= 3; i++){
//     setTimeout(() => {
//         console.log(i);
//     },1000)
// }

//WAP TO MAKE BMI calculator //

// function bmi(weight, height) {
//     return weight / (height * height);
// }
// console.log(bmi(85, 1.67).toFixed(2));

//Create reusable discount calculator //

// function discountCalculator(discount) {
//         return function (price) {
//             return price - price * (discount / 100)
//         }

// }
// let discounter = discountCalculator(20)
// console.log(discounter(200))


//---------DOM(DOCUMENT OBJECT MODLE)----------//

// let h1 = document.querySelector("h1");
// h1.textContent = "Hello How Are You";

// let a = ["java", "CSS", "bootstrap"]
// a.push("stack")
// a.unshift("fullstack")
// console.log(a)
// console.log(a)
// a[3] = "menubar"
// // console.log(a)
// console.log("Original Array:"  +a)
// let first = a.pop()
//  console.log("After removing first:" +a)
//  let fst  = a.shift()
//  console.log("After removing fst :" +a)
//  let splice = a.splice(1,2)
//  console.log("After removing 1 and 2 element from last index:" +a)

// console.log(a.length)

// let length = a.length
// console.log("Array Length:" +length)

//increasing and decreasing the length of the array //

// a.length = 8;
// console.log("After increasing the length:", a)
// a.length = 1;
// console.log("After decreasing length:", a)

//  for(let i = 0; i<a.length; i++){
//     console.log(a[i])
//  }
//------------CONCAT-------------
// let a = ["java", "CSS", "bootstrap"]
// let b = ["mern", "jsk", "devops"]

// let add = a.concat(b)
// console.log("Concat an arrar;", add)

// console.log(a.toString())

//identifying an array of a javascript //
// const courses = ["HTML", "CSS", "Javascript"];
// console.log("Using Array.isArray() method: ", Array.isArray(courses))
// console.log("Using instanceof method: ", courses instanceof Array)/

// function myFunction(callback) {
//     setTimeout(() => {
//         callback(data);
//     },2000);
//         const data = { name: "Aman", age: 21 };
//             setTimeout(() => {
//         const data1 = { name: "Ashish", age: 25 };
//         callback(data1);
//     }, 3000);
// }

// // myFunction((data1) => {
// //     console.log("Data:", data1)
// // });
//     myFunction((data) => {
//     console.log("Data:", data);
// })


