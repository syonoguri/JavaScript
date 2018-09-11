function buyAsync(name, mymoney) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var payment = parseInt(prompt(`${name}さん、支払い金額を入力してください`));
            var balance = mymoney - payment;
            if( balance > 0) {
                console.log(`${name}:${payment}円を支払いました`);
                resolve(balance);
            } else {
                reject(`${name}:残金は${mymoney}円です。購入できません`);
            }
        }, 1000);
    });
}

Promise.race([
    buyAsync("Tom", 500),
    buyAsync("Huck", 600),
    buyAsync("Becky", 1000)
])
.then(function(balance){
    console.log(balance);
})
.catch(function(error){
    console.log(error);
})