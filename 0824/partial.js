function partial(f) {
    var args = arguments;
    console.log(args);
    return function() {
        var a = Array.prototype.slice.call(args,1);
        console.log(arguments[0]);
        for(var i=0, j=0; i<a.length; i++) {
            if( a[i] == undefined ) a[i] = arguments[j++];
        }
        console.log(a);
        return f.apply(this,a);
    }
}
var square = partial(Math.pow,undefined,2);
console.log(square(5));
