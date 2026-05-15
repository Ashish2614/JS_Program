// var i= 1
// while(i<=10){
//     console.log(`Hello World ${i}`)
//     i++
// }
       //FIBONACCI SERIES//

       var num = Number(prompt("Enter the last term range of fibonacci series: "))
       var a = 0
       var b =1
       var sum = a+b
       var  count = 2
       document.writeln(`${a} ${b}`)
       while(sum <= num){
        document.writeln(`${sum}`)
        a=b
        b=sum
        sum = a+b
        count++
       }
       document.writeln(`<br>Total terms= ${count}`)