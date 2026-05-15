//1st Type create an ARRAY using Array literal style //
// var a =[10,20,30,40,50,60,70,80,90,100]
// console.log(a.length)
// a[100] = 1000
// console.log(a.length)
// console.log(a)

//2nd create an array using empty array //

// var a = []
// a[0] = 10
// a[1] = 20
// a[2] = 30
// a[3] = 40
// a[4] = 50
// console.log(a)

//3rd Array Constructor //
// var a = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
// console.log(a)
// console.log(a.length)

// var a = Array(10, 20)
// console.log(a)
// console.log(a.length)


// var a = Array(10)
// console.log(a)
// console.log(a.length)

//4th Empty Array Constructor //
// var a = Array()
// a[0] = 10
// a[1] = 20
// a[2] = 30
// a[3] = 40
// a[4] = 100
// console.log(a)

//        [TRAVERSE THE ARRAY]-visiting every element in array   //
//1 Accessing the Array element using FOR LOOP //
//   var a = [10,20,30,40,50,60,70,80,90,100]
//   console.log(a)
//   for(let i = 0; i<a.length; i++){
//     console.log(a[i])
//   }
//WHILE LOOP//
//  var a = [10,20,30,40,50,60,70,80,90,100] 

//   let i = 0
//   while(i<a.length){
//     console.log(a[i])
// i++
// }          

//DO WHILE LOOP //

// let i = 0
// do{
//     console.log(a[i])
//     i++
// }while(i<a.length)

// FOR IN LOOP //
//  for(let i in a ){
//     console.log(a[i])
//  }

//FOR OF LOOPS//
// for(let i of a){
//     console.log(i)
// }

//1. Calculate the some of Array Elements //
// var a = [10,20,30,40,50,60,70,80,90,100]
// var sum = 0
// for( let i of a ){
//     sum = sum + i
// }
// console.log(`Sum of Array  Element = ${sum}`)

//2&3. WAP to find the sum of even and odd element in an Array and get the count too //

// var a = [12, 3, 5, 6, 20, 30, 8, 80, 35, 2, 1, 90, 100, 7, 6, 2, 56, 78, 4, 9, 5, 4, 2, 8, 7, 6]
// var even = 0
// var odd = 0
// var evencount = 0
// var oddcount = 0
// for (let i of a) {
//     if (i % 2 == 0) {
//         even += i
//         evencount++
//     }
//     else {
//         odd += i
//         oddcount++
//     }
// }
// console.log(`sum of ${evencount} Even elements = ${even}`)
// console.log(`sum of ${oddcount} Even elements = ${odd}`)

// 4. WAP to count Prime and Non Prime Number //

// var a = [12, 3, 5,47, 8, 80, 35, 2, 1, 7, 2, 78, 9, 5, 4, 2, 8, 7, 6,11,13,17,23]
// var primeCount = 0
// var nonprimeCount = 0
// for(let num of a){
//     let flag = 0
//     for(let i = 2; i<=num ** 0.5; i++){
//         if(num%i==0){
//             flag = true
//             break
//         }
//     }
//     if(flag == false && num>= 2)
//         primeCount++
//     else
//         nonprimeCount++
// }
// console.log(`Total Prime N0 = ${primeCount}`)
// console.log(`Total non Prime N0 = ${nonprimeCount}`)

//5. WAP to find smallest element without sorting //

// var a = [12, 3, 5,47, 8, 80, 35, 2, 1, 7, 2, 78, 9, 5, 4, 2, 8, 7, 6,11,13,17,23]
// var smallest = a[0]
// for(let i of a){
//     if(smallest>i)
//         smallest = i
// }
// console.log(`smallest element = ${smallest}`)

//6.WAP to find greatest element without sorting //

// var a = [12, 3, 5,47, 8, 80, 35, 2, 1, 7, 2, 78, 9, 5, 4, 2, 8, 7, 6,11,13,17,23]
// var greatest = a[0]
// for(let i of a){
//     if(greatest<i)
//         greatest = i
// }
// console.log(`greatest element = ${greatest}`)




//7.WAP to find nth smallest element from array without sorting //

// var a = [12, 3, 5, 47, 8, 80, 35, 2, 1, 7, 2, 78, 9, 5, 4, 2, 8, 7, 6, 11, 13, 17, 23]
//    let n = 0
// var smallest = a[0]
//  for(let i of a){
//     if (smallest > i) {

//         smallest = 4
//     }
// }
// console.log(`smallest ${n}th element = ${n}`)

// WAP to find FIRST,SECOND,THIRD smallest array without sorting 


//WAP to reverse an array //
// var a = [10,39,45,54,32,9,89,90,57,34,35,65]
// a.reverse() 
// console.log(a)

//WAP to count occurrence of any particular element from array //

// var a = [ 1,3,3,35,65,65,76,78,34,23,13,78,67,65,35,4,5,4,5,3,2,1,34,34]
 
// // var n = 3
// // var n = 4 
// // var n = 1 
// let count = 0

// for(var element of a){
//     if(element === n){
//         count++
//     }
// }
// console.log(count)

// WAP to find first and last index of any  particular element from array //
var a = [ 1,3,3,35,65,65,76,78,34,23,13,78,67,65,35,4,5,4,5,3,2,1,34,34]
// console.log(a)
// var n = 3
// var n = 65
var n = 1  
 var first = a.indexOf(n)
 var last = a.lastIndexOf(n)
console.log("First Index:",first)
console.log("Last Index:",last)




//JOIN AND TO TOO STRING METHOD // -> To string convert an array into string and use, as separator join()-convert an array into string and you can specify, separator by default join function use as separator of

// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// console.log(a.toString())
// console.log(a.join())
// console.log(a.join(" "))
// console.log(a.join("/"))
// console.log(a.join("-"))
// console.log(a.join("---"))

//    ARRAY KEYWORDS //

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(a)

//push(): //

// console.log(`Upadated Length After Insertion of 110 = ${a.push(110)}`)
// console.log(a)

//  console.log(`Upadated Length After Insertion of ,110,120,130,140,150 = ${a.push(110,120,130,140,150)}`)
// console.log(a)

//  a.push(160,170,180,190,200)
// console.log(a)

//unshift(): //

// console.log(`Updated Length After Insertion of 9 = ${a.unshift(9)}`)
// console.log(a)

// console.log(`Updated Length After Insertion of 5,6,7,8, = ${a.unshift(5,6,7,8)}`)
// console.log(a)
// a.unshift(1,2,3,4)
// console.log(a)

//POP() //
// console.log(`Deleted Element from Array After pop operation = ${a.pop()}`)
// console.log(a)
// a.pop()
// a.pop()
// a.pop()
// a.pop()
// console.log(a)

//DELETE(): //

// console.log(`Deleted Elements From Array = ${a.splice(3,5)}`)
// console.log(a)

// console.log(`Deleted Elements From Array = ${a.splice(3,0,34,35,36)}`)
// console.log(a)

// delete a[3]
// delete a[5]
// delete a[7]
// delete a[8]
// delete a[20]
// console.log(a)

//slice(): //

//  var a = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
// console.log(a.slice(4,15))                  // return all element from 5th to 14th Index//

// console.log(a.slice(15))                // return all element from 15th Index //

// console.log(a.slice(-15))               // return (-) last 15 element from Array //

//concat(): //

// var a = [1,2,3,4,5]
// var  b = [10,20,30,40,50]
// var c = [100,200,300,400,500]
// var d = [true,true,false,false,true,true]
// var e = ["Nitin","Sumit","Tarun","Mohit"]
// var f = a.concat(b,c,d,e)
// console.log(f)

//entries()://
// for(let items of a.entries()){
//     console.log(item)
// }

// include();
// indexeOf();
// lastindexOf();

// var a = [10,20,30,40,50,60,70,80,20,30,40,50,60,10,30,40,90]
// console.log(a.includes(50))
// console.log(a.indexOf(500))
// console.log(a.lastIndexOf(50))
// console.log(a.lastIndexOf(500))

//reverse(): //
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// a.reverse()
// console.log(a)

//   HIGHER ORDER FUNCTION //

// var a = [18, 102, 13, 14, 15, 16, 45, 56, 7, 6, 78, 89]
// functioncheck(item); {
//     return item % 5 == 0
// }
// functioncheck(item); {
//     let flag = false
//     for (let i = 2; i <= item ** 0.5; i++) {
//         if (item % i == 0) {
//             flag = true
//             break
//         }
//     }

//             functioncheck(item);{
//                 let flag = false
//                 for(let i = 2; i<=item ** 0.5; i++){
//                     if(item % i == 0){
//                         flag = true
//                         break
//                     }
//                 }

//             if(flag === false && items >=2)
//                 return true
//             else
//                 return false
//         }
//     }
//         console.log(a.find(check))

//some() : return true if atleat ine item from array pass a test //

// var a = [ 10,20,30,40,50,60,70,80,90,100,3]
// function check(item){

//     let flag = false
//     for( let i = 2; i<= item ** 0.5; i++){
//         if(item % i == 0){
//             flag = true
//             break
//         }
//     }
// if(flag === false && item >= 2)
//     return true
// else
//     return false
// }
// console.log(a.some(check))

//sort() : arrange

//sort number //
// var a = [2, 3, 4, 5, 5, 8, 56, 35, 78, 97, 90, 35, 5, 6, 8, 9, 7]
// console.log(a)
// // a.sort ((x, y) => x - y)             //ascending //
// a.sort((x, y) => y - x)              //descending//

//sort string //

// var a = [ "Nitn", "Amit", "Sumit", "Jitendra", "Navin", "Akash", "Mohit"]
//   a.sort()
//   console.log(a)

//ARRAY DISTRUCTURING //

// var data = [1001, "Nitin Chauhan", "Trainer", 18900, "Faridabad", "Haryana"]
// console.log(`
//     Employee Id : ${data[0]}
//     Name        :${data[1]}
//     Designation :${data[2]}
//     Salary      :${data[3]}
//     City        :${data[4]}
//     State       :${data[5]}
// `)


// var[id, name, dsg, salary, city, state] = data
// console.log(`
//     Employee Id : ${id}
//     Name        :${name}
//     Designation :${dsg}
//     Salary      :${salary}
//     City        :${city}
//     State       :${state}
// `)