```
$("input").val(2333)
//触发一下该input的input事件
$("input")[0].dispatchEvent(new Event('input'))
```