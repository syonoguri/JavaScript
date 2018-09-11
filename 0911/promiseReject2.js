var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        var n = parseInt(prompt("10未満の数を入力してください"));
        if( n < 10 ) {
            resolve(n);
        } else {
            reject(`エラー:${n}は10以上です`);
        }
    }, 1000);
});
promise
.then(function(num){
    console.log(`2^${num} = ${Math.pow(2,num)}`);
},
function(error){
    console.log(error);
});
