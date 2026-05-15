//Make a simple calculator using switch//
var a = Number(prompt("Enter the first Number: "))
var b = Number(prompt("Enter the second Number: "))
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
 
default:
document.writeln(`Invalid Choice`)

}




