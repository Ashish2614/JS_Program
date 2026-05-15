var a = Number(prompt("Enter The Number"))
var flag = false
  for(let i=2; i<=a**0.5; i++){
    if (a % i == 0) {
        flag = true
        break
    }
}
if (flag === false && a >= 2)
    document.writeln(`${a} is a prime Number`)
else
    document.writeln(`${a} is not a prime Number`)

