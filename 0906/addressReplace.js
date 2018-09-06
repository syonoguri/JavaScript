var address = "131-0045 東京都墨田区押上";
var result = address.replace(/\d{3}-\d{4}/,"〒$&");
console.log(result);
// → 〒131-0045 東京都墨田区押上