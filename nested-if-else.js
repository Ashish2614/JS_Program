var a = Number(prompt("Enter the first number: "))
var b = Number(prompt("Enter the second number: "))
var c = Number(prompt("Enter the third number: "))
if (a < b) {
    if (a < c)
        document.writeln(`${a} is smallest`)
    else
        document.writeln(`${c} is smallest`)
}
else {
    if (b < c)
        document.writeln(`${b} is smallest`)
    else
        document.writeln(`${c} is smallest`)

}