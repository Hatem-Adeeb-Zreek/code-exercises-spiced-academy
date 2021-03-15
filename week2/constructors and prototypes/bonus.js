function Countdown(numOfSeconds) {
    this.numOfSeconds = numOfSeconds;
}
Countdown.prototype.start = function () {
    var counter = this.numOfSeconds;
    console.log(counter);
    setTimeout(startCountingDown, 1000);
    function startCountingDown() {
        counter--;
        if (counter > 0) {
            setTimeout(startCountingDown, 1000);
        }
        console.log(counter);
    }
};

var countdown = new Countdown(5);
countdown.start();

// my code works fine  and I have a counter from 5 to zero with
// a delay 1 second
