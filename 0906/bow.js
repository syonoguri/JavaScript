var text = "犬は「わんわん」と鳴きました。";
var new_text = text.replace(/「[\u3041-\u3096]+」/g, function(match) {
    var s = "";
    for(var i=1; i<match.length-1; i++) {
        s += String.fromCharCode(match.charCodeAt(i) + 0x60);
    }
    return match[0] + s + match[match.length-1];
});
console.log(new_text);
// → 犬は「ワンワン」と鳴きました