```
使用 Swiper 插件时，在 swiper.css 中的 .swiper-container 有一段css

-webkit-backface-visibility:hidden;
-moz-backface-visibility:hidden;
-ms-backface-visibility:hidden;
-o-backface-visibility:hidden;
backface-visibility:hidden;

这段css会影响chrome浏览器上背景图片的fixed属性，可以注释掉；
```