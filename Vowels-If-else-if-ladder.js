var ch = prompt("Enter a Single Character: ")
if (ch.length != 1)
    document.writeln(`"${ch}" is Invalid,Please Try Again`)
else {
    if (ch >= 'a' && ch <= 'z') {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
            document.writeln(`"${ch}" is a lowercase vowel`)
        else
            document.writeln(`"${ch}" is a lowercase consonant`)
    }
    else if (ch >= 'A' && ch <= 'Z') {
        if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
            document.writeln(`"${ch}" is a uppercase consonant`)
    }
    else if (ch >= '0' && ch <= '9')
        document.writeln(`"${ch}" is a Digit`)
    else if (ch == '')
        document.writeln(`"${ch}" is a space`)
    else
        document.writeln(`"${ch}" is a special character`)
}