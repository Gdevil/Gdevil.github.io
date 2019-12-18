```
filter:alpha(opacity=0); -moz-opacity:0; -khtml-opacity:0; opacity:0;
filter:alpha(opacity=100); -moz-opacity:1; -khtml-opacity:1;opacity:1;

IE8,7,6 下版本这样写
-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"; 
-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
filter:progid:DXImageTransform.Microsoft.Alpha(opacity=100); 
```