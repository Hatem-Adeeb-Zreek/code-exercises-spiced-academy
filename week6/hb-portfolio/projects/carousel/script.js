(function () {
    var kitties = document.querySelectorAll("img");
    var dots = document.getElementsByClassName("dot");
    var currentKitty = 0;
    var timer;
    var checkTransitioning;

    for (var i = 0; i < dots.length; i++) {
        (function (i) {
            dots[i].addEventListener("click", function (e) {
                if (e.target.classList.contains("on")) {
                    return;
                }
                if (checkTransitioning) {
                    return;
                }
                clearTimeout(timer);
                moveKitties(i);
            });
        })(i);
    }

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 4000);
            checkTransitioning = false;
        }
    });

    timer = setTimeout(moveKitties, 4000);

    function moveKitties(next) {
        checkTransitioning = true;
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit");
        dots[currentKitty].classList.remove("on");
        if (typeof next != "undefined") {
            currentKitty = next;
        } else {
            currentKitty++;
            if (currentKitty === kitties.length) {
                console.log("currentKitty", typeof currentKitty);
                console.log("kitties.length", typeof kitties.length);
                currentKitty = 0;
            }
        }

        kitties[currentKitty].classList.add("onscreen");
        dots[currentKitty].classList.add("on");
    }
})();
