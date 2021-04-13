(function fn() {
    var headings = $("#headlines");
    var links = $("a");
    var left = headings.offset().left;
    var id;

    var animationFunction = function () {
        links = $("a");
        left--;
        if (left <= 0 - links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
            headings.append(links.eq(0));
        }
        headings.css({
            left: left + "px",
        });
        id = requestAnimationFrame(animationFunction);
    };
    animationFunction();

    for (var i = 0; i < links.length; i++) {
        links.eq(i).on("mouseenter", function (e) {
            cancelAnimationFrame(id);
            $(e.target).css({
                textDecoration: "underline",
                color: "blue",
            });
        });
        links.eq(i).on("mouseleave", function (e) {
            $(e.target).css({
                color: "",
                textDecoration: "none",
            });
            animationFunction();
        });
    }
})();
