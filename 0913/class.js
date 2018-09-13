
class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
}

var c = new Circle({x: 0, y: 0}, 2);
console.log(c.area()); 