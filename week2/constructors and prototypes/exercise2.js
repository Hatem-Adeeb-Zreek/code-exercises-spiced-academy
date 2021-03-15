function invertCase(str) {
    var reversedCharacterString = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            reversedCharacterString += str[i].toLowerCase();
        } else if (str[i] !== str[i].toUpperCase()) {
            reversedCharacterString += str[i].toUpperCase();
        }
    }
    return reversedCharacterString;
}

console.log(invertCase("mY NAME IS hATEM zREEK. mY AGE IS 33"));
