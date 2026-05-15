var year = Number(prompt("Enter The Year Number: "))
if(year % 400==0||(year % 4 == 0 && year % 100 !==0))
    document.writeln(`${year} is a leap year`)
else
    document.writeln(`${year} is npt a leap year`)
