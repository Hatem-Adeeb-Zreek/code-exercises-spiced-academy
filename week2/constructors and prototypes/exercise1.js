function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

function Square(num) {
    this.width = num;
    this.height = num;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
Square.prototype.getArea = Rectangle.prototype.getArea;

var rect = new Rectangle(4, 5);
console.log("rect.getArea =", rect.getArea()); // 20
var square = new Square(4);
console.log("square.getArea =", square.getArea()); //16
