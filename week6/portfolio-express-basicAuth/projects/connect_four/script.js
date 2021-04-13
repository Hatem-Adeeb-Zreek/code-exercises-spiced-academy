(function () {
    // target elements and declare variables
    var board = $(".board");
    var col = "";
    var winMessage = $(".winMessage");
    var slots;

    // invoke createSlots function to create the slots
    createSlots();
    slots = board.find(".slot");

    //add click eventlistener to the columns
    var column = $(".column");
    var currentPlayer = "player1";
    column.on("click", function (e) {
        var empty;
        var columnSlots = $(e.currentTarget).find(".slot");
        // for loop to check if there are empty slots
        for (var i = 5; i >= 0; i--) {
            if (
                !columnSlots.eq(i).hasClass("player1") &&
                !columnSlots.eq(i).hasClass("player2")
            ) {
                empty = columnSlots.eq(i);
                empty.addClass(currentPlayer);
                var rowSlots = $(".row" + i);
                break;
            }
        }
        // a sequence of if - else statements to check which player won and invoke the suitable functions
        if (currentPlayerWin(columnSlots)) {
            popMessage();
        } else if (currentPlayerWin(rowSlots)) {
            popMessage();
        } else if (winByDiagonal()) {
            popMessage();
        } else {
            switchPlayer();
        }
    });

    //add click eventListener to the playAgain - button
    var btn = $(".playAgain");
    btn.on("click", function () {
        // reset the game
        winMessage.removeClass("showMessage");
        $(".slot").removeClass("player1");
        $(".slot").removeClass("player2");
        board.removeClass("visibility");
    });

    //functions
    function createSlots() {
        col += "<div class='column'>";
        //  for loop to add 6 rows for each column
        for (var i = 0; i <= 5; i++) {
            col += "<div class='slot row" + i + "'></div>";
        }
        col += "</div>";
        // for loop to append 7 columns to the board
        for (var j = 0; j < 7; j++) {
            board.append(col);
        }
    }
    function winByDiagonal() {
        var diagonalArray = [
            [0, 7, 14, 21],
            [7, 14, 21, 28],
            [14, 21, 28, 35],
            [1, 8, 15, 22],
            [8, 15, 22, 29],
            [2, 9, 16, 23],
            [6, 13, 20, 27],
            [13, 20, 27, 34],
            [20, 27, 34, 41],
            [12, 19, 26, 33],
            [19, 26, 33, 40],
            [18, 25, 32, 39],
            [24, 19, 14, 9],
            [19, 14, 9, 4],
            [30, 25, 20, 15],
            [25, 20, 15, 10],
            [20, 15, 10, 5],
            [36, 31, 26, 21],
            [26, 21, 16, 11],
            [37, 32, 27, 22],
            [32, 27, 22, 17],
            [38, 33, 28, 23],
        ];
        // for loop to check the diagonalArray if there is a diagonal won
        for (var i = 0; i < diagonalArray.length; i++) {
            if (
                slots.eq(diagonalArray[i][0]).hasClass(currentPlayer) &&
                slots.eq(diagonalArray[i][1]).hasClass(currentPlayer) &&
                slots.eq(diagonalArray[i][2]).hasClass(currentPlayer) &&
                slots.eq(diagonalArray[i][3]).hasClass(currentPlayer)
            ) {
                return true;
            }
        }
    }
    function switchPlayer() {
        // switch btw players i.e if player2 won the next game player2 will start
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }
    function currentPlayerWin(arr) {
        // check which player won
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            if (arr.eq(i).hasClass(currentPlayer)) {
                str += "w";
            } else {
                str += "l";
            }
        }
        return str.indexOf("wwww") > -1;
    }
    function popMessage() {
        // pop up a winner message
        setTimeout(() => {
            board.addClass("visibility");
            winMessage.addClass("showMessage");
            if (currentPlayer == "player1") {
                winMessage.css("background", "yellow");
                $(".win").text("Hatem Won");
                $(".win").css("color", "white");
            } else {
                $(".win").text("Adam Won");
                winMessage.css({
                    color: "white",
                    background: "black",
                });
            }
        }, 2000);
    }
})();
