(function () {
    var headings = $("#headlines");
    var links = $("a");
    console.log(links);
    var leftPosition = headings.offset().left;
    var reqId;

    var animationFunction = function () {
        leftPosition--;
        if (leftPosition <= 0 - links.eq(0).width()) {
            leftPosition = leftPosition + links.eq(0).width();
            headings.append(links.eq(0));
        }
        headings.css({
            left: leftPosition + "px",
        });
        reqId = requestAnimationFrame(animationFunction);
    };
    animationFunction();

    for (var i = 0; i < links.length; i++) {
        links.eq(i).on("mouseenter", function (e) {
            cancelAnimationFrame(reqId);
            $(e.target).css({
                textDecoration: "underline",
                color: "blue",
            });
        });

        links.eq(i).on("mouseleave", function (e) {
            $(e.target).css({
                color: "rgb(163, 7, 7)",
                textDecoration: "none",
            });
            animationFunction();
        });
    }
})();
