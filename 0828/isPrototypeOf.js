function F() {};
var obj = new F();
console.log(F.prototype.isPrototypeOf(obj));
console.log(Object.prototype.isPrototypeOf(obj));
console.log(Date.prototype.isPrototypeOf(obj));