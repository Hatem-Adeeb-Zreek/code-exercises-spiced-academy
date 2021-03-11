function checkNum(num) {
    if (num <= 0 || isNaN(num)) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        return checkNum(num * 10);
    }
}
checkNum(0);
checkNum("hatem");
checkNum(2000000);
checkNum(5000);
