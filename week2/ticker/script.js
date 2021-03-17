(function () {
    var headings = document.getElementById("headlines");
    var links = document.getElementsByTagName("A");
    var leftPosition = headings.offsetLeft;

    var animationFunction = function () {
        leftPosition--;
        if (leftPosition <= -links[0].offsetWidth) {
            leftPosition = leftPosition + links[0].offsetWidth;
            headings.appendChild(links[0]);
        }
        headings.style.left = leftPosition + "px";
        requestAnimationFrame(animationFunction);
    };
    animationFunction();
})();
