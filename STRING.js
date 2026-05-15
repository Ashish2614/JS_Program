//STRING CONSTANT //
//  var a = 'Hello World'
//  var b = "Hello world"
//  var c = `Hello world`
//  var d = 'a'

//  console.log(a,typeo{f a)
//  console.log(b,typeof b)
//  console.log(c,typeof c)
//  console.log(d,typeof d)

//STRING USING LOOP //
// var a = "DUCAT EDUCATION NOIDA"

//STRING USING FOR LOOP //
// for( let i = 0; i<a.length; i++){
//     console.log(a[i])
// }

//STRING USING WHILE LOOP //
// let i = 0
// while(i<a.length){
//     console.log(a[i])
//     i++
// }

//STING USING FOR IN LOOP //
// for( let i in a ){
//     console.log(a[i])
// }

//STRING USING FOR OF LOOP //
// for(let i of a){
//     console.log(i)
// }

//STRING METHOD //
// charAt() 
// at() 

// var a = "Ducat"
// console.log(a[0])
// console.log(a.charAt[0])
// console.log(a.at[0])

// console.log(a[1])
// console.log(a.charAt[1])
// console.log(a.at[1])

// console.log(a[2])
// console.log(a.charAt[2])
// console.log(a.at[2])

// console.log(a[-2])
// console.log(a.charAt[-2])
// console.log(a.at[-2])

// var a = "Ducat Educational Noida"
// console.log(`a.char
//     CodeAt()`)
// for(let i in a){
//     console.log(`${a[i]} = ${a.charCodeAt(i)}`)
// }

//fromCharCode(): convert unicode into character//
// for(let i = 0; i<=5000; i++){
//     document.writeln(`${i} = ${String.fromCharCode(i)}`)
// }

//indexOf() ;//

//  var a = "Javascript is a high level scripting language"
// console.log(a.indexOf("script"))
// console.log(a.lastIndexOf("script"))
// console.log(a.search("script"))
// console.log(a.includes("script"))

//-----Copy a string into another-------//
// var b = a
// console.log(`original string is "${a}"`)
// console.log(`original string is "${b}"`)

//concat(): //
// var a = "Ducat Education Noida"
//  var a = "Ducat "
//  var b = "Edication "
//  var c = "Noida"
//  var d = a+b+c
//  var e = a.concat(b,c)
//  console.log(d)
//  console.log(e)

//startsWith(): check whether string starts with specific substring or not //
//endsWith(): check whether string end wiht specific substring or not //
// var a = prompt("Enter the String: ")
// if (a.startsWith("www."))

//     document.writeln(' ${a} is a domain Name')

//     else if(a.endsWith("@gmail.com"))
    
//     document.writeln('${a} is Gmail Address')

// else 

//         document.writeln('${a} is a Normal String')

//toUpperCase(): //
// toLocaleUpperCase(): 
// toLowerCase()
// toLocaleLowerCase():

// console.log(a.toUpperCase())
// console.log(a.toLocaleUpperCase())
// console.log(a.toLowerCase())
// console.log(a.toLocaleLowerCase())


//substr(): return a substring from position to number of characters 
//substring(): return substring from position to position charcters
//slice(): return substring but not Index

// console.log(a.substr(17,22))         //return 22 character from 17 index//
// console.log(a.substring(17,22))       //return character from 17 to 21st index //
// console.log(a.slice(17,22))          //return character from 17 to 21st //
// console.log(a.slice(22))             //return character from 22 index //
// console.log(a.slice(-22))            //return last 22 character // 

//  var a = "Javascript is a high level scripting language"

// repeat() : create number of copies of string
// console.log(a.repeat(10)) 

// replace() : replace substring with another substring 
// replaceAll(): ---------------------------------------everytime

// console.log(a)
// console.log(a.replace("","-"))
// console.log(a.replaceAll(" "))
// console.log(a.replaceAll("","- "))

// split()

// console.log(a.split())
// console.log(a.split(" "))
// console.log(a.splitAll("  "))
// console.log(a.split(" ").reverse().join(" "))
// console.log(a.split().reverse().join(""))

// trim(): remove all white space character from string from both side 
//trimStart(): ---------------------------------------from left side 
//trimEnd():-------------------------------------------from right side

// var a = "             Decat Education Noida       "
// console.log(a.length)
// console.log(a.trim().length)
// console.log(a.trimStart().length)
// console.log(a.trimEnd().length)

// localeCompare(): compare two strings 

var a = "Naman"
var b = "Nitin"
console.log(a.localeCompare(a))
console.log(a.localeCompare(b))
console.log(a.localeCompare(a))















