//  1. Make a table of any number
// var num= Number(prompt("Enter the Number: "))
// for(let i= 1; i<=10; i++){
    // document.writeln(`${num}*${i}=${num*i}<br>`)
// }
// 2. Sum Of Ending and Starting Range
var start= Number(prompt("Enter the starting value of Range: "))
var end  = Number(prompt("Enter the Ending value of Range: "))
var sum=0
for(let i= start; i<=end; i++){
    sum =sum+i
}
document.writeln(`Sum  of Number in Range ${start}-${end}=${sum}`)