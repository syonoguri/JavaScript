var a = [1,2,3,4,5];
a.forEach(function(v,i,a) { a[i] = v*v; });
console.log(a); // → [1,4,9,16,25]
