var text = "1 little, 2 little 3 little indian";
var reg = /\d+ little/y;
reg.lastIndex = 10;
console.log(reg.exec(text));
// → ["2 little"]