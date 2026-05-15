//REST OPERATOR//
// function test(a,b,c,...x){
//     console.log(`a = ${a} b = ${b} c = ${c} Extra = ${x}`)
// }
// test(10,20,30)
// test(10,20,30,40)
// test(10,20,30,40,50)
// test(10,20,30,40,50,60)
// test(10,20,30,40,50,60,70)
// test(10,20,30,40,50,60,70,80)
// test(10,20,30,40,50,60,70,80,90)
// test(10,20,30,40,50,60,70,80,90,100)

// //Spread Operator-------//

// function test(a,b,c,d,e){
//     console.log(`a = ${a} b = ${b} c = ${c} d = ${d} e = ${e}`)
// }
// var arr = [10,20,30,40,50]
// test(...arr)

// //Shallow Copy $$ Deep Copy //

// var a = [10,20,30,40,50]
// var b = a      //shallow copy//
// var b =[...a]  //deep copy//
// console.log(a,b)
// b[2] = 300
// console.log(a,b)

// var obj1 = {
//     a:10,
//     b:20
// }
//  var obj2 = obj1  //shallow copy//
// var obj1 = [...obj1]   //deep copy//
// console.log(obj1,obj2)

//-------Generator--------//

// function* test() {
//     console.log("Hellow World1")
//     yield 1
//     console.log("Hellow World2")
//     yield 2
//     console.log("Hellow World3")
//     yield 3
//     console.log("Hellow World4")
//     yield 4
//     console.log("Hellow World5")
//     yield 5
// }
// for (let i of test()) {
//     console.log(i)
// }

//New Global Method //

// console.log(Number.EPSILON)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER +1)
// console.log(Number.MAX_SAFE_INTEGER +2)
// console.log(Number.MAX_SAFE_INTEGER +3)
// console.log(Number.MAX_SAFE_INTEGER +4)

// console.log(Number.isInteger(25 ** 0.5))
// console.log(Number.isInteger(50 ** 0.5))

// console.log(Number.isSafeInteger(99**7))
// console.log(Number.isSafeInteger(99**8))
// console.log(Number.isSafeInteger(99**9))

//--ASYNCHRONOUS ITERATION--//

// async function* test() {
//     setTimeout(()=>{
//         console.log("Hello World 1")
//     },1000)
//     yield 1
//     setTimeout(()=>{
//         console.log("Hello World 2")
//     },2000)
//     yield 2
//     setTimeout(()=>{
//      console.log("Hello World 3")
//     },3000)
//     yield 3
// }
// async function sample() {
//     for await(let i of test()){
//         console.log(i)
//     }
// }
// sample()

//PROMISE FINALLY //
//  var p = new Promise((res , rej) => {
//     setTimeout(()=>{
//         res("Promise is Resolved")
//         rej("Promise is Rejected")
//     },2000)
//  })
//  p.
//  then(value => {
//     console.log(value)
//  })
//  .catch(error => {
//     console.log(error)
//  })
//  .finally(()=>{
//     console.log("Finally Block is Called")
//  })

// OBJECT REST PROPERTY //

// var emp = {
//    id : 1001,
//    name : "Ashish",
//    dsg : "Trainer",
//    Salary : 189000,
//    city : "Faridabad",
//    State : "Haryana"
// }
// var { id, name, ...x} = emp
// console.log(id)
// console.log(name)
// console.log(x)

//REVISED FUNCTION TO STRING() //

// function test(){
// console.log("Hello world1")
// console.log("Hello world2")
// console.log("Hello world3")
// console.log("Hello world5")
// console.log("Hello world6")
// }
// console.log(test.toString(1))

//ARRAY FLAT //

// var a = [[10, 20, 30], [40, 50, 60], 70[80, 90, 100]]
// console.log(a)
// console.log(a.flat(1))
// console.log(a.flat(1).map(x => x * 5))

// var a = [[[10, 20, 30], [40, 50, 60], 70[80, 90, 100]]]
// console.log(a)
// console.log(a.flat(2))
// console.log(a.flat(2).map(x => x * 5))

// var a = [[[10, 20, 30], [40, 50, 60], 70[80, 90, 100]]]
// console.log(a)
// console.log(a.flat(3))
// console.log(a.flat(3).map(x => x * 5))

// var a = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[10, 20, 30], [40, 50, 60], 70[80, 90, 100]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// console.log(a)
// console.log(a.flat(Infinity))
// console.log(a.flat(2).map(x => x * 5))

//FLAT MAP //

// var a = [[10, 20, 30], [40, 50, 60], 70[80, 90, 100]]
// console.log(a.map(x=>x))
// console.log(a.flatMap(x => x))

// OBJECT.FROMENTERIES() //

// var data = [
//    [`id`, 1001],
//    [`Name`, `Ashish`],
//    [`dsg`, `Trainer`],
//    [`salary`, 189000],
//    [`city`, `faridabad`],
//    [`state`, `Haryana`],
// ]
// console.log(Object.fromEntries(data))

//ECMA SCRIPT 2020 //
//  var num = 5000n
//  var f = 1n
//  for(let i = num; i>=1; i--){
//    f = f * i 
//  }
//  console.log(`Factorial of ${num} is = ${f}`)

// NULLISH COALESCING(??) //
//OTIONAL CHAINING(?) //
// var emp = {
//    id : 1001,
//    name : "Ashish",
//    dsg : "Trainer",
//    salary : 0,
//    satatus : false
// }
// console.log(`
//    Employee id : ${emp.id?? "N/A"}
//    Name : ${emp.name?? "N/A"}
//    Designation : ${emp.dsg?? "N/A"}
//    Salary : ${emp.salary?? "N/A"}
//    Satatus : ${emp.status?? "N/A"}
//    City : ${emp.city?? "N/A"}
//    State : ${emp.state?? "N/A"}
//    `)

//Promise all settled //

// var p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res("Promise1 is Resolved ")
//         rej("Promise1 is Rejected ")
//     }, 2000)
// })
// var p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res("Promise2 is Resolved ")
//         rej("Promise2 is Rejected ")
//     }, 4000)
// })
// var p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res("Promise3 is Resolved ")
//         rej("Promise3 is Rejected ")
//     }, 6000)
// })
// Promise.allSettled([p1,p2.p])
// .then(value => {
//     console.log(value)
// })

//ECMA SCRIPT 2021 //
//----NUMERIC SEPARATION------//
// console.log(10_00_000)

//PRIVATE CLASS METHOD //

// class Test{
//     #show(){
//         console.log("In show() of Test class")
//     }
//     display(){
//         this.#show()
//         console.log("In display() of Test class")
//     }
// }
// var obj = new Test()
// obj.display()

// Private Getter and Setter //

// class Employee{
//     constructor(id,name,dsgk,city,state){
//         this.id = id
//         this.name = name
//         this.city = city
//         this.state = state
//     }
//     set #setsalary(num){
//         this.salary = num
//     }
//     get #display(){
//         console.log(`
//             Employee Id = ${this.id}
//             Name = ${this.name}
//             Salary = ${this.salary}
//             City = ${this.city}
//             State = ${this.state}
//             `)
//     }
//     show(num){
//         this.#setsalary = num
//         this.#display
//     }
// }
// var emp = new Employee(1001,"Nitin Chauhan","Trainer","Faridabad","Harayana")
// emp.show(189000)

//PROMISE ANY//

// var p1 = new Promise((res, rej) =>{
//     setTimeout(()=>{
//         res("Promise1 is Resolved")
//         rej("Promise1 is Rejected")
//     },2000)
// })

// var p2 = new Promise((res, rej) =>{
//     setTimeout(()=>{
//         res("Promise2 is Resolved")
//         rej("Promise2 is Rejected")
//     },2000)
// })

// var p3 = new Promise((res, rej) =>{
//     setTimeout(()=>{
//         res("Promise3 is Resolved")
//         rej("Promise3 is Rejected")
//     },2000)
// })

// Promise.any([p1, p2, p3])
// .then(value => {
//     console.log(value)
// })
// .catch(error => {
//     console.log(error)
// })

//ECMA SCRIPT 2022 //
//----ARRAY AT()----//
//  var a = [10,20,30,40,50]
//  console.log(a[3])
//  console.log(a.at[3])
//  console.log(a[-3])
//  console.log(a.at[-3])

//------STRING AT()------//
//   var a = "Ducat"
//  console.log(a[3])
//  console.log(a.at[3])
//  console.log(a[-3])
//  console.log(a.at[-3])

