var date = "今日は、2016年9月10日です。";
var result = date.replace(/(\d+)年(\d+)月(\d+)日/,"$1/$2/$3");
console.log(result);
// 今日は、2016/9/10です。