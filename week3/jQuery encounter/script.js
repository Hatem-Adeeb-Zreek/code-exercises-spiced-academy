// target elements with jQuery
var jQboard = $("#game-board");
var jQanimals = $(".animal"); // jQuery always generate a node list  not html collection like queryselectorall

var animalsLeft = [0, 0, 0, 0];

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// event listeners with jQuery
jQboard.on("click", function () {
    for (var i = 0; i < animalsLeft.length; i++) {
        animalsLeft[i] += getRandomNumber(21);

        jQanimals.eq(i).css({
            /// put eq method when you looping when you have more than an element
            left: animalsLeft[i] + "px",
        });
    }
});

$("#boost-button").on("click", function boost(e) {
    e.stopPropagation();
    animalsLeft[0] += 20;
    jQanimals.eq(0).css({
        left: animalsLeft[0] + "px",
    });
});

$(document).on("keydown", function (evt) {
    if (evt.keyCode === 32) {
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        jQboard.css({
            backgroundColor: randomColor,
        });
        for (var i = 0; i < animalsLeft.length; i++) {
            animalsLeft[i] += getRandomNumber(21);
            jQanimals.eq(i).css({
                left: animalsLeft[i] + "px",
            });
        }
    }
});
