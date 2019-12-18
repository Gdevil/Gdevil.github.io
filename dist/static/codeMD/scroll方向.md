```
var initTop = 0;
$(window).scroll(function(){
 var scrollTop = $(document).scrollTop();
 if(scrollTop > initTop){
  alert("下"); 
 } else {
  alert("上"); 
 }
 initTop = scrollTop;
});
```