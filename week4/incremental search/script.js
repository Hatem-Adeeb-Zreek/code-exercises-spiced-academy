(function () {
    // target elements
    var searchField = $("input");
    var results = $("#results");

    // input event
    searchField.on("input", function () {
        var userInput = searchField.val().toLowerCase();

        if (userInput === null || userInput === "") {
            results.empty();
            return;
        }
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: userInput,
            },
            success: function (matchResults) {
                if (userInput !== searchField.val().toLowerCase()) {
                    return;
                } else {
                    var htmlForCountries = "";
                    if (matchResults.length !== 0) {
                        for (var i = 0; i < matchResults.length; i++) {
                            htmlForCountries +=
                                "<p class='country'>" +
                                matchResults[i] +
                                "</p>";
                        }
                    } else {
                        htmlForCountries += "<p>No results</p>";
                    }
                    results.html(htmlForCountries);
                }
            },
        });
    });

    // mousedown event
    results.delegate(".country", "mousedown", function (ev) {
        searchField.val($(ev.target).text());
    });

    // mouseover event
    results.delegate(".country", "mouseover", function (e) {
        $(".highlight").removeClass("highlight");
        $(e.target).addClass("highlight");
    });

    // blur event
    searchField.on("blur", function () {
        results.hide();
    });
    // focus event
    searchField.on("focus", function () {
        results.show();
    });

    // Keydown event
    searchField.on("keydown", function (eve) {
        var filteredCountries = $(".country");
        if (eve.keyCode === 40 && !filteredCountries.hasClass("highlight")) {
            filteredCountries.eq(0).addClass("highlight");
        } else if (
            eve.keyCode === 40 &&
            filteredCountries.eq(3).hasClass("highlight")
        ) {
            return;
        } else if (
            eve.keyCode === 40 &&
            filteredCountries.slice(0, 3).hasClass("highlight")
        ) {
            var highlightedCountry = $(".highlight");
            highlightedCountry.removeClass("highlight");
            highlightedCountry.next().addClass("highlight");
        }

        if (
            eve.keyCode === 38 &&
            filteredCountries.eq(0).hasClass("highlight")
        ) {
            return;
        } else if (
            eve.keyCode === 38 &&
            filteredCountries.slice(1, 4).hasClass("highlight")
        ) {
            var up = $(".highlight");
            up.removeClass("highlight");
            up.prev().addClass("highlight");
        }

        highlightedCountry = $(".highlight");
        if (eve.keyCode === 13) {
            $(eve.target).val(highlightedCountry.text());
        }
    });
})();
