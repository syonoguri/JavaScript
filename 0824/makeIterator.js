function makeIterator(array) {
    var index = 0;
    return {
        next: function() {
            if( index < array.length) {
                return {value: array[index++], done: false};
            } else {
                return {value: undefined, done: true};
            }
        }
    };
}
var iter = makeIterator(["A","B","C"]);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

var b = ["A","B","C"];

a = b[Symbol.iterator]();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());