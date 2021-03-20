(function () {
    var kitties = document.querySelectorAll("img");
    var currentKitty = 0;

    function moveKitties() {
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit");
        currentKitty++;

        if (currentKitty === kitties.length) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen");
        setTimeout(moveKitties, 4000);
    }

    setTimeout(function () {
        kitties[currentKitty].classList.add("onscreen"); // the problem of showing the first image and wait 4s then other images solved
        setTimeout(function () {
            moveKitties();
        }, 4000);
    }, 4000);

    document.addEventListener("transitionend", function (e) {
        e.target.classList.remove("exit");
    });
})();
