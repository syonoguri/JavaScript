function Circle(center,radius) {
    this.center = center;
    this.radius = radius;
}
Circle.protptype = {
    constructor: Circle,
    area: function() {
        return Math.PI* this.radius*this.radius;
    }
};
var c = new Circle({x:0,y:0}, 2.0);
console.log(c.constructor);
console.log(c instanceof Circle);