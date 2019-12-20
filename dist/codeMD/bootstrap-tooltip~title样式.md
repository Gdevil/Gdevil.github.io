```
<div data-original-title="提醒标题提醒标题"></div>

<script>
$("[data-original-title]").tooltip();
</script>



————————————或者————————————————


<div title="提醒标题提醒标题"></div>

<script>
//$("[title]").attr('data-original-title',e.attr('title')).tooltip();

$("[title]").attr('data-original-title',$(this).attr('title')).tooltip();
</script>






_____________________________________________________________________


文档：
http://www.runoob.com/bootstrap/bootstrap-tooltip-plugin.html
```