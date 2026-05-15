var num = Number(prompt("Enter the Number: "))
var sum = 0
for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0)
        sum = sum + i
}
if (sum === num)
    document.writeln(`${num} is perfect Number`)
else
    document.writeln(`${num} is not perfect Number`)
