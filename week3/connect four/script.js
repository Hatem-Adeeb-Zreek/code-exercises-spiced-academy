(function () {
    // target elements and declare variables
    var board = $(".board");
    var column = "";
    var slots = board.find(".slot");
    var col = $(".column");
    var currentPlayer = "player1";
    var emptySlot;
    var rowSlots;
    var diagonalWinArray = [
        [38, 33, 28, 23],
        [32, 27, 22, 17],
        [37, 32, 27, 22],
        [26, 21, 16, 11],
        [36, 31, 26, 21],
        [20, 15, 10, 5],
        [25, 20, 15, 10],
        [30, 25, 20, 15],
        [19, 14, 9, 4],
        [24, 19, 14, 9],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [12, 19, 26, 33],
        [20, 27, 34, 41],
        [13, 20, 27, 34],
        [6, 13, 20, 27],
        [2, 9, 16, 23],
        [8, 15, 22, 29],
        [1, 8, 15, 22],
        [14, 21, 28, 35],
        [7, 14, 21, 28],
        [0, 7, 14, 21],
    ];

    // call createSlots function
    createSlots();

    // functions
    function createSlots() {
        // create one column and loop throw six rows
        column += "<div class='column'>";
        for (var i = 0; i < 6; i++) {
            column += "<div class='slot row'" + i + "></div>";
        }
        // now we have one column and six rows
        column += "</div>";
        // append seven columns by for loop
        for (var j = 0; j < 7; j++) {
            board.append(column);
        }
    }
    function diagonalWinning() {
        // loop throw diagonal array to check the winning
        for (var i = 0; i < diagonalWinArray.length; i++) {
            if (
                slots.eq(diagonalWinArray[i][0]).hasClass(currentPlayer) &&
                slots.eq(diagonalWinArray[i][1]).hasClass(currentPlayer) &&
                slots.eq(diagonalWinArray[i][2]).hasClass(currentPlayer) &&
                slots.eq(diagonalWinArray[i][3]).hasClass(currentPlayer)
            ) {
                return true;
            }
        }
    }
    function switchPlayer() {
        // to switch btw player1 and player2
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    // add click event for the columns
    col.on("click", function (e) {
        var columnSlots = $(e.currentTarget).find(".slot");
        // loop to check for empty slots
        for (var i = 6; i > 0; i--) {
            if (
                !columnSlots.eq(i).hasClass("player1") &&
                !columnSlots.eq(i).hasClass("player2")
            ) {
                emptySlot = columnSlots.eq(i);
                emptySlot.addClass(currentPlayer);
                rowSlots = $(".row" + i);
                break;
            }
        }
        // diagonalWinning();
        // switchPlayer();
    });
})();
