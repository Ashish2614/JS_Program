// function test(){
//     return[10,20,30,40]
// }
// console.log(test())

//REGULAR FUNCTION //
// function add(){
//     var a = 10
//     var b = 20                    // without return /(/
//     var sum = a + b
//     console.log(`sum = ${sum}`)
// }
//add()


//add() with return //
// function add(){
// var a = 10
// var b = 20
// var sum = a+b
// return sum
// }
// console.log(`sum = ${add()}`)
//---------------------------------//

// function add(a,b){
//     console.log(`sum = ${a+b}`)
// }
// add(10,20)

// function add(a,b){
//     return a+b
// }
// console.log(`sum = ${add(10,20)}`)
//----------------------------------------//

//ANONYMOUS FUNCTION //
// var add = function(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     console.log(`sum = ${sum}`)
// }
// add()

// var add = function(){
//     var a = 10
//     var b = 20
//     var sum = a + b
//     return sum
// }
// console.log(`sum = ${add()}`)

// var add = function(a,b){
//     console.log(`sum = $(a + b)`)
// }
// add(10,20)

// var add = function(a,b){
//     return a+b
// }
// console.log(`sum = ${add(10,20)}`)
//----------------------------------------------//

// ARROW FUNCTION OR FAT ARROW FUNCTION //
//    var add =()=> {
//     var a = 10
//     var b = 20
//     var sum = a+b
//     console.log(`sum = ${sum}`)
//    }
//    add()

// var add = () =>{
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// console.log(`sum = ${add()}`)

// var add = (a,b){
//     console.log(`sum = ${a+b}`)
// }
// (a,b)=> console.log(`sum = ${a+b}`)
// add(10,20)

// var add = (a,b) => {
//     return a+b
// }
// var add = (a,b) => a+b
// console.log(`sum = ${add(10,20)}`)
//--------------------------------------------//

//STORAGE CLASSIFICATION //
// function test(){
//     if(true){
//         a = 10         //global scope variable //
//         var b = 20         //function level variable//
//         let c = 30         // block level variable //
//         const d = 30    // block level variable //
//         console.log(`In if block of test definiton a= ${a} b =${b} c =${c} d = ${d}`)
//     }

//     console.log(`In test function a = ${a} b = ${b}`)
// }
//      test()    
// console.log(`In main scope a = {a}`)

//     function sample(){
//         console.log(`In sample function a = ${a}`)
//     }
// sample()

//[EXAMPLES]//
//A- variables //
//  var a = 10
//  console.log(a)

// var a = 20
//  console.log(a)

 //B- LET //
//  let a = 10                   //It will show error because it will block //
//  console.log(a)

// let a = 20
// console.log(a)
 
//C-Const //
// const a = 10
// console.log(a)                  //It will show error because it will block //
// const a = 20
// console.log(a)

//  var a = 10
//  console.log(a)
// {
//  var a = 20
//   console.log(a)
// }
// console.log(a)

//RECURSION: WHEN FUNCTION CALL ITSELF //

var a = 0
function fun(){
    a++
    console.log("In the function")
    if(a<5)
        fun()
    console.log("Back to fun function")
}
console.log("In main global scope")
fun()
console.log("Back to main global scope")
function fun(a){
    a++
    console.log("In fun function",a)
    if(a<5)
        fun()
    console.log("Back to fun function",a)
}
    console.log("In the main global scope")
    fun(0)
    console.log("Back to main global scope")


