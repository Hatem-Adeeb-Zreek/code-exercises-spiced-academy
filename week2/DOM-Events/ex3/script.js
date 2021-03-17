(function () {
    // target elements
    var box = document.getElementById("box");

    // function for generate a random color
    function generateRandomColor() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        return "rgb(" + red + "," + green + "," + blue + ")";
    }

    // add mouseDown event for the box
    box.addEventListener("mousedown", function () {
        box.style.backgroundColor = generateRandomColor();
    });

    // add mouseUp event for the box
    box.addEventListener("mouseup", function () {
        box.style.backgroundColor = generateRandomColor();
    });
})();
