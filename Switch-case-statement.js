// program to find a day  while entering the number using switch case statement //
var day = Number(prompt("Enter the Day Number: "))
switch(day){
    case 1:
    document.writeln(`Sunday`)
    break
    case 2:
    document.writeln(`Monday`)
    break
    case 3:
    document.writeln(`Tuesday`)
    break
    case 4:
    document.writeln(`Wednesday`)
    break
    case 5:
    document.writeln(`Thursday`)
    break
    case 6:
    document.writeln(`Friday`)
    break
    case 7:
    document.writeln(`Saturday`)
    break
    default:
        document.writeln(`Invalid choice`)
}