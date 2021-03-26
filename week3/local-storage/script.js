(function () {
    // target textarea
    var textArea = document.getElementById("textarea");

    ///input event
    textArea.addEventListener("input", function () {
        try {
            localStorage.setItem("input", JSON.stringify(textArea.value));
        } catch (err) {
            console.log(err);
        }
    });

    // convert the stored data back to type before stringify it and store it in textarea
    try {
        textArea.value = JSON.parse(localStorage.getItem("input"));
    } catch (err) {
        console.log(err);
    }
})();
