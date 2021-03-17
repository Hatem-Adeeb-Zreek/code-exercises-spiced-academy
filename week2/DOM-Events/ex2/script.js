(function () {
    // target elements
    var textArea = document.getElementById("textArea");

    //declare variables
    var inputFromUser = "";
    var replacePosition = 0;
    var textToReplace =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    // function to clear the textArea when reload the page
    function clear() {
        textArea.value = "";
    }

    // add input event
    textArea.addEventListener("input", function () {
        textArea.value = inputFromUser;
        inputFromUser = inputFromUser + textToReplace[replacePosition];
        replacePosition = replacePosition + 1;
    });

    // invoke clear function
    clear();
})();
