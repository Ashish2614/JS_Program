var start = Number(prompt("Enter the Starting Range: "))
var end = Number(prompt("Enter the Ending Range: "))
let sumEven = 0;
let sumOdd = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

document.writeln(`Sum of Even Numbers: ${+ sumEven}`)
document.writeln(`Sum of Odd Numbers: ${+ sumOdd}`)