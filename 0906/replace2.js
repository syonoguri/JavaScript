var person = "Tom, tom@example.com, 010-1234-5678";
var result = person.replace(/0(\d{1,4}-\d{1,4}-\d{4})/g,"+81-$1");
console.log(result);
// → Tom, tom@example.com, +81-10-1234-5678