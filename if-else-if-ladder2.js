// WAP to print Number of days in  a month Whe user enter a month Number.//
var a = Number(prompt("Enter the Number"))
if(a==1){
    document.writeln(`31 Day and Month is January`)
}
else if(a==2){
    document.writeln(`(if LY-29 else 28) Day and Month is February`)
}
else if(a==3){
    document.writeln(`31 Day and Month is March`)

}
else if(a==4){
    document.writeln(`30 Day and Month is April`)

}
else if(a==5){
    document.writeln(`31 Day and Month is May`)

}
else if(a==6){
    document.writeln(`30 Day and Month is June`)

}
else if(a==7){
    document.writeln(`31 Day and Month is July`)

}
else if(a==8){
    document.writeln(`30 Day and Month is August`)

}
else if(a==9){
    document.writeln(`31 Day and Month is September`)

}
else if(a==10){
    document.writeln(`31 Day and Month is October`)

}
else if(a==11){
    document.writeln(`30 Day and Month is November`)

}
else if(a==12){
    document.writeln(`31 Day and Month is December`)

}
else{
    document.writeln(`Month does not Exist`)
}