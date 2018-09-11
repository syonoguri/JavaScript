function buyAsync(mymoney){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            var payment = parseInt(prompt("支払い金額を入力してください"));
            var balance = mymoney - payment;
            if( balance > 0 ) {
                console.log(`${payment}円を支払いました`);
                resolve(balance);
            } else {
                reject(`残金は${mymoney}円です。購入できません`);
            }
        }, 1000);
    });
}
buyAsync(500)
.then(function(balance){
    console.log(`残金は${balance}円です。`);
    return buyAsync(balance);
})
.then(function(balance){
    console.log(`残金は${balance}円です。`);
    return buyAsync(balance);
})
.then(function(balance){
    console.log(`残金は${balance}円です。`);
    return buyAsync(balance);
})
.then(function(balance){
    console.log(`残金は${balance}円です。`);
    return buyAsync(balance);
})
.catch(function(error){
    console.log(error);
});