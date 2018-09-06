var s = "1 little,2 little indian";
console.log(s.replace(/indian/,"boy"));
// → 1 little,2 little boy
console.log(s.replace(/little/,"big"));
// → 1 big,2little indian
console.log(s.replace(/little/g,"big"));
// → 1 big,2 big indian