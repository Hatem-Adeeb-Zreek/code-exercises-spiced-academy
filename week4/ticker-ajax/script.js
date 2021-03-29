(function fn() {
    var headings = $("#headlines");
    var links;
    var left = headings.offset().left;
    var id;

    $.ajax({
        url: "links.json",
        success: function (data) {
            for (var j = 0; j < data.length; j++) {
                var href = data[j].href;
                var heading = data[j].heading;
                $('<a  href="' + href + '">' + heading + "</a>").appendTo(
                    headings
                );
            }
            links = $("a");
            animationFunction();
            // after calling the function, I found that I should move the eventlisteners to here to make the code works
            // I think there is another way .... plz give me examples
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
        },
        error: function (error) {
            console.log(error);
        },
    });

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
})();
