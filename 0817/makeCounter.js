function makeCounter() {
    var count = 0;
    return f;
    function f() {
        return count++
    }
}
var counter = makeCounter();
