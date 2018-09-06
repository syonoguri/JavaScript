console.log(/Java(?=Script))/.exec("I like JavaScript"));
// → ["Java"]

console.log(/Java(?=Script))/.exec("I like JavaCoffee"));
// → null