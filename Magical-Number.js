//Magical Number using while loop //
var n = Number(prompt("Enter the number: "))
var num = n
var sum = 0
while (num != 0) {
    let r = num % 10
    sum = sum + r
    num = parseInt(num / 10)
}
var rev = 0
num = sum
while (num != 0) {
    let r = num % 10
    rev = rev * 10 + r
    num = parseInt(num / 10)
}
if (sum * rev === n)
    document.writeln(`${n} is a magical number`)
else
    document.writeln(`${n} is not  a magical number`)
