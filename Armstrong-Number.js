// 2. WAP to check number is Armstrong  //
var n = Number(prompt("Enter the Number: "))
var num = n
var d = 0
while (num != 0) {
    d++
    num = parseInt(num / 10)
}
var num = n
var sum = 0
while(num != 0){
    let r = num % 10
    sum = sum + r ** d
    num = parseInt(num / 10)
}

if (n == sum)
    document.writeln(`${n} is an Armstrong Number`)
else
    document.writeln(`${n} is not an Armstrong Number`)
