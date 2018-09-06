console.log(/Java(?!Script)/.exec("I like JavaScript"));
// → null

console.log(/Java(?!Script)/.exec("I like JavaCoffee"));
// → ["Java"]