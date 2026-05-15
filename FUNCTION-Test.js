// function test(){
//     console.log("In The Function")
// }
// test()
// test()
// test()
// test()
// test()

//Example//


// function fun1() {
//     console.log("In fun1 function")
//     fun2()
//     console.log("Back to fun1 function")
// }
// function fun2() {
//     console.log("In fun2 function")
//     fun3()
//     console.log("Back to fun2 function")
// }
// function fun3(){
//     console.log("In fun3 function")
// }
// console.log("In main Gobal Space")
// fun1()
// console.log("Back to main Global Scope")

//1. Function without Return Value withour Parameter//

// function add() {
//     var a = 10
//     var b = 20
//     var sum = a + b
//     console.log(`Sum = ${sum}`)
// }
// function test() {
//     add()
// }
// test()

//2. Function with Return Value Without Parameter//

// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// function test(){
//     var s = add()
//     console.log(`Sum = ${s}`)
// }
// test()

//3. Function without Return Value with Parameter//

// function add(x, y) {
//     var sum = x + y
//     console.log(`sum = ${sum}`)
// }
// function test() {
//     var a = 10
//     var b = 20
//     add(a, b)
// }
// test()

//4. Function with Return Value with Parameter//

// function add(x,y){
//     var sum = x+y
//     return sum
// }
// function test(){
//     var a = 10
//     var b = 20
//     var s = add(a,b)
//     console.log(`sum = ${s}`)
// }


//example-----Sum Digit using function //
// function sumDigit(num){
//     let sum = 0
//     while(num!=0){
//         let r = num%10
//         sum = sum + r
//         num = parseInt(num/10)
//     }
//     return sum
// }
// console.log(sumDigit(12345))
// console.log(sumDigit(9845))
// console.log(sumDigit(9845))
// console.log(sumDigit(30045))
// console.log(sumDigit(345))
// console.log(sumDigit(9245))

//DEFAULT PARAMETER OR OPTIONAL PARAMETER//

function test(a = 0, b = 0, c = 0) {
    console.log(`a=${a} b = ${b} c= ${c}`)
}
// test(10, 20, 30)
// test(10, 20)
// test(10) 
test()
