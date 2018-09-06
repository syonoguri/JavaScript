function makeCounter() {
    var count = 0;
    console.log(count);
    return f;
    function f() {
        return count++;
    }
}
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
