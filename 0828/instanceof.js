function F() {};
var obj = new F();
console.log(obj instanceof F);
console.log(obj instanceof Object);
console.log(obj instanceof Date);