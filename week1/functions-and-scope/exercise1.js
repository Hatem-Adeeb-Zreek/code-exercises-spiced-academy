function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

sum(5, 10);
sum(5, 10, 15);
sum(5, 10, 15, 100, 200);
