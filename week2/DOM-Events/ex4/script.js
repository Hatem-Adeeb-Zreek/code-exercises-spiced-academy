(function () {
    // target elements
    var outerBox = document.getElementById("outer");
    var innerBox = document.getElementById("inner");

    // function for generate a random color
    function generateRandomColor() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        return "rgb(" + red + "," + green + "," + blue + ")";
    }

    // add click event for the outer box
    outerBox.addEventListener("click", function () {
        outerBox.style.backgroundColor = generateRandomColor();
    });

    // add click event for the inner box
    innerBox.addEventListener("click", function (e) {
        e.stopPropagation();
        innerBox.style.backgroundColor = generateRandomColor();
    });
})();
