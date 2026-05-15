var num = Number(prompt("Enter The Number: "))
var sum =0
while(num!=0){
    let r = num % 10
    sum = sum + r
    num = parseInt(num/10)
}
document.writeln(`Sum Of Digits = ${sum}`)