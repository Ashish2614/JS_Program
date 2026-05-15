// Print 10 times Hello//
// var i = 1
// do{
//     console.log(`Hello World ${i}`)
//     i++
// }
//     while(i<=10)

// Calculator using Do while loop//

do{
    var a = Number(prompt("Enter the First Number: "))
    var b = Number(prompt("Enter the Second Number: "))
    var ch = prompt("Press + forAddition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice: ")
switch(ch){
   case"+":
document.writeln(`${a} + ${b} = ${a + b}`)
break

case"-":
document.writeln(`${a} - ${b} = ${a - b}`)
break

case"*":
document.writeln(`${a} * ${b} = ${a * b}`)
break

case"/":
document.writeln(`${a} / ${b} = ${a / b}`)
break

case"%":
document.writeln(`${a} % ${b} = ${a % b}`)
break

case"**":
document.writeln(`${a} ** ${b} = ${a ** b}`)
break
}
ch = prompt("Press n to Exit else Any other key to continue: ")
}
while(ch!=='n')