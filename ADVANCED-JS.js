//---------HOISTING IN JS -----------//
//code send for execution //

// var a                      //creation phase //
// console.log(a)             //execution phase// 
// a = 10                     // ------//
// console.log(a)             //----------//

// var a = 10;
// var b =20;
// var sum = a + b
// console.log(sum)

// var a                 //creation phase //
// var b                 //-------------//  
// var sum               //-------------//
// a= 10                  //execution phase//
// b = 20                 //execution phase//
// console.log(sum)        //execution phase//

// scope chain lexical scoping //

// var a = 10
// function outer(){
//     var b = 20
//     function inner(){
//         var c = 30
//         console.log(`In inner function a = ${a} b = ${b} c = ${c}`)
//     }
//     inner()
//     console.log(`In outer function a = ${a} b = ${b}`)
// }
// outer()
// console.log(`In main outer scope a = ${a}`)

//------CLOSER------//

// var a = 10;
// function outer(){
//     var b = 20
//     function inner(){
//         var c = 30
//         console.log(`In inner function a = ${a} b = ${b} c = ${c}`)
//     }
//     return inner
// }
// var cl = outer()
// cl()
// cl()
// cl()
// cl()

//--------SYNCHRONOUS--------//

// function fun1(){
//     console.log("Hello World1")
// }
// function fun2(){
//     console.log("Hello World2")
// }function fun3(){
//     console.log("Hello World3")
// }function fun4(){
//     console.log("Hello World4")
// }function fun5(){
//     console.log("Hello World5")
// }
// fun1()
// fun2()
// fun3()
// fun4()
// fun5()

//----ASYNCHRONOUS-----//

// function fun1(){
//     setTimeout(()=>{
//         console.log("Hello World1")
//     },5000)
// }
// function fun2(){
//     setTimeout(()=>{
//         console.log("Hello World2")
//     },3000)
// }
//     function fun3(){
//     setTimeout(()=>{
//         console.log("Hello World3")
//     },2000)
//     }
//     function fun4(){
//     setTimeout(()=>{
//         console.log("Hello World4")
//     },3000)
//     }
//     function fun5(){
//     setTimeout(()=>{
//         console.log("Hello World5")
//     },1000)
    
// }
// fun1()
// fun2()
// fun3()
// fun4()
// fun5()
