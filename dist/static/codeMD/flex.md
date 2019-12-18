```
display: -webkit-box;           /* OLD - iOS 6-, Safari 3.1-6 */
display: -moz-box;              /* OLD - Firefox 19- (doesn't work very well) */
display: -ms-flexbox;           /* TWEENER - IE 10 */
display: -webkit-flex;          /* NEW - Chrome */
display: flex;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */




/**  项目排列方向  row(左右) | row-reverse(右左) | column(上下) | column-reverse(下上)  **/
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-moz-box-orient:vertical;
-moz-box-direction:normal;
flex-direction:column;
-webkit-flex-direction:column;



/**  是否换行  nowrap|wrap|wrap-reverse(换行，第一行在下)   **/
-webkit-flex-wrap:wrap;
-webkit-box-lines:multiple;
-moz-flex-wrap:wrap;
-ms-flex-wrap:wrap;
flex-wrap:wrap;



/**  flex-direction 和 flex-wrap的简写 默认row nowrap  **/
-webkit-flex-flow:row wrap;
-webkit-box-orient:horizontal;
-webkit-box-lines:multiple;
-moz-flex-flow:row wrap;
box-orient:horizontal;
box-lines:multiple;
flex-flow:row wrap;



/**  X轴对齐方式  flex-start(左) | flex-end(右) | center(中) | space-between(两端对齐) | space-around(均分)  **/
-webkit-justify-content:center;
-ms-justify-content:center;
justify-content:center;
-moz-box-pack:center;
-ms-box-pack:center;
-webkit--moz-box-pack:center;
box-pack:center;




/**  Y轴对齐方式  flex-start(上) | flex-end(下) | center(中) | baseline(文字底部) | stretch(占满高度)  **/
align-items:center;
-webkit-align-items:center;
-ms-align-items:center;
box-align:center;
-ms-box-align:center;
-moz-box-align:center;
-webkit-box-align:center;





项目属性：

/**  order(排序)  **/
box-order:num;
-webkit-box-order:num;
-moz-box-order:num;
order:num;
-webkit-order:num;


flex-grow     放大比例（都为1则宽度等分） 
flex-shrink   缩小比例
flex-basis    分配多余空间之前，项目占据的主轴空间
flex          flex-grow, flex-shrink 和 flex-basis的简写
align-self    单独设对齐方式





flex子元素宽度超出导致text-overflow失效解决方法：
子元素    flex: 1;    
          width: 0;  

或        flex: 1;
          overflow:hidden;
```