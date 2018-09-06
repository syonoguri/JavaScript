function* createNumbers(from,to) {
    while( from <= to ) yield from++;
}
var [a,b,c,d,e] = createNumbers(10,15);
// a=10, b=11, c=12, d=13, e=14 と同じ