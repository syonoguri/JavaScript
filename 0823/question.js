function question() {
    var count = 1;
    count = count++;
    console.log(count);
    return count;
}

var counter = question;
console.log(counter);
console.log(counter());
console.log(counter());
console.log(counter());