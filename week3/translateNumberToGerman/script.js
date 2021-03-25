function translateNumberToGerman() {
    var arr = [
        "eins",
        "zwei",
        "drei",
        "vier",
        "fünf",
        "sechs",
        "sieben",
        "acht",
        "neun",
        "zehn",
    ];
    try {
        var parsedNumber = parseInt(askForNumber());
        console.log(arr[parsedNumber - 1]);
    } catch (error) {
        console.log(error.message);
        translateNumberToGerman();
    }
}

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

translateNumberToGerman();
