var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        var name = prompt("名前を入力してください");
        resolve(name);
    }, 1000)
});
promise.then(function(name) {
    console.log("こんにちは、"+name+"さん!");
});
