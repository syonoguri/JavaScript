function Primes(n) {
    var util = require('util');
    var p = [];
    for(var i=2; i<=n; i++) p[i] = true;
    var max = Math.floor(Math.sqrt(n));
    var x = 2;
    while(x<=max){
        for(var i=2*x; i<=n; i+=x) {
            console.log("i= "+i);
            console.log("x= "+x);
            
            p[i] = false;
            console.log(util.inspect(p,false,null));
        }
        while(!p[++x]) ;
        console.log(util.inspect(p,false,null));
    }
    var primes = [], nprimes = 0;
    for(var i=2; i<=n; i++) if(p[i]) primes[nprimes++] =i;
    p = null;
    return function(m) {
        for(var i=0, product=1; i<m; i++) {
            product *= primes[Math.floor(Math.random()*nprimes)];
        }
        return product;
    }
}
var primeProduct = Primes(10);
console.log(primeProduct(2));
console.log(primeProduct(2));