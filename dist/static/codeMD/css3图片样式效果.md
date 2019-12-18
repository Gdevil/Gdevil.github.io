```

一、grayscale灰度（使用这个特效，会把图片变成灰色的，也就是说你的图片将只有两种颜色“黑色”和“白色”）

     { -webkit-filter:grayscale(1或者0);}（1为黑白；0为原色）   

 
    

二、sepia （sepia不知道如何译，暂时就叫他“褐色”，使用这种效果，你的图片好像很古老的一样）

 
     { -webkit-filter:sepia(1或者0);}    




三、saturate（saturat是用来改变图片的饱和度）


      { -webkit-filter:saturate(0以上任何数);}      




四、hue-rotate色相旋转 （hue-rotate用来改变图片的色相）

    
     { -webkit-filter:hue-rotate(0deg是正常，以0为界限负值和正值数字任意设置);}



五、invert反色 （invert做出来的效果就像是我们照相机底面的效果一样）


     { -webkit-filter:invert(1或者0);}



六、opacity透明度 （改变图片的透明度）


     { -webkit-filter:opacity(0至1任意数字);}
    



七、brightness亮度 （改变图片的亮度，效果和我们ps一样，上面盖了一层黑色的背景）

 
      { -webkit-filter:brightness(0至1任意数字；0为全黑；1为没黑); }
    



八、contrast对比度 （改变图片的对比度）


        { -webkit-filter:contrast(1以上任意数字);}
    



九、blur模糊 （改变图片的清晰度）

    
        { -webkit-filter:blur(0px以上的任意数字);}
    



十、drop-shadow阴影 （这个很像box-shadow一样的效果，给图片加阴影效果）


       { -webkit-filter:drop-shadow(5px 5px 5px #ccc);}









当效果一起写的时候：

      { -webkit-filter:saturate(5) hue-rotate(500deg) grayscale(0.3) sepia(0.7) contrast(1.5) invert(0.2) brightness(.9); }















    

```