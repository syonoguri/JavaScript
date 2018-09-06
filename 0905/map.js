var a = [1,2,3,4,5];
var b = a.map(function(x) { return 2*x; }) // b = [2,4,6,8,10]

var persons = [
    {name: "Tom", age: 17},
    {name: "Huck", age: 18},
    {name: "Becky", age: 16}
];
let c = persons.map(person => person.name).map(name => name.length);
// → [3,4,5]
console.log(c);