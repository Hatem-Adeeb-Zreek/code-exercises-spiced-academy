// function Countdown(num) {
//     this.num = num;
// }
// Countdown.prototype.start = function () {
//     setTimeout(() => {
//         var counter = this.num;
//         console.log(counter);
//         while (counter > 0) {
//             counter = counter - 1;
//         }
//         return counter;
//     }, 10000);
// };
function Countdown(numOfSeconds) {
    this.numOfSeconds = numOfSeconds;
}
Countdown.prototype.start = setTimeout(function (counter) {
    console.log("test");
    counter = this.numOfSeconds;
    console.log(counter);
    while (counter > 0) {
        console.log("counter...");
        console.log(counter--);
    }
}, 1000);

var countdown = new Countdown(5);
console.log(countdown);
countdown.start();

// still working
