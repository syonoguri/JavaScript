var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
var result = countFruits.exec("10 apples");
console.log(result);
// → ["10 apples, "10", "apple"]
console.log(result.index);
// → 0