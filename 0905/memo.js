function* createNumbers(from,to) {
    while( from <= to ) yield from++;
}
var iter = createNumbers(10,15);
var i = [...iter] // → [10,11,12,13,14,15]
console.log(i);

