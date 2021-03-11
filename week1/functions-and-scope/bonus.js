function getTotaler() {
    var sum = 0;
    return function inner(num) {
        sum += num;
        return sum;
    };
}
var totaler = getTotaler();
totaler(1); //1
totaler(2); //3
totaler(5); //8
