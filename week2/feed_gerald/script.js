(function () {
    console.log("yup you are good to write some logic");
    var clickZone = document.getElementById("clickZone");
    var foodAndVeg = document.getElementsByClassName("food");
    var melon = foodAndVeg[0];
    var salad = foodAndVeg[1];
    var grapes = foodAndVeg[2];
    var carrot = foodAndVeg[3];

    var melonPos = 60;
    var saladPos = 60;
    var grapesPos = 60;
    var carrotPos = 60;

    function genRandomNum() {
        return Math.floor(Math.random() * 100);
    }

    clickZone.addEventListener("click", function () {
        console.log("you clicked the clickZone");
        saladPos += genRandomNum();
        grapesPos += genRandomNum();
        carrotPos += genRandomNum();

        salad.style.left = saladPos + "px";
        grapes.style.left = grapesPos + "px";
        carrot.style.left = carrotPos + "px";
        console.log(melonPos, saladPos, grapesPos, carrotPos);
    });
    var melonBtn = document.getElementById("melonBtn");
    melonBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        melonPos += genRandomNum();
        melon.style.left = melonPos + "px";
    });
    function getRandomColorVal() {
        return Math.floor(Math.random() * 256);
    }

    document.addEventListener("keydown", function (event) {
        console.log("keydown happening");
        if (event.keyCode === 32) {
            var r = getRandomColorVal();
            var g = getRandomColorVal();
            var b = getRandomColorVal();
            var randomColor = "rgb(" + r + "," + g + "," + b + ")";
            document.body.style.backgroundColor = randomColor;
        }
    });
})();
