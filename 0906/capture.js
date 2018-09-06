var header = /<h[1-6]>.*<\/h[1-6]>/;

console.log(header.test("<h1>JavaScript</h2>"));
// → true