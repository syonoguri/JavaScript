function Ellipse(a, b) {
    this.a = a; // 長軸方向の半径
    this.b = b; // 単軸方向の半径
}
// 楕円の面積を計算するメソッド
Ellipse.prototype.getArea = function() {
    return Math.PI*this.a*this.b;
};
// Object.prototype.toStringをオーバーライド
Ellipse.prototype.toString = function() {
    return "Ellipse " + this.a + " " + this.b;
};

function Circle(r) {
    Ellipse.call(this, r, r);
}
Circle.prototype = Object.create(Ellipse.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
});
Circle.prototype.toString = function() {
    var str = Ellipse.prototype.toString.call(this);
    return str.replace("Ellipse", "Circle");
};

var circle = new Circle(2);
console.log(circle.getArea());
console.log(circle.toString());