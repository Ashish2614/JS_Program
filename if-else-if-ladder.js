// find greatest number among five number//

var a = Number(prompt("enter the first number: "))
var b = Number(prompt("enter the second number: "))
var c = Number(prompt("enter the third number: "))
var d = Number(prompt("enter the fourth number: "))
var e = Number(prompt("enter the fifth number: "))

if(a>=b && a>=c && a>=d && a>=e)
    document.writeln(`${a} is a greatest`)
else if(b>=c && b>=d && b>=e)
    document.writeln(`${b} is a greatest`)
else if(c>=d && c>=e)
    document.writeln(`${c} is a greatest`)
else if(d>=e)
    document.writeln(`${d} is a greatest`)
else
    document.writeln(`${e} is a greatest`)





