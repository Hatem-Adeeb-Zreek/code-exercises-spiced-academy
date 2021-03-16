function targetElementsBySelector(selector) {
    var targedElements = document.querySelectorAll(selector);

    for (var i = 0; i < targedElements.length; i++) {
        targedElements[i].style.fontStyle = "italic";
        targedElements[i].style.textDecoration = "underline";
        targedElements[i].style.fontWeight = "bold";
    }
}
