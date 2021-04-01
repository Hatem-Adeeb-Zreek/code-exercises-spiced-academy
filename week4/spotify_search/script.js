(function () {
    //target elements
    var inputField = $("input");
    var dropdown = $("select");
    var button = $("button");
    var resultsContainer = $(".results-container");

    // add event listener
    button.on("click", function () {
        var userInput = inputField.val();
        var dropdownInput = dropdown.val();
        if (userInput === "") {
            alert(
                "Sorry, you should enter some text into search area to search for it!!"
            );
        } else {
            $.ajax({
                url: "https://spicedify.herokuapp.com/spotify",
                data: {
                    query: userInput,
                    type: dropdownInput,
                },
                success: function (response) {
                    response = response.artists || response.albums;
                    if (response.items.length === 0) {
                        resultsContainer.html("<p>No results</p>");
                    } else {
                        var resultsHtml = "";
                        for (var i = 0; i < response.items.length; i++) {
                            var name = response.items[i].name;
                            var image;
                            if (
                                typeof response.items[i].images[2] ===
                                "undefined"
                            ) {
                                image = "icon3@2x.png";
                            } else {
                                image = response.items[i].images[2].url;
                            }
                            var exURL = response.items[i].external_urls.spotify;
                            resultsHtml +=
                                "<a href='" +
                                exURL +
                                "'><div class='results'><div ><img src='" +
                                image +
                                "'></div><div><p>" +
                                name +
                                "</p></div></div></a>";
                        }

                        resultsContainer.html(resultsHtml);
                    }
                },
            });
        }
    });
})();