//------OBJECT.HASOWN()--------//

// var emp = {
//     id : 1001,
//     name : "Summut",
//     dsg : "Trainer",
// }
// console.log(Object.hasOwn(emp,"id"))
// console.log(Object.hasOwn(emp,"name"))
// console.log(Object.hasOwn(emp,"dsg"))
// console.log(Object.hasOwn(emp,"salary"))

// ERROR CAUSE //

// try{
//     var a = 10
//     var b = 0
//     if (b == 0)
//         throw new Error("Division Not Possible", {cause : "we can't divide a Number with 0"})
// else 

//     console.log(a/b)
// } catch(error){
//     console.log(error)
//  console.log(error.class)
// }

// CLASS FIELD DECLARATION //
// class Test{
//     a = 10
//     b = 20
//     display(){
//         console.log(`a = ${this.a} b = ${this.b}`)
//     }
// }
// var obj = new Test()
// obj.display()

// PRIVATE METHOD AND FIELD //
// #a = 10
// #b = 20
// #display()
// {
//     console.log(`a = ${this.#a} b = ${this.#b}`)
// }
// show()
// {
//     this.#display()
// }
// var obj = new Test()
// obj.show()

//ECMA SCRIPT 2023 //

// ------ ARRAY TOREVRSED()------- //

// var a = [23,3,2,1,45,56,55,65, 75,76,6667,5555,876,87,90, 23,43, 98, 90, 10, 109]
// console.log(a)
// var b = a.toReversed()
// console.log(a)
// console.log(b)

//----ARRAY TO SORTED()-----//

// var a = [23,3,2,1,45,56,55,65, 75,76,6667,5555,876,87,90, 23,43, 98, 90, 10, 109]
// console.log(a)
// var b = a.toSorted((x,y) => x-y)
// console.log(a)
// console.log(b)

//-----Array to spliced()------//

// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// var b = a.toSpliced(3,5)
// console.log(a)
// console.log(b)

//----Array with()----//

// var a = [10,20,30,40,50]
// var b = a.with(3,400)
// console.log(a)
// console.log(b)

//ECMA SCRIPT2024//

//----OBJECT.GROUPBY()------//
//-----MAP.GROUPBY()-------//

// var data = [
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Ashish", dsg: "ceo", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Bhavna", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nit", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "itin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Niti", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Ntin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
//     { id : 1001, name: "Nitin", dsg: "Trainer", salary: 189000, City: "Faridabad", State: "Haryana"},
// ]

// console.log(Object.groupBy(data,({dsg})=>dsg))

//ECMA SCRIPT 2025//

// var a = new Set([10,20,30,40,50,60])
// var b = new Set([30,40,50,60,70,80,90,100])

// console.log(a.union(b))
// console.log(a.intersection(b))
// console.log(a.difference(b))
// console.log(b.difference(a))
// console.log(a.symmetricDifference(b))

// var a = new Set([10,20,30,40,50,60])
// var b = new Set([30,40,50])
// var c = new Set([30,40,50,60,70,80,90])
// var d = new Set([70,80,90,100])

// console.log(b.isSubsetOf(a))
// console.log(a.isSubsetOf(b))
// console.log(a.isSupersetOf(b))
// console.log(b.isSupersetOf(a))
// console.log(a.isDisjointFrom(d))
// console.log(a.isSubsetOf(b))

// NEW ITERATOR HELPERS IN ES2025 //

// var itr1 = Iterator.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
// var itr2 = Iterator.from("Ducat Education Noida")

// for(let i of itr1.drop(5)){
//     console.log(i)
// }
// for(let i of itr2.drop(5)){
//     console.log(i)
// }
// for(let i of itr1.take(5)){
//     console.log(i)
// }
// for(let i of itr2.take(5)){
//     console.log(i)
//     console.log(itr1.every(x => x % 2 == 0))
// }

// for(let i of itr1.filter(x=> x%20 == 0)){
//     console.log(i)
// }
// console.log(itr1.find(x=> x % 50 == 0))

// for(let i of itr1.flatMap(x=> [x*5])){
//     console.log(i)
// }

// itr1.forEach(element => {
//     console.log(element)
// })

// console.log(itr1.reduce((prev, current) => prev + current))
// console.log(itr1.some(x => x % 500 == 0))



let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);