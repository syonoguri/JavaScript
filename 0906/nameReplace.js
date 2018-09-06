var name = "Tom Sawyer";
var result= name.replace(/(\w+)\s(\w+)/,"$2 $1");
console.log(result);
// → Sawyer Tom