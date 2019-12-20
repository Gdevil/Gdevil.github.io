```

纯色渐变：


{background: linear-gradient(to left, rgb(4, 27, 74) 0, rgb(0, 136, 203) 100%);}


或者


{
    background: #50bebe;
    background: linear-gradient(to right,#50bebe 0,#41aaaa 50%,#0099cb 100%);
    background: -moz-linear-gradient(left,#50bebe 0,#41aaaa 50%,#0099cb 100%);
    background: -webkit-linear-gradient(left,#50bebe 0,#41aaaa 50%,#0099cb 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#50bebe',endColorstr='#0099cb',GradientType=1);
}














透明渐变：


{   background: linear-gradient(to bottom, rgba(65,170,170,1) 10%, rgba(2,130,172,0) 100%);
    background: -moz-linear-gradient(to bottom, rgba(65,170,170,1) 10%, rgba(2,130,172,0) 100%);
    background: -webkit-linear-gradient(to bottom, rgba(65,170,170,1) 10%, rgba(2,130,172,0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF50bebe',endColorstr='#000099cb',GradientType=0);

}







filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=red/#ffffff,endcolorstr=blue/#ffffff,gradientType=1); 

其中gradientType=1代表横向渐变，gradientType=0代表纵向淅变。startcolorstr=”色彩” 代表渐变渐变起始的色彩，endcolorstr=”色彩” 代表渐变结尾的色彩。 






```