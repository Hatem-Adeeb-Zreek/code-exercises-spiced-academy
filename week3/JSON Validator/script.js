(function () {
    // target elements
    var textArea = document.getElementById("textarea");
    var btn = document.getElementById("btn");

    // function to check if it is a valid JSON or not
    function isValidJSON() {
        var input = textArea.value;
        try {
            JSON.parse(input);
            alert("VALID JASON");
        } catch (err) {
            alert("NOT VALID JSON");
        }
        textArea.value = "";
    }

    // click event listener
    btn.addEventListener("click", isValidJSON);
})();
