var fact = 1;
var a = Number(prompt("Enter the Number"))
 for(let i=a; i>1; i--){                                                            //for ( i = 1; i<=a; i++)//
    fact = fact*i;
}
    document.writeln(`Factorial of a ${a}= ${fact}`)
