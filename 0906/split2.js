var names = " Tom Sawyer ; Huckleberry Finn ;Becky Thatcher ";
var list = names.replace(/(^\s*|\s*$)/g,"").split(/\s*;\s*/);
console.log(list);
// → ["Tom Sawyer", "Huckleberry Finn", "Becky Thatcher"]
