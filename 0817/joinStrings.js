function joinStrings(n,f) {
    var s = "";
    for(var i=0; i<n; i++) {
        s += f(i);
    }
    return s;
}
var digits = joinStrings(10, function(i) {return i;});

console.log(digits);