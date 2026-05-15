//1. REGULAR FUNCTION //
//  (function add(){
//     var a = 10
//     var b = 20
//     var sum = a + b
//     console.log(`sum = ${sum}`)
//  })()

// let s = (function add(){
//     var a = 10 
//     var b = 20                          // ARRAY function with return value wihtout parameter // 
//     var sum = a + b
//     return sum 
// })()
// console.log(`sum = ${s}`)

// (function add (a,b){
//     console.log(`sum = ${a + b}`)          // ARRAY function with return value with parameter //
// })(10,20)
// let s = (function add(a,b){
//     return a + b
// })(10,20)
// console.log(`sum = ${s}`)

//2. ANONYMOUS FUNCTION //
// (function (){
//     var a = 10
//     var b = 20
//     var sum = a + b
//     console.log(`sum = ${sum}`)
// })()

// (function (a,b){
//     console.log(`sum = ${a + b}`)  
// })(10,20)

// let s = (function (a,b){
//     return a + b
// })(10,20)
// console.log(`sum = ${s}`)

// let s = (function(){
//     var a = 10
//     var b = 20
//     var sum = a+ b
//     return sum
// })()
// console.log(`sum = ${s}`)

//3. FAT ARROW FUNCTION //
// (() => {
//     var a = 10
//     var b = 20
//     var sum = a + b
//     console.log(`sum = ${sum}`)
// })()

// let s = (() => {
//     var a = 10
//     var b = 20
//     var sum = a + b
//     return sum 
// })()
// console.log(`sum = ${s}`)

// ((a,b)=> console.log(`sum = ${a+b}`))(10,20)

// let s = ((a,b)=> a+b)(10,20)
// console.log(`sum = ${s}`)

//HIGHER ORDER FUNCTION && CALL BACK FUNCTION //
// |----if it is passed as an argument into a higher order function //
//    |-----it takes another function as an argument //

// function test(cb){
//     console.log("In higher order function test")
//     cb()
//     console.log("Back to higher order function test")
//     cb()
//     console.log("Back to higher order function test")
//     cb()
//     console.log("Back to higher order function test")
// }
// function sample(){
//     console.log("In callback sample")
// }
// test(sample)

// MAGICAL NUMBER(NIVEN NUMBER also k/a HARSHAD NUMBER)----Number-81,  Sum of Digits[s](8+1 = 9)  Reverse of Sum[s'] (9), calculation(s * s' => 9 * 9 = 81)
//                  1458, 1+4+5+8 = 18                      81                            18 * 81 = 1458  //
//                  1729, 1+7+2+9 = 19                      91                              19 * 91 = 1729 // 

function fun(num1, num2, num3, num4, cb){
    cb(num1)
    cb(num2)
    cb(num3)
    cb(num4)
}
function check(n){
    let num = n
    let sum = 0
    while(num != 0) {
        let r = num % 10
        sum = sum + r
        num = parseInt(num / 10)
    }
    num = sum
    rev = 0
    while(num != 0) {
        let r = num % 10
        rev = rev * 10 + r
        num = parseInt(num / 10)
    }
    if (sum * rev == n)
        console.log(`${n} is a magical number`)
    else
        console.log(`${n} is not a magical number`)
}
    fun(1458, 1729, 1788, 81, check)

