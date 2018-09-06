var zip = new Map([["Tom","131-8634"],["Huck","556-0002"]]);
var iter = zip.entries();
for(var v of iter) console.log(v);
// ["Tom", "131-8634"]、["Huck", "556-0002"]と順に出力