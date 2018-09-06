var header = /<(h[1-6])>.*<\/\1>/;
console.log(header.exec("<h1>JavaScript</h1>"));
// → ["<h1>JavaScript</h1>","h1"]