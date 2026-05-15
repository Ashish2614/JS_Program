// 1. WAP to reverse the number using while loop//
var num = Number(prompt("Enter the Number: "))
var rev = 0
while (num != 0) {
    let r = num % 10
    rev = rev * 10 + r
    num = parseInt(num / 10)
}
document.writeln(`Reverse = ${rev}`)

