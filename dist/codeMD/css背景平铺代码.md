```

{   width:100%; 
    overflow:hidden; 
    background:url('images/flashbg.jpg');  
    background-size:cover;
    -moz-background-size:cover;
    -webkit-background-size:cover;
    -o-background-size:cover;
    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader  (src='images/flashbg.jpg',  sizingMethod='scale');
}

这样就可以让IE也实现background-size:100%100%的效果了，注意这两个路径要一样，并且是绝对路径。
```