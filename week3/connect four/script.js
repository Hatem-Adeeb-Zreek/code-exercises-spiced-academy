(function () {
    // target elements and declare variables
    var board = $(".board");
    var column = "";
    var slots;

    // call createSlots function
    createSlots();

    function createSlots() {
        // create one column and loop throw six rows
        column += "<div class='column'>";
        for (var i = 0; i < 6; i++) {
            column += "<div class='slot'" + i + "></div>";
        }
        // now we have one column and six rows
        column += "</div>";
        // append seven columns by for loop
        for (var j = 0; j < 7; j++) {
            board.append(column);
        }
    }
})();
