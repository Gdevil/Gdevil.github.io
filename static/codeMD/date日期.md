```
//昨天的时间
var day1 = new Date();
day1.setTime(day1.getTime()-24*60*60*1000);
var s1 = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();

//今天的时间
var day2 = new Date();
day2.setTime(day2.getTime());
var s2 = day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate();

//明天的时间
var day3 = new Date();
day3.setTime(day3.getTime()+24*60*60*1000);
var s3 = day3.getFullYear()+"-" + (day3.getMonth()+1) + "-" + day3.getDate();

//星期
var l = ["日","一","二","三","四","五","六"];
var d = new Date().getDay();
var str = "今天是星期" + l[d];
```