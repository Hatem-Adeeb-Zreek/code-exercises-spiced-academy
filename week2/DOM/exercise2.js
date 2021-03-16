function targetElementsByClassName(className) {
    var targetedElementsArray = document.getElementsByClassName(className);
    var returnedArr = [];
    for (var i = 0; i < targetedElementsArray.length; i++) {
        returnedArr.push(targetedElementsArray[i]);
    }
    return returnedArr;
}
