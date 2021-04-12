(function () {
    // target elements
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    var sideNavMenu = document.getElementById("side-nav-menu");
    var closeX = document.getElementById("close-x");

    // event handlers
    menu.addEventListener("click", function () {
        overlay.classList.remove("hide");
        sideNavMenu.classList.remove("hide");
        overlay.classList.add(" move-in");
        sideNavMenu.classList.add("move-in");
    });

    overlay.addEventListener("click", function () {
        sideNavMenu.classList.add("hide");
        overlay.classList.add("hide");
    });

    closeX.addEventListener("click", function () {
        sideNavMenu.classList.add("hide");
        overlay.classList.add("hide");
    });

    // modal jQuery

    // target elements
    var modal = $(".modal");
    var exit = $(".modal span");

    // functions
    function popUp() {
        setTimeout(function () {
            $("header").toggleClass("transparent");
            $(".spices1").toggleClass("transparent");
            $(modal).toggleClass("visible");
        }, 2000);
    }
    function exitPopUp() {
        $(modal).removeClass("visible");
        $("header").removeClass("transparent");
        $(".spices1").removeClass("transparent");
    }

    // events
    $(window).on("load", popUp);
    exit.on("click", exitPopUp);
})();
