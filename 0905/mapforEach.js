var zip = new Map([["Tom","131-8634"],["Huck","556-0002"]]);
zip.forEach(function(value,key,map) {
    console.log(key+" => "+value);
});
// → Tom => 131-8634
//   Huck => 556-0002