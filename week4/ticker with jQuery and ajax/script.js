(function () {
    var headings = document.getElementById("headlines");
    var links = document.getElementsByTagName("A");
    var leftPosition = headings.offsetLeft;
    var reqId;

    var animationFunction = function () {
        leftPosition--;
        if (leftPosition <= 0 - links[0].offsetWidth) {
            leftPosition = leftPosition + links[0].offsetWidth;
            headings.appendChild(links[0]);
        }
        headings.style.left = leftPosition + "px";
        reqId = requestAnimationFrame(animationFunction);
    };
    animationFunction();

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (e) {
            cancelAnimationFrame(reqId);
            e.target.style.textDecoration = "underline";
            e.target.style.color = "blue";
        });
        links[i].addEventListener("mouseleave", function (e) {
            e.target.style.color = "rgb(163, 7, 7)";
            e.target.style.textDecoration = "none";
            animationFunction();
        });
    }
})();
