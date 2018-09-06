var reg = /^cat/im;
console.log(reg.test("Dog\nCat\nMonkey"));
// → true

var reg = /at$/im;
console.log(reg.test("Dog\nCat\nMonkey"))
// → true