function permutation(a) {
    return a.reduce(function(list,element) {
        var newlist = [];
        list.forEach(function(seq) {
            for(var i=seq.length; i>=0; i--) {
                var newseq = [].concat(seq);
                newseq.splice(i,0,element);
                newlist.push(newseq);
            }
        });
        return newlist;
    },[[]]);
}
var a = [1,2,3];
permutation(a).forEach(function(v) { console.log(v); });