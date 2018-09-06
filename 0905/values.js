var zip = new Map([["Tom","131-8634"],["Huck","556-0002"]]);
var iter = zip.values();
for(var v of iter) console.log(v);
// 131-8634、556-0002と順に出力