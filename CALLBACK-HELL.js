//callback hell//

// function test() {
//     setTimeout(() => {
//         console.log("Hello World1")
//         setTimeout(() => {
//             console.log("Hello World2")
//             setTimeout(() => {
//                 console.log("Hello World3")
//                 setTimeout(() => {
//                     console.log("Hello World4")
//                     setTimeout(() => {
//                         console.log("Hello World5")

//                     }, 2000)
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
//     }
//     test()

//-----------PROMISE----------//
//producing code//

var p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise1 is Resolved")
        rej("Promise1 is Rejected")
    }, 2000)
})
var p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise2 is Resolved")
        rej("Promise2 is Rejected")
    }, 4000)
})
var p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise3 is Resolved")
        rej("Promise3 is Rejected")
    }, 6000)
})

//consuming code//

// p1
//     .then((value) => {
//         console.log(value)
//         p2
//             .then((value) => {
//                 console.log(value)
//                 p3
//                     .then((value) => {
//                         console.log(value)
//                     })
//                     .catch(error => {
//                         console.log(error)
//                     })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     })
//     .catch(error => {
//         console.log(error)
//     })

//async/await and exception headline //

// async function getPromise() {
//     try{
//         console.log(await p1)
//         console.log(await p2)
//         console.log(await p3)
//     } catch(error){
//         console.log(error)
//     }
// }getPromise()
