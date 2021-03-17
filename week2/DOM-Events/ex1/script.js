(function () {
    // target elements
    var box = document.getElementById("box");

    // add mousemove event for the document
    document.addEventListener("mousemove", function (e) {
        // I add some delay here
        setTimeout(function () {
            // version 1
            box.style.top = e.clientY - 50 + "px";
            box.style.left = e.clientX - 50 + "px";

            //version 2
            // box.style.top = e.clientY + "px";
            // box.style.left = e.clientX - 50 + "px";

            // version 3
            // box.style.top = e.clientY + 25 + "px";
            // box.style.left = e.clientX - 50 + "px";
        }, 500);
    });
})();

// I have 3 versions of solution because I didn't understand
// this sentence ===> make this box center itself directly under the user's pointer
// In the 3 versions I centered the box according to the pointer
