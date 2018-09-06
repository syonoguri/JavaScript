var header = /<(h[1-6])>.*<\/\1>/;

console.log(header.test("<h1>JavaScript</h2>"));
// → false