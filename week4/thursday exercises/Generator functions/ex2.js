(function () {
    const revArray = function* (arr) {
        yield [...arr].reverse();
    };
    const reversedArray = revArray([1, 2, 3]).next().value;
    console.log(reversedArray);
})();
