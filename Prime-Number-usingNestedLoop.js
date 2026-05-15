var start = Number(prompt("Enter the Starting Ranging: "))
var End = Number(prompt("Enter the Ending Ranging: "))

var count = 0
for (let num = start; num <= End; num++) {
    let flag = false
    for (let i = 2; i <= num ** 0.5; i++) {
        if (num % i == 0) {
            flag = true
            break
        }
    } if (flag === false && num >= 2) {
        document.writeln(`${num}`)
        count++
    }
}
document.writeln(`<br> Total Prime No= ${count}`)

