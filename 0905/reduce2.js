var a = ["Tom","Huck","Becky"];
a.reduce(function(p,v) {p[v]=v.length; return p;}, {});
// →{Tom: 3, Huck: 4, Becky: 6}