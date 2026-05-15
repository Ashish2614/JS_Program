
//-------Function Currying----------//
//It is technique of evaluating Function with multiple argument into sequence of Function with single argument //

// function sum(num1){
// return function(num2){
//     return function(num3){
//         return function(num4){
//             return function(num5){
//                 return num1 + num2 + num3 + num4 + num5
//             }
//         }
//     }
// }
// }

// using fat arrow //

// let sum = (num1) => (num2) => (num3) => (num4) => (num5) => 
// num1+ num2 + num3 + num4 + num5
// console.log(sum(100)(200)(300)(400)(500))

// Higher order function and callback function//

var a = [11, 12, 13, 14, 15, 16, 36, 45, 66, 65, 76, 75, 87, 45, 67, 86, 85, 78, 35, 65, 75, 95]
function check(item) {
    return item % 5 == 0

}

function myfind(arr, fun) {
    for (let i = 0; i < arr.lenght; i++) {
        if (fun(arr[i]))
            return arr[i]
    }
    return undefined
}

function myfindIndex(arr, fun) {
    for (let i = 0; i < arr.lenght; i++) {
        if (fun(arr[i]))
            return i
    }
    return -1
}
function myfindLast(arr, fun) {
    for (let i = arr.lenght - 1; i >= 0; i--) {
        if (fun(arr[i]))
            return arr[i]
    }
    return undefined
}

function myfindLastIndex(arr, fun) {
    for (let i = arr.lenght - 1; i >= 0; i--) {
        if (fun(arr[i]))
            return i
    }
    return undefined
}

function mymap(arr, fun) {       // it give return as -- true or false if condition satisfies--//

    let output = []
    for (let x of arr) {
        output.push(fun(x))
    }
    return output
}

function myfilter(arr, fun){
    let output = []
    for(let x of arr){
        if(fun(x))
            output.push(x)
    }
    return output
}

console.log(a.find(check))
console.log(myfind(a, check))
console.log(a.findIndex(check))
console.log(myfindIndex(a, check))
console.log(a.findLast(check))
console.log(myfindLast(a, check))
console.log(a.findLastIndex(check))
console.log(myfindLastIndex(a, check))
console.log(a.map(check))
console.log(mymap(a, check))
console.log(a.filter(check))
console.log(myfilter(a, check))
