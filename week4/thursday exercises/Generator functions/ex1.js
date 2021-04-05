(function () {
    const fizzBuzz = function* () {
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                yield "fizzbuzz";
            } else if (i % 5 === 0) {
                yield "buzz";
            } else if (i % 3 === 0) {
                yield "fizz";
            } else {
                yield i;
            }
        }
    };

    for (let num of fizzBuzz()) {
        console.log(num);
    }
})();
