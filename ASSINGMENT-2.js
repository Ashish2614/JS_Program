//1. WAP to find smallest element of without sorting //

// var a = [12, 3, 5,47, 8, 80, 35, 2, 1, 7, 2, 78, 9, 5, 4, 2, 8, 7, 6,11,13,17,23]
// var smallest = a[0]
// for(let i of a){
//     if(smallest>i)
//         smallest = i
// }
// console.log(`smallest element = ${smallest}`)

//2. WAP to find greatest element of Array without sorting //
// var a = [12, 3, 5,47, 8, 80, 35, 2, 1, 7, 2, 78, 9, 5, 4, 2, 8, 7, 6,11,13,17,23]
// var greatest = a[0]
// for(let i of a){
//     if(greatest<i)
//         greatest = i
// }
// console.log(`greatest element = ${greatest}`)

//3-WAP to reverse an array //
// var a = [10,39,45,54,32,9,89,90,57,34,35,65]
// a.reverse() 
// console.log(a)

//4-WAP to count occurrence of any particular element from array //

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

//5- WAP to find first and last index of any  particular element from array //
// var a = [ 1,3,3,35,65,65,76,78,34,23,13,78,67,65,35,4,5,4,5,3,2,1,34,34]
// // console.log(a)
// // var n = 3
// // var n = 65
// var n = 1  
//  var first = a.indexOf(n)
//  var last = a.lastIndexOf(n)
// console.log("First Index:",first)
// console.log("Last Index:",last)

// 6- WAP to count occurence of every element from an array 
var a = [1, 3, 3, 35, 65, 65, 76, 78, 34, 23, 13, 78, 67, 65, 35, 4, 5, 4, 5, 3, 2, 1, 34, 34]

let count = {};
for (var element of a) {
    count[element] = (count[element] || 0) + 1;
}
console.log(count);

//7- WAP to delete all repeated elements from an Array //
// var a = [ 1,3,3,35,65,65,76,78,34,23,13,78,67,65,35,4,5,4,5,3,2,1,34,34]

// var n = a.filter((element, index)=> {
//     return a.indexOf(element) === index
// })
// console.log(n)



//-------------STRING ASSINGMENT------------//

//1-WAP to count occurence of LowerCase Vowels,LowerCase Consonant,-
// - upper case Vowels and Upper Case Consonants,digits,space and special characters

// function countCharacter(a) {
//     var count = {
//         lowerVowels: 0,
//         lowerConsonants: 0,
//         upperVowels: 0,
//         upperConsonats: 0,
//         digits: 0,
//         spaces: 0,
//         specialCharacters: 0
//     }
//     for (let char of a) {
//         if (/[aeiou]/.test(char)) {
//             count.lowerVowels++
//         } else if (/[AEIOU]/.test(char)) {
//             count.upperVowels++
//         } else if (/[a - z]/.test(char)) {
//             count.lowerConsonants++
//         } else if (/[A - Z]/.test(char)) {
//             count.upperConsonats++
//         } else if (/[0 - 9]/.test(char)) {
//             count.digits++
//         } else if (/\s/.test(char)) {
//             count.spaces++
//         } else {
//             count.specialCharacters++
//         }
//     }
//     return count
// }
// var text = "Ducat India -% @ Education"
// var result = countCharacter(text)
// console.log(result)

//2- WAP to count a words in a string //

// var a = "The Ducat School Ducat Of AI Education Ducat in Noida UP"
// var wordcount = "The"

// var b = a.split(wordcount).length - 1
// console.log(`The word "${wordcount}" show ${b}`)

//3-WAP to count occurence of a any particular character in a stirng //

// va
// r str = "JavaScript is amazing programming language"
// var search = "m"
// var b = str.split(search).length - 1
// console.log(`find "${search}" character ${b} times`)

//4- WAP to count occurence of a any particular word in a stirng

// var a = "I am learning  Javascript from scratch to advanced along with full stack course"
// var word = "learning"
// var b = a.split(word).length -1
// console.log(`Occurence of "${word}" total ${b} times`)

//5- WAP to check whether a string is palindrome or not //

// function checkPalindrome(str) {
//      var reversestr = str.split('').reverse().join('')
//     if(str === reversestr) {
//         console.log(`${str} is a Palindrome`)
//     } else {
//         console.log(`${str} is not a Palindrome`)
//     }
// }
// checkPalindrome("NITIN")
// checkPalindrome("ASHISH")
// checkPalindrome("naman")


