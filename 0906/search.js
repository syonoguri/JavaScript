var s = "1 little,2 little indian";
console.log(s.search(/little/));
// → 2:マッチする最初の文字列の位置
console.log(s.search(/\d/));
// → 0:マッチする最初の文字列の位置
console.log(s.search(/\bindian/));
// → 18:マッチしたiの位置
console.log(s.search(/3\s/));
// →　-1:マッチしなかった