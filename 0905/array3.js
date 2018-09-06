var x = new Array(3);
for(var i=0; i<3; i++) {
    x[i] = new Array(3);
    for(var j=0; j<3; j++) {
        x[i][j] = new Array(3);
    }
}
for(var count=1, i=0; i<3; i++) {
    for(var j=0; j<3; j++) {
        for(var k=0; k<3; k++){
            x[i][j][k] = count++;
        }
    }
}

console.log(x);