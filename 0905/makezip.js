function* makeZip() {
    yield ["Tom","131-8634"];
    yield ["Huck","556-0002"];
}
var zips = makeZip();
let zip = new Map(zips);
console.log(zip.size);
// → 2