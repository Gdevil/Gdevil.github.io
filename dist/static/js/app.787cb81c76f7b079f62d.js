webpackJsonp([2],{"+WKg":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"+eTH":function(e,t){```
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
```},"/5Hm":function(e,t){```
opacity: 0.8; 
/* For IE 5-7 */
filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
/* For IE 8 */
-MS-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";





filter:alpha(opacity=20); /* IE 透明度20% 
*/ -moz-opacity:0.9; /* Moz + FF 透明度20%*/
opacity: 0.9; /* 支持CSS3的浏览器（FF 1.5也支持）透明度20%*/



透明必须是图片（背景不能实现）


img {opacity:0.4;filter:alpha(opacity=40); /* For IE8 and earlier */}

img:hover {opacity:1.0;filter:alpha(opacity=100); /* For IE8 and earlier */}






背景变透明写法：

 background:rgba(255,255,255,0.9);   兼容最高版本IE或者极速模式
filter:Alpha(opacity=80); background:#fff;

filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#E5ffffff,endColorstr=#E5ffffff);    兼容IE8和以上的版本及极速模式


rgba的值：                      IEfilter值：
0.1                                19
0.2                                33
0.3                                4C
0.4                                66
0.5                    7F
0.6                99
....                               ...


直接取整数计算，没有任何进位直接省去
Alpha*255再转换成16进制即可







或者：
 filter:alpha(opacity=0); -moz-opacity:0; -khtml-opacity:0; opacity:0;























```},"/pgu":function(e,t){```
$("input").val(2333)
//触发一下该input的input事件
$("input")[0].dispatchEvent(new Event('input'))
```},"4Uwr":function(e,t,i){e.exports=i.p+"static/img/logo.9a14e13.jpg"},"4sNM":function(e,t){```function openWindow(){
    var url="index.html?name=name";
    window.open(url,'_self');
}



window.onload = function(){
    var myname = GetArgs(window.location.href,"name");
    alert("参数为"+myname);
}
function GetArgs(params,paramName){
    var argsIndex = params.indexOf("?");
    var arg = params.substring(argsIndex+1);
    args = arg.split("&");
    var valArg = "";
    for(var i =0;i<args.length;i++){
    str = args[i];
    var arg = str.split("=");
 
        if(arg.length<=1) continue;
        if(arg[0] == paramName){
            valArg = arg[1];
        }
    }
    return valArg;
}
```},"5MAM":function(e,t){```

<div class="loader-inner ball-pulse">
      <div></div>
      <div></div>
      <div></div>
</div>






.ball-pulse > div:nth-child(1) {
    -webkit-animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
}
.ball-pulse > div:nth-child(2) {
    -webkit-animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
}
.ball-pulse > div:nth-child(3) {
    -webkit-animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
}
.ball-pulse > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
}
@-webkit-keyframes scale {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; }

  45% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 0.7; }

  80% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; } }
@keyframes scale {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; }

  45% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 0.7; }

  80% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; } }

```},"5PSd":function(e,t){```<video src="media/v.mp4" id="video" poster="images/video.jpg" preload width="100%" controls webkit-playsinline></video>```},"6U/P":function(e,t){```
let current = 'index'
window[current+'_scroll']();  

// 执行 function index_scroll(){...}
```},"6XVr":function(e,t){```

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















    

```},"6arv":function(e,t){```
a.push.apply(a,b);




/**说明**/
a.push.apply(a,[4,5,6])  ==  a.push(4,5,6);
```},"7W9c":function(e,t){```function stopPropagation(e) {
    if (e.stopPropagation) 
        e.stopPropagation();
    else 
        e.cancelBubble = true;
}

$(document).bind('click',function(){
    $('.hotcity').css('display','none');
    $(".qcbox-fixed").css({display:"none"});
});

$(".guoji-input input").bind('click',function(e){
    stopPropagation(e);
});
$('.hotcity').bind('click',function(e){
    stopPropagation(e);
});```},"85OA":function(e,t){```$(window).load(function(){

$("html,body").animate({scrollTop:0},0)
var url = window.location.toString();
var id = url.split("#")[1];
if(id && id!=""){ 
    if($("#"+id).length>0){
        var t = $("#"+id).offset().top;
        $("html,body").animate({scrollTop:t},1000)
    }
}

$('a').click(function(){
    if($(this).attr("href") && $(this).attr("href").split("#")[1]){
        var a=$(this).attr("href").split("#")[1];
        var p=$("#"+a).offset().top;
        $("html,body").animate({scrollTop:p},1000);
    }
})    

})
```},"93JW":function(e,t){```$("ul li").hover(function(){
        var index=$("ul li").index(this);
        console.log(index);
    })```},"9eJL":function(e,t){```
<!--HTML-->

<div class="histogram-container" id="histogram-container">
            <!--格子-->
            <div class="histogram-bg-line">
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
            </div>
            <!--柱条-->
            <div class="histogram-content">
                <ul>
                    <li>
                        <span class="histogram-box"><a style="height:20%;background:#00A0E9;" title="20%"></a></span>
                        <span class="name">产品质量</span>
                    </li>
                    <li>
                        <span class="histogram-box"><a style="height:40%;background:#00A0E9;" title="40%"></a></span>
                        <span class="name">产品美观</span>
                    </li>
                    <li>
                        <span class="histogram-box"><a style="height:50%;background:#00A0E9;" title="50%"></a></span>
                        <span class="name">产品使用</span>
                    </li>
                    <li>
                        <span class="histogram-box"><a style="height:80%;background:#00A0E9;" title="80%"></a></span>
                        <span class="name">售后服务</span>
                    </li>
                    <li>
                        <span class="histogram-box"><a style="height:70%;background:#00A0E9;" title="80%"></a></span>
                        <span class="name">售后服务2</span>
                    </li>
                    <li>
                        <span class="histogram-box"><a style="height:40%;background:#00A0E9;" title="80%"></a></span>
                        <span class="name">售后服务3</span>
                    </li>
                    <li>
                        <span class="histogram-box"><a style="height:40%;background:#00A0E9;" title="80%"></a></span>
                        <span class="name">售后服务4</span>
                    </li>
                    
                </ul>
            </div>
            <!--百分比-->
            <div class="histogram-y">
                <ul>
                    <li>100%</li>
                    <li>80%</li>
                    <li>60%</li>
                    <li>40%</li>
                    <li>20%</li>
                    <li>0%</li>
                </ul>
            </div>
        </div>




<!--CSS-->
.histogram-container{position:relative;margin-left:60px;margin-top:10px;margin-bottom:25px;}
.histogram-bg-line{border:#999 solid;border-width:0 1px 1px 1px;border-right-color:#eee;overflow:hidden;width:99%;}
.histogram-bg-line ul{overflow:hidden;border:#eee solid;border-width:1px 0 0 0;}
.histogram-bg-line li{float:left;width:20%;overflow:hidden;}
.histogram-bg-line li div{border-right:1px #eee solid;}
.histogram-content{position:absolute;left:0px;top:0;width:99%;height:100%;}
.histogram-content ul{height:100%;}
.histogram-content li{float:left;height:100%;width:20%;text-align:center;position:relative;}
.histogram-box{position:relative;display:inline-block;height:100%;width:20px;}
.histogram-content li a{position:absolute;bottom:0;right:0;display:block;width:20px;}
.histogram-content li .name{position:absolute;bottom:-20px;left:0px;white-space:nowrap;display:inline-block;width:100%;font-size:13px;color: #666;}
.histogram-y{position:absolute;left:-60px;top:-10px;font:12px/1.8 verdana,arial;}
.histogram-y li{text-align:right;width:55px;padding-right:5px;color:#333;}
.histogram-bg-line li div,.histogram-y li{height:60px;}


<!--JS-->
//柱状图
var append_str="<li><div></div></li>";
var append_str_all="";
var li_num=$(".histogram-content li").length;
for(i=0;i<li_num;i++){
    append_str_all=append_str_all + append_str;
}
//console.log(append_str_all)
$(".histogram-bg-line ul").append(append_str_all)

$(".histogram-content li").css({"width":100/li_num +"%"});
$(".histogram-bg-line li").css({"width":100/li_num +"%"});


```},Aapr:function(e,t){```
window.onload = function(){ 
var img = document.getElementById('imgId'); 
var src = img.getAttribute('src'); 
img.setAttribute('src',''); 
img.onload = function(){ 
alert(1); 
}; 
img.setAttribute('src',src); 
}; 













/***************      JQ获取图片实际高度并 对应写入事件      ****************/





var _w = parseInt($(window).width());
//获取浏览器的宽度
$(".pro_list img").each(function(i){
    var img = $(this);
    var realWidth;//真实的宽度
    var realHeight;//真实的高度
    //这里做下说明，$("<img/>")这里是创建一个临时的img标签，类似js创建一个new Image()对象！
    $("<img/>").attr("src", $(img).attr("src")).load(function() {
        /*如果要获取图片的真实的宽度和高度有三点必须注意1、需要创建一个image对象：如这里的$("<img/>")2、指定图片的src路径3、一定要在图片加载完成后执行如.load()函数里执行*/
        realWidth = this.width;
        realHeight = this.height;//如果真实的宽度大于浏览器的宽度就按照100%显示
        
        console.log(realWidth)
        
        //if(realWidth>=_w){
            $(img).parents(".pro_list").css("width",realWidth).css("height","345px");
        //}else{//如果小于浏览器的宽度按照原尺寸显示
            //$(img).css("width",realWidth+'px').css("height",realHeight+'px');
        //}
    });
}); 







/***************      页面图片全部加载完成      ****************/





isImgLoad(function(){
    //console.log("done"); // 加载完成
    if(myScroll){myScroll.refresh();}  //更新iscroll;
});
    
var t_img; // 定时器
var isLoad = true; // 控制变量

// 判断图片加载的函数
function isImgLoad(callback){
    // 查找所有封面图，迭代处理
    $('img').each(function(){
        // 找到为0就将isLoad设为false，并退出each
        if(this.height === 0){
            isLoad = false;
            return false;
        }
        //console.log(this.height);
    });
    // 为true，没有发现为0的。加载完毕
    if(isLoad){
        clearTimeout(t_img); // 清除定时器
        // 回调函数
        callback();
    // 为false，因为找到了没有加载完成的图，将调用定时器递归
    }else{
        isLoad = true;
        t_img = setTimeout(function(){
            isImgLoad(callback); // 递归扫描
        },500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
    }
}
```},Acid:function(e,t){},Bud5:function(e,t){```

视频点击播放：

<video controls="controls" class="background-video"  id="intro-video" data-anchor-target="#intro" width="100%"   >
<source src="aaa.mp4" type="video/mp4" >
<source src="aaa.webm" type="video/webm" >
<source src="aaa.ogv" type="video/ogv" >
</video>




视频自动播放：

<video class="background-video" id="intro-video" data-anchor-target="#intro" width="100%"  autoplay loop preload>
<source src="aaa.mp4" type="video/mp4">
<source src="aaa.webm" type="video/webm">
<source src="aaa.ogv" type="video/ogv" >
</video>






视频加载显示图片
<video controls="controls" class="background-video" poster="images/sp.png" id="intro-video" data-anchor-target="#intro"  width="100%">
<source src="video/sp.mp4" type="video/mp4" >
<source src="video/sp.webm" type="video/webm" >
<source src="video/sp.ogv" type="video/ogv" >
</video>








ie视频平铺
function isIE() { //ie?
if (!!window.ActiveXObject || "ActiveXObject" in window){
$('video').css({'height':$(window).height()*1.2,'width':'auto','margin-left':-($('video').width()-$(window).width())/2,'margin-top':-$(window).height()*0.1})
}
}

isIE()







    var video = document.getElementById("start_video");
    video.onended = function() 
    {
        video.play()
    };





去除视频下载按钮
video::-internal-media-controls-download-button {
    display:none;
}
video::-webkit-media-controls-enclosure {
    overflow:hidden;
}
video::-webkit-media-controls-panel {
    width: calc(100% + 30px); 
}

```},CyVT:function(e,t){},DMRB:function(e,t){```


<div id="marquee1" class="marqueeleft" style="overflow-x:auto;">
        <div id="marqueeee" style="width:10000px">
            <ul id="marquee1_1">
                <li>
                        
                </li>
                <li>
                        
                </li>
                <li>
                        
                </li>
                <li>
                        
                </li>
                <li>
                        
                </li>
                
                <li>
                        
                </li>
               
                
              
                <div class="clear"></div>
            </ul>
            <ul id="marquee1_2"></ul>
        </div>
    </div>  










html
--------------------------------------------------------------------------------------------------------------
js



<script type="text/javascript">
//js无缝滚动代码
$(document).ready(function(e) {
    $(".index_bg").width($(window).width());
});


function marquee(i, direction){
    var obj = document.getElementById("marquee" + i);
    var obj1 = document.getElementById("marquee" + i + "_1");
    var obj2 = document.getElementById("marquee" + i + "_2");
    if (direction == "up"){
        if (obj2.offsetTop - obj.scrollTop <= 0){
            obj.scrollTop -= (obj1.offsetHeight + 20);
        }else{
            var tmp = obj.scrollTop;
            obj.scrollTop++;
            if (obj.scrollTop == tmp){
                obj.scrollTop = 1;
            }
        }
    }else{
        if (obj2.offsetWidth - obj.scrollLeft <= 0){
            obj.scrollLeft -= obj1.offsetWidth;
        }else{
            obj.scrollLeft++;
        }
    }
}

function marqueeStart(i, direction){
    var obj = document.getElementById("marquee" + i);
    var obj1 = document.getElementById("marquee" + i + "_1");
    var obj2 = document.getElementById("marquee" + i + "_2");

    obj2.innerHTML = obj1.innerHTML;
    var marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 20);
    obj.onmouseover = function(){
        window.clearInterval(marqueeVar);
    }
    obj.onmouseout = function(){
        marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 20);
    }
}
</script>


<script type="text/javascript">marqueeStart(1, "left");</script>























http://www.unohacha.hk/case/huachuang8/case.html






http://www.unohacha.hk/case/yingfeite13_stop/honor.html
```},DXvt:function(e,t){```
    -ms-text-combine: vertical;
    -webkit-text-combine: vertical;
    text-combine: vertical;
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;/* IE 写法 */
```},EGUY:function(e,t){```
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
```},FZZH:function(e,t){```
<body onorientationchange="updateOrientation(0);">



<script>
if(window.orientation!=0){
    if($(window).innerWidth()<=768){
        alert('请关闭手机自动翻转！');
    }
}
function updateOrientation(){ 
    if(window.orientation==0){
            
    }else{
        if($(window).innerWidth()<=768){
        alert('请关闭手机自动翻转！');
    }
    }
}; 
</script>
```},G8F2:function(e,t){```<div class="selBox">
                  <div class="selTop">
                    <span>CN</span><i class="fa_triangle"></i>
                  </div>
                  <div class="selBtm">
                    <ul>
                      <li>EN</li>
                      <li class="active">CN</li>
                    </ul>
                  </div>
                </div>






<style>
.selTop {
    font-size: 14px;
    color: #fff;
    min-width: 50px;
    text-align: center;
    cursor: pointer;
}
.selTop span {
    vertical-align: middle;
    line-height: 30px;
}
.selTop i {
    vertical-align: middle;
    line-height: 30px;
    margin-left:5px;
}
i.fa_triangle {
    display: inline-block;
    border: solid;
    border-width: 7px 7px 0px 7px;
    border-color: #fff transparent;
}

.selBox {
    position: relative;
    display: inline-block;
}

.selBtm {
    position: absolute;
    z-index: 2;
    min-width: 100%;
    top: 100%;
    left: 0;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 10px #666;
    border-radius: 2px;
    overflow: hidden;
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
}

.selBox.active .selBtm {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    opacity: 1;
    visibility: visible;
}

.selBtm ul li {
    font-size: 14px;
    line-height: 30px;
    color: #666;
    cursor:pointer;
    padding: 0 10px;
    white-space: nowrap;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
}
.selBtm ul li:hover , .selBtm ul li.active{
    background:#e7e7e7;
}
.selBtm ul {
    padding: 0 0;
}
</style>


<script>
$("body").on("click",".selTop",function(){
        $(".selBox").not($(this).parent(".selBox")).removeClass("active");
        $(this).parent(".selBox").toggleClass("active");
    })
    $("body").on("click",".selBtm ul li",function(){
        var txt=$(this).text();
        $(this).parents(".selBox").removeClass("active").find(".selTop span").text(txt);
        $(this).addClass("active").siblings().removeClass('active');
    })
    function stopPropagation(e) {
        if (e.stopPropagation) 
            e.stopPropagation();
        else 
            e.cancelBubble = true;
    }
    $(document).on('click',function(){
        $(".selBox").removeClass("active");
    });
    $("body").on("click",".selBox",function(e){
        stopPropagation(e);
    });
</script>```},GWvm:function(e,t){```
1）在iframe中查找父页面元素的方法：
$('#id', window.parent.document)
 
2）在iframe中调用父页面中定义的方法和变量：
parent.method
parent.value

```},"Gj0/":function(e,t){```
    $(".btn-top").click(function(){
         var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    })
```},HWNN:function(e,t){```兼容window 苹果 手机 系统的微软雅黑字体





.body {font-family:"Microsoft YaHei",微软雅黑,"Microsoft JhengHei",华文细黑,STHeiti,MingLiu}     正常的微软雅黑




.body {font-family:"Microsoft YaHei",微软雅黑,STHeiti;}     正常的微软雅黑（常用）




.body {font-family: STHeitiSC-Light,'Microsoft YaHei';}     纤细的微软雅黑（常用）











//英文 数字单独设置
font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;





//好看字体1
font-family: "novecento_sans_widenormal", "HiraginoSansGB-W3", "STHeiti", "Microsoft JhengHei", "Microsoft YaHei", tahoma;```},I192:function(e,t){```
<svg width="214" height="176">
  <image xlink:href="aa.svg" src="aa.png" width="214" height="176" />
</svg>




png和svg大小要一样大





切图的时候要贴着内容的高和宽
```},IjBW:function(e,t,i){e.exports=i.p+"static/img/preview.d44e00a.jpg"},Itf0:function(e,t){```<input type="text" name="" onkeypress="return check()">



function check() {
var key = event.keyCode;
if (key == 13)
    console.log(66666);
}```},KloM:function(e,t){```
function hexToRgba(hex, opacity) { 
return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
}
//hexToRgba('#f29a9e',0.1)    HEX ת rgba
```},LVad:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("d7EF"),o=i.n(n),r=i("7+uW"),a=i("/ocq"),s=i("Xxa5"),l=i.n(s),c=i("exGp"),d=i.n(c),u=i("mtWM"),p=i.n(u),h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footBox"},[t("div",{staticClass:"foot"},[t("div",{staticClass:"container"},[t("div",{staticClass:"footTop"},[t("div",{staticClass:"footLogo"},[t("img",{attrs:{src:this.$assets.logo}})])]),this._v(" "),t("div",{staticClass:"footBottom"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("div",{staticClass:"footSec"})]),this._v(" "),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"footSec"})]),this._v(" "),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"footSec"})])],1)],1)])]),this._v(" "),t("div",{staticClass:"copyright"})])},staticRenderFns:[]};var f=i("VU/8")({name:"nav-foot",props:[],data:function(){return{}},created:function(){},mounted:function(){},methods:{link:function(e){this.$router.push({name:e})}}},h,!1,function(e){i("l2AQ")},"data-v-4b6e70ba",null).exports,m=i("OS1Z"),g=(i("pw1w"),i("pFYg")),v=i.n(g);
/*!
 * stroll.js 1.2 - CSS scroll effects
 * http://lab.hakim.se/scroll-effects
 * MIT licensed
 * 
 * Copyright (C) 2012 Hakim El Hattab, http://hakim.se
 */
!function(){var e=500,t=!!("ontouchstart"in window),i=[],n=!1;function o(){if(n){requestAnimFrame(o);for(var e=0,t=i.length;e<t;e++)i[e].update()}}function r(r,s){if(!r.nodeName||!1===/^(ul|li)$/i.test(r.nodeName))return!1;(function(e){for(var t=0,n=i.length;t<n;t++)if(i[t].element==e)return!0;return!1})(r)&&a(r);var l=t?new d(r):new c(r);s&&s.live&&(l.syncInterval=setInterval(function(){l.sync.call(l)},e)),l.sync(),i.push(l),1===i.length&&(n=!0,o())}function a(e){for(var t=0;t<i.length;t++){var o=i[t];o.element==e&&(o.destroy(),i.splice(t,1),t--)}0===i.length&&(n=!1)}function s(e,t,i){var n,o;if("string"==typeof e){var r=document.querySelectorAll(e);for(n=0,o=r.length;n<o;n++)t.call(null,r[n],i)}else if("object"===(void 0===e?"undefined":v()(e))&&"number"==typeof e.length)for(n=0,o=e.length;n<o;n++)t.call(null,e[n],i);else{if(!e.nodeName)throw"Stroll target was of unexpected type.";t.call(null,e,i)}}function l(){return!!document.body.classList}function c(e){this.element=e}function d(e){this.element=e,this.element.style.overflow="hidden",this.top={value:0,natural:0},this.touch={value:0,offset:0,start:0,previous:0,lastMove:Date.now(),accellerateTimeout:-1,isAccellerating:!1,isActive:!1},this.velocity=0}c.prototype.sync=function(){this.items=Array.prototype.slice.apply(this.element.children),this.listHeight=this.element.offsetHeight;for(var e=0,t=this.items.length;e<t;e++){var i=this.items[e];i._offsetHeight=i.offsetHeight,i._offsetTop=i.offsetTop,i._offsetBottom=i._offsetTop+i._offsetHeight,i._state=""}this.update(!0)},c.prototype.update=function(e){var t=this.element.pageYOffset||this.element.scrollTop,i=t+this.listHeight;if(t!==this.lastTop||e){this.lastTop=t;for(var n=0,o=this.items.length;n<o;n++){var r=this.items[n];r._offsetBottom<t?"past"!==r._state&&(r._state="past",r.classList.add("past"),r.classList.remove("future")):r._offsetTop>i?"future"!==r._state&&(r._state="future",r.classList.add("future"),r.classList.remove("past")):r._state&&("past"===r._state&&r.classList.remove("past"),"future"===r._state&&r.classList.remove("future"),r._state="")}}},c.prototype.destroy=function(){clearInterval(this.syncInterval);for(var e=0,t=this.items.length;e<t;e++){var i=this.items[e];i.classList.remove("past"),i.classList.remove("future")}},d.prototype=new c,d.prototype.sync=function(){var e;this.items=Array.prototype.slice.apply(this.element.children),this.listHeight=this.element.offsetHeight;for(var t=0,i=this.items.length;t<i;t++)(e=this.items[t])._offsetHeight=e.offsetHeight,e._offsetTop=e.offsetTop,e._offsetBottom=e._offsetTop+e._offsetHeight,e._state="",e.style.opacity=1;this.top.natural=this.element.scrollTop,this.top.value=this.top.natural,this.top.max=e._offsetBottom-this.listHeight,this.update(!0),this.bind()},d.prototype.bind=function(){var e=this;this.touchStartDelegate=function(t){e.onTouchStart(t)},this.touchMoveDelegate=function(t){e.onTouchMove(t)},this.touchEndDelegate=function(t){e.onTouchEnd(t)},this.element.addEventListener("touchstart",this.touchStartDelegate,!1),this.element.addEventListener("touchmove",this.touchMoveDelegate,!1),this.element.addEventListener("touchend",this.touchEndDelegate,!1)},d.prototype.onTouchStart=function(e){if(e.preventDefault(),1===e.touches.length)if(this.touch.isActive=!0,this.touch.start=e.touches[0].clientY,this.touch.previous=this.touch.start,this.touch.value=this.touch.start,this.touch.offset=0,this.velocity){this.touch.isAccellerating=!0;var t=this;this.touch.accellerateTimeout=setTimeout(function(){t.touch.isAccellerating=!1,t.velocity=0},500)}else this.velocity=0},d.prototype.onTouchMove=function(e){if(1===e.touches.length){var t=this.touch.value;this.touch.value=e.touches[0].clientY,this.touch.lastMove=Date.now();var i=this.touch.value>this.touch.previous&&this.velocity<0||this.touch.value<this.touch.previous&&this.velocity>0;this.touch.isAccellerating&&i?(clearInterval(this.touch.accellerateTimeout),this.velocity+=(this.touch.previous-this.touch.value)/10):(this.velocity=0,this.touch.isAccellerating=!1,this.touch.offset=Math.round(this.touch.start-this.touch.value)),this.touch.previous=t}},d.prototype.onTouchEnd=function(e){var t=this.touch.start-this.touch.value;this.touch.isAccellerating||(this.velocity=(this.touch.start-this.touch.value)/10),(Date.now()-this.touch.lastMove>200||Math.abs(this.touch.previous-this.touch.value)<5)&&(this.velocity=0),this.top.value+=this.touch.offset,this.touch.offset=0,this.touch.start=0,this.touch.value=0,this.touch.isActive=!1,this.touch.isAccellerating=!1,clearInterval(this.touch.accellerateTimeout),(Math.abs(this.velocity)>4||Math.abs(t)>10)&&e.preventDefault()},d.prototype.update=function(e){var t=this.top.value+this.velocity+this.touch.offset;if((this.velocity||this.touch.offset)&&(this.element.scrollTop=t,t=Math.max(0,Math.min(this.element.scrollTop,this.top.max)),this.top.value=t-this.touch.offset),this.touch.isActive&&!this.touch.isAccellerating||(this.velocity*=.95),Math.abs(this.velocity)<.15&&(this.velocity=0),t!==this.top.natural||e){this.top.natural=t,this.top.value=t-this.touch.offset;for(var i=t+this.listHeight,n=0,o=this.items.length;n<o;n++){var r=this.items[n];r._offsetBottom<t?this.velocity<=0&&"past"!==r._state&&(r.classList.add("past"),r._state="past"):r._offsetTop>i?this.velocity>=0&&"future"!==r._state&&(r.classList.add("future"),r._state="future"):r._state&&("past"===r._state&&r.classList.remove("past"),"future"===r._state&&r.classList.remove("future"),r._state="")}}},d.prototype.destroy=function(){c.prototype.destroy.apply(this),this.element.removeEventListener("touchstart",this.touchStartDelegate,!1),this.element.removeEventListener("touchmove",this.touchMoveDelegate,!1),this.element.removeEventListener("touchend",this.touchEndDelegate,!1)},window.stroll={bind:function(e,t){l()&&s(e,r,t)},unbind:function(e){l()&&s(e,a)}},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();i("CyVT");var _={components:{navFoot:f,mavonEditor:m.mavonEditor},data:function(){return{list:[{title:"流体墙纸",desc:"彩色染料滴入水中，慢慢消散，跟随指尖轻轻荡漾",img:this.$assets.preview}],codeList:[],codeActive:-1,codeMsg:"",codeSearch:"",stroll:{class:["grow","cards","curl","wave","flip","fly","fly-simplified","fly-reverse","helix","fan","papercut","twirl","skew","tilt","zipper","fade"],active:11}}},created:function(){},mounted:function(){this.init()},computed:{codeSearchList:function(){var e=this.codeSearch,t=[];return this.codeList.map(function(i){i.indexOf(e)>-1&&t.push(i)}),this.$nextTick(function(){stroll.bind("#codeBox ul")}),t}},methods:{init:function(){document.addEventListener("mousemove",this.threedee,!1);var e=i("Yam+").keys();this.codeList=e,this.$nextTick(function(){stroll.bind("#codeBox ul")})},pay:function(e){},choseFile:function(e,t){var i=this;return d()(l.a.mark(function n(){var o,r;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.split("./")[1],n.next=3,i.$apiClient.localRequest("/static/codeMD/"+o);case 3:r=n.sent,i.codeMsg=r,i.codeActive=t;case 6:case"end":return n.stop()}},n,i)}))()},readFile:function(e){var t=null;t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var i="file"===document.location.protocol?0:200;return t.open("GET",e,!1),t.overrideMimeType("text/html;charset=gb2312"),t.send(null),t.status===i?t.responseText:null},threedee:function(e){var t,i=document.getElementById("text"),n=Math.round(7/(window.innerWidth/2)*(window.innerWidth/2-e.clientX)),o=Math.round(7/(window.innerHeight/2)*(i.getBoundingClientRect().top-e.clientY)),r="",a=100;for(t=0;t<7;t++){var s=Math.round(n/7*t),l=Math.round(o/7*t);(s||l)&&(r+=s+"px "+l+"px 0 rgb("+(a+=3*t)+", "+a+", "+a+"), ")}r+=n+"px "+o+"px 1px rgba(0,0,0,.2), "+2*n+"px "+2*o+"px 6px rgba(0,0,0,.3)",i.style.textShadow=r,i.style.webkitTransform="translateZ(0) rotateX("+2.5*o+"deg) rotateY("+2.5*-n+"deg)",i.style.MozTransform="translateZ(0) rotateX("+2.5*o+"deg) rotateY("+2.5*-n+"deg)"}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menuBox"},[i("div",{staticClass:"main"},[i("div",{staticClass:"section section1"},[i("div",{staticClass:"title",attrs:{id:"text"}},[e._v("Kay Stark")]),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"effectBox"},[i("el-row",{attrs:{gutter:20}},e._l(e.list,function(t){return i("el-col",{attrs:{span:8}},[i("div",{staticClass:"item"},[i("div",{staticClass:"effect"},[i("div",{staticClass:"imgBox",style:"background-image: url("+t.img+")"}),e._v(" "),i("div",{staticClass:"txtBox"},[i("h2",[e._v(e._s(t.title))]),e._v(" "),i("p",[e._v(e._s(t.desc))])])])])])}),1)],1)])]),e._v(" "),i("div",{staticClass:"section section2"},[i("div",{staticClass:"bigTitle"},[e._v("实用小代码")]),e._v(" "),i("div",{staticClass:"container"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"codeBox",attrs:{id:"codeBox"}},[i("div",{staticClass:"searchBox"},[i("el-input",{staticClass:"searchInput",attrs:{placeholder:"关键词筛选",size:"mini"},model:{value:e.codeSearch,callback:function(t){e.codeSearch=t},expression:"codeSearch"}}),e._v(" "),i("el-select",{staticClass:"codeSelect",attrs:{size:"mini"},model:{value:e.stroll.active,callback:function(t){e.$set(e.stroll,"active",t)},expression:"stroll.active"}},e._l(e.stroll.class,function(e,t){return i("el-option",{key:e,attrs:{label:"scroll效果："+e,value:t}})}),1)],1),e._v(" "),i("ul",{staticClass:"strollUl",class:e.stroll.class[e.stroll.active]},e._l(e.codeSearchList,function(t,n){return i("li",{key:t,class:n==e.codeActive?"actived":"",on:{click:function(i){return e.choseFile(t,n)}}},[e._v(e._s(t.split("./")[1]))])}),0)])]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"markdown"},[i("mavon-editor",{staticClass:"mavonEditor",attrs:{toolbars:{},toolbarsFlag:!1,defaultOpen:"preview",subfield:!1,editable:!1},model:{value:e.codeMsg,callback:function(t){e.codeMsg=t},expression:"codeMsg"}})],1)])],1)],1)])]),e._v(" "),i("nav-foot")],1)},staticRenderFns:[]};var w,y,x=i("VU/8")(_,b,!1,function(e){i("hNpa")},"data-v-9853bdee",null).exports,k=i("HSQo"),E=i.n(k),C=i("kiBT"),A=i.n(C),S=i("OvRC"),T=i.n(S),M=i("Zx67"),I=i.n(M),L=i("K6ED"),B=i.n(L),D=i("Zzip"),H=i.n(D),O=i("5QVw"),$=i.n(O),j=i("fZjL"),F=i.n(j),z=i("mvHQ"),N=i.n(z),R=i("C4MV"),W=i.n(R);w=this,y=function(e){function t(e,t){var i=e.__state.conversionName.toString(),n=Math.round(e.r),o=Math.round(e.g),r=Math.round(e.b),a=e.a,s=Math.round(e.h),l=e.s.toFixed(1),c=e.v.toFixed(1);if(t||"THREE_CHAR_HEX"===i||"SIX_CHAR_HEX"===i){for(var d=e.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}return"CSS_RGB"===i?"rgb("+n+","+o+","+r+")":"CSS_RGBA"===i?"rgba("+n+","+o+","+r+","+a+")":"HEX"===i?"0x"+e.hex.toString(16):"RGB_ARRAY"===i?"["+n+","+o+","+r+"]":"RGBA_ARRAY"===i?"["+n+","+o+","+r+","+a+"]":"RGB_OBJ"===i?"{r:"+n+",g:"+o+",b:"+r+"}":"RGBA_OBJ"===i?"{r:"+n+",g:"+o+",b:"+r+",a:"+a+"}":"HSV_OBJ"===i?"{h:"+s+",s:"+l+",v:"+c+"}":"HSVA_OBJ"===i?"{h:"+s+",s:"+l+",v:"+c+",a:"+a+"}":"unknown format"}function i(e,t,i){W()(e,t,{get:function(){return"RGB"===this.__state.space?this.__state[t]:(V.recalculateRGB(this,t,i),this.__state[t])},set:function(e){"RGB"!==this.__state.space&&(V.recalculateRGB(this,t,i),this.__state.space="RGB"),this.__state[t]=e}})}function n(e,t){W()(e,t,{get:function(){return"HSV"===this.__state.space?this.__state[t]:(V.recalculateHSV(this),this.__state[t])},set:function(e){"HSV"!==this.__state.space&&(V.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=e}})}function o(e){if("0"===e||y.isUndefined(e))return 0;var t=e.match(G);return y.isNull(t)?0:parseFloat(t[1])}function r(e){var t=e.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}function a(e,t,i,n,o){return n+(e-t)/(i-t)*(o-n)}function s(e,t,i,n){e.style.background="",y.each(ne,function(o){e.style.cssText+="background: "+o+"linear-gradient("+t+", "+i+" 0%, "+n+" 100%); "})}function l(e,t,i){var n=document.createElement("li");return t&&n.appendChild(t),i?e.__ul.insertBefore(n,i):e.__ul.appendChild(n),e.onResize(),n}function c(e){Y.unbind(window,"resize",e.__resizeHandler),e.saveToLocalStorageIfPossible&&Y.unbind(window,"unload",e.saveToLocalStorageIfPossible)}function d(e,t){var i=e.__preset_select[e.__preset_select.selectedIndex];i.innerHTML=t?i.value+"*":i.value}function u(e,t){var i=e.getRoot(),n=i.__rememberedObjects.indexOf(t.object);if(-1!==n){var o=i.__rememberedObjectIndecesToControllers[n];if(void 0===o&&(o={},i.__rememberedObjectIndecesToControllers[n]=o),o[t.property]=t,i.load&&i.load.remembered){var r=i.load.remembered,a=void 0;if(r[e.preset])a=r[e.preset];else{if(!r[le])return;a=r[le]}if(a[n]&&void 0!==a[n][t.property]){var s=a[n][t.property];t.initialValue=s,t.setValue(s)}}}}function p(e,t,i,n){if(void 0===t[i])throw new Error('Object "'+t+'" has no property "'+i+'"');var o=void 0;if(n.color)o=new ie(t,i);else{var r=[t,i].concat(n.factoryArgs);o=re.apply(e,r)}n.before instanceof U&&(n.before=n.before.__li),u(e,o),Y.addClass(o.domElement,"c");var a=document.createElement("span");Y.addClass(a,"property-name"),a.innerHTML=o.property;var s=document.createElement("div");s.appendChild(a),s.appendChild(o.domElement);var c=l(e,s,n.before);return Y.addClass(c,me.CLASS_CONTROLLER_ROW),o instanceof ie?Y.addClass(c,"color"):Y.addClass(c,D(o.getValue())),function(e,t,i){if(i.__li=t,i.__gui=e,y.extend(i,{options:function(t){if(arguments.length>1){var n=i.__li.nextElementSibling;return i.remove(),p(e,i.object,i.property,{before:n,factoryArgs:[y.toArray(arguments)]})}if(y.isArray(t)||y.isObject(t)){var o=i.__li.nextElementSibling;return i.remove(),p(e,i.object,i.property,{before:o,factoryArgs:[t]})}},name:function(e){return i.__li.firstElementChild.firstElementChild.innerHTML=e,i},listen:function(){return i.__gui.listen(i),i},remove:function(){return i.__gui.remove(i),i}}),i instanceof ee){var n=new Z(i.object,i.property,{min:i.__min,max:i.__max,step:i.__step});y.each(["updateDisplay","onChange","onFinishChange","step"],function(e){var t=i[e],o=n[e];i[e]=n[e]=function(){var e=Array.prototype.slice.call(arguments);return o.apply(n,e),t.apply(i,e)}}),Y.addClass(t,"has-slider"),i.domElement.insertBefore(n.domElement,i.domElement.firstElementChild)}else if(i instanceof Z){var o=function(t){if(y.isNumber(i.__min)&&y.isNumber(i.__max)){var n=i.__li.firstElementChild.firstElementChild.innerHTML,o=i.__gui.__listening.indexOf(i)>-1;i.remove();var r=p(e,i.object,i.property,{before:i.__li.nextElementSibling,factoryArgs:[i.__min,i.__max,i.__step]});return r.name(n),o&&r.listen(),r}return t};i.min=y.compose(o,i.min),i.max=y.compose(o,i.max)}else i instanceof q?(Y.bind(t,"click",function(){Y.fakeEvent(i.__checkbox,"click")}),Y.bind(i.__checkbox,"click",function(e){e.stopPropagation()})):i instanceof te?(Y.bind(t,"click",function(){Y.fakeEvent(i.__button,"click")}),Y.bind(t,"mouseover",function(){Y.addClass(i.__button,"hover")}),Y.bind(t,"mouseout",function(){Y.removeClass(i.__button,"hover")})):i instanceof ie&&(Y.addClass(t,"color"),i.updateDisplay=y.compose(function(e){return t.style.borderLeftColor=i.__color.toString(),e},i.updateDisplay),i.updateDisplay());i.setValue=y.compose(function(t){return e.getRoot().__preset_select&&i.isModified()&&d(e.getRoot(),!0),t},i.setValue)}(e,c,o),e.__controllers.push(o),o}function h(e,t){return document.location.href+"."+t}function f(e,t,i){var n=document.createElement("option");n.innerHTML=t,n.value=t,e.__preset_select.appendChild(n),i&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function m(e,t){t.style.display=e.useLocalStorage?"block":"none"}function g(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function _(e,t){var i={};return y.each(e.__rememberedObjects,function(n,o){var r={},a=e.__rememberedObjectIndecesToControllers[o];y.each(a,function(e,i){r[i]=t?e.initialValue:e.getValue()}),i[o]=r}),i}var b=Array.prototype.forEach,w=Array.prototype.slice,y={BREAK:{},extend:function(e){return this.each(w.call(arguments,1),function(t){(this.isObject(t)?F()(t):[]).forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(w.call(arguments,1),function(t){(this.isObject(t)?F()(t):[]).forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=w.call(arguments);return function(){for(var t=w.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e)if(b&&e.forEach&&e.forEach===b)e.forEach(t,i);else if(e.length===e.length+0){var n,o=void 0;for(o=0,n=e.length;o<n;o++)if(o in e&&t.call(i,e[o],o)===this.BREAK)return}else for(var r in e)if(t.call(i,e[r],r)===this.BREAK)return},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var n=void 0;return function(){var o=this,r=arguments,a=i||!n;clearTimeout(n),n=setTimeout(function(){n=null,i||e.apply(o,r)},t),a&&e.apply(o,r)}},toArray:function(e){return e.toArray?e.toArray():w.call(e)},isUndefined:function(e){return void 0===e},isNull:function(e){return null===e},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return!1===e||!0===e},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)}},x=[{litmus:y.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:t},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:t},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:t},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:t}}},{litmus:y.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:y.isArray,conversions:{RGB_ARRAY:{read:function(e){return 3===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return 4===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:y.isObject,conversions:{RGBA_OBJ:{read:function(e){return!!(y.isNumber(e.r)&&y.isNumber(e.g)&&y.isNumber(e.b)&&y.isNumber(e.a))&&{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return!!(y.isNumber(e.r)&&y.isNumber(e.g)&&y.isNumber(e.b))&&{space:"RGB",r:e.r,g:e.g,b:e.b}},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return!!(y.isNumber(e.h)&&y.isNumber(e.s)&&y.isNumber(e.v)&&y.isNumber(e.a))&&{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return!!(y.isNumber(e.h)&&y.isNumber(e.s)&&y.isNumber(e.v))&&{space:"HSV",h:e.h,s:e.s,v:e.v}},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],k=void 0,C=void 0,S=function(){C=!1;var e=arguments.length>1?y.toArray(arguments):arguments[0];return y.each(x,function(t){if(t.litmus(e))return y.each(t.conversions,function(t,i){if(k=t.read(e),!1===C&&!1!==k)return C=k,k.conversionName=i,k.conversion=t,y.BREAK}),y.BREAK}),C},M=void 0,L={hsv_to_rgb:function(e,t,i){var n=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),r=i*(1-t),a=i*(1-o*t),s=i*(1-(1-o)*t),l=[[i,s,r],[a,i,r],[r,i,s],[r,a,i],[s,r,i],[i,r,a]][n];return{r:255*l[0],g:255*l[1],b:255*l[2]}},rgb_to_hsv:function(e,t,i){var n=Math.min(e,t,i),o=Math.max(e,t,i),r=o-n,a=void 0;return 0===o?{h:NaN,s:0,v:0}:(a=e===o?(t-i)/r:t===o?2+(i-e)/r:4+(e-t)/r,(a/=6)<0&&(a+=1),{h:360*a,s:r/o,v:o/255})},rgb_to_hex:function(e,t,i){var n=this.hex_with_component(0,2,e);return n=this.hex_with_component(n,1,t),this.hex_with_component(n,0,i)},component_from_hex:function(e,t){return e>>8*t&255},hex_with_component:function(e,t,i){return i<<(M=8*t)|e&~(255<<M)}},D="function"==typeof $.a&&"symbol"==v()(H.a)?function(e){return void 0===e?"undefined":v()(e)}:function(e){return e&&"function"==typeof $.a&&e.constructor===$.a&&e!==$.a.prototype?"symbol":void 0===e?"undefined":v()(e)},O=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},j=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),W()(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),z=function e(t,i,n){null===t&&(t=Function.prototype);var o=B()(t,i);if(void 0===o){var r=I()(t);return null===r?void 0:e(r,i,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},R=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":v()(t)));e.prototype=T()(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(A.a?A()(e,t):e.__proto__=t)},P=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=(void 0===t?"undefined":v()(t))&&"function"!=typeof t?e:t},V=function(){function e(){if(O(this,e),this.__state=S.apply(this,arguments),!1===this.__state)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return j(e,[{key:"toString",value:function(){return t(this)}},{key:"toHexString",value:function(){return t(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),e}();V.recalculateRGB=function(e,t,i){if("HEX"===e.__state.space)e.__state[t]=L.component_from_hex(e.__state.hex,i);else{if("HSV"!==e.__state.space)throw new Error("Corrupted color state");y.extend(e.__state,L.hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v))}},V.recalculateHSV=function(e){var t=L.rgb_to_hsv(e.r,e.g,e.b);y.extend(e.__state,{s:t.s,v:t.v}),y.isNaN(t.h)?y.isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},V.COMPONENTS=["r","g","b","h","s","v","hex","a"],i(V.prototype,"r",2),i(V.prototype,"g",1),i(V.prototype,"b",0),n(V.prototype,"h"),n(V.prototype,"s"),n(V.prototype,"v"),Object.defineProperty(V.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}}),Object.defineProperty(V.prototype,"hex",{get:function(){return"HEX"!==!this.__state.space&&(this.__state.hex=L.rgb_to_hex(this.r,this.g,this.b)),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var U=function(){function e(t,i){O(this,e),this.initialValue=t[i],this.domElement=document.createElement("div"),this.object=t,this.property=i,this.__onChange=void 0,this.__onFinishChange=void 0}return j(e,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),e}(),X={};y.each({HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},function(e,t){y.each(e,function(e){X[e]=t})});var G=/(\d+(\.\d+)?)px/,Y={makeSelectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var n=i,o=t;y.isUndefined(o)&&(o=!0),y.isUndefined(n)&&(n=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),n&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,n){var o=i||{},r=X[t];if(!r)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(r);switch(r){case"MouseEvents":var s=o.x||o.clientX||0,l=o.y||o.clientY||0;a.initMouseEvent(t,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,s,l,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var c=a.initKeyboardEvent||a.initKeyEvent;y.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(t,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break;default:a.initEvent(t,o.bubbles||!1,o.cancelable||!0)}y.defaults(a,n),e.dispatchEvent(a)},bind:function(e,t,i,n){var o=n||!1;return e.addEventListener?e.addEventListener(t,i,o):e.attachEvent&&e.attachEvent("on"+t,i),Y},unbind:function(e,t,i,n){var o=n||!1;return e.removeEventListener?e.removeEventListener(t,i,o):e.detachEvent&&e.detachEvent("on"+t,i),Y},addClass:function(e,t){if(void 0===e.className)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);-1===i.indexOf(t)&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return Y},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),n=i.indexOf(t);-1!==n&&(i.splice(n,1),e.className=i.join(" "))}else e.className=void 0;return Y},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return o(t["border-left-width"])+o(t["border-right-width"])+o(t["padding-left"])+o(t["padding-right"])+o(t.width)},getHeight:function(e){var t=getComputedStyle(e);return o(t["border-top-width"])+o(t["border-bottom-width"])+o(t["padding-top"])+o(t["padding-bottom"])+o(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do{i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent}while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},q=function(e){function t(e,i){O(this,t);var n=P(this,(t.__proto__||I()(t)).call(this,e,i)),o=n;return n.__prev=n.getValue(),n.__checkbox=document.createElement("input"),n.__checkbox.setAttribute("type","checkbox"),Y.bind(n.__checkbox,"change",function(){o.setValue(!o.__prev)},!1),n.domElement.appendChild(n.__checkbox),n.updateDisplay(),n}return R(t,U),j(t,[{key:"setValue",value:function(e){var i=z(t.prototype.__proto__||I()(t.prototype),"setValue",this).call(this,e);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return!0===this.getValue()?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),z(t.prototype.__proto__||I()(t.prototype),"updateDisplay",this).call(this)}}]),t}(),Q=function(e){function t(e,i,n){O(this,t);var o=P(this,(t.__proto__||I()(t)).call(this,e,i)),r=n,a=o;if(o.__select=document.createElement("select"),y.isArray(r)){var s={};y.each(r,function(e){s[e]=e}),r=s}return y.each(r,function(e,t){var i=document.createElement("option");i.innerHTML=t,i.setAttribute("value",e),a.__select.appendChild(i)}),o.updateDisplay(),Y.bind(o.__select,"change",function(){var e=this.options[this.selectedIndex].value;a.setValue(e)}),o.domElement.appendChild(o.__select),o}return R(t,U),j(t,[{key:"setValue",value:function(e){var i=z(t.prototype.__proto__||I()(t.prototype),"setValue",this).call(this,e);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return Y.isActive(this.__select)?this:(this.__select.value=this.getValue(),z(t.prototype.__proto__||I()(t.prototype),"updateDisplay",this).call(this))}}]),t}(),K=function(e){function t(e,i){function n(){r.setValue(r.__input.value)}O(this,t);var o=P(this,(t.__proto__||I()(t)).call(this,e,i)),r=o;return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),Y.bind(o.__input,"keyup",n),Y.bind(o.__input,"change",n),Y.bind(o.__input,"blur",function(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}),Y.bind(o.__input,"keydown",function(e){13===e.keyCode&&this.blur()}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return R(t,U),j(t,[{key:"updateDisplay",value:function(){return Y.isActive(this.__input)||(this.__input.value=this.getValue()),z(t.prototype.__proto__||I()(t.prototype),"updateDisplay",this).call(this)}}]),t}(),J=function(e){function t(e,i,n){O(this,t);var o=P(this,(t.__proto__||I()(t)).call(this,e,i)),a=n||{};return o.__min=a.min,o.__max=a.max,o.__step=a.step,y.isUndefined(o.__step)?0===o.initialValue?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=r(o.__impliedStep),o}return R(t,U),j(t,[{key:"setValue",value:function(e){var i=e;return void 0!==this.__min&&i<this.__min?i=this.__min:void 0!==this.__max&&i>this.__max&&(i=this.__max),void 0!==this.__step&&i%this.__step!=0&&(i=Math.round(i/this.__step)*this.__step),z(t.prototype.__proto__||I()(t.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(e){return this.__min=e,this}},{key:"max",value:function(e){return this.__max=e,this}},{key:"step",value:function(e){return this.__step=e,this.__impliedStep=e,this.__precision=r(e),this}}]),t}(),Z=function(e){function t(e,i,n){function o(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function r(e){var t=c-e.clientY;l.setValue(l.getValue()+t*l.__impliedStep),c=e.clientY}function a(){Y.unbind(window,"mousemove",r),Y.unbind(window,"mouseup",a),o()}O(this,t);var s=P(this,(t.__proto__||I()(t)).call(this,e,i,n));s.__truncationSuspended=!1;var l=s,c=void 0;return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),Y.bind(s.__input,"change",function(){var e=parseFloat(l.__input.value);y.isNaN(e)||l.setValue(e)}),Y.bind(s.__input,"blur",function(){o()}),Y.bind(s.__input,"mousedown",function(e){Y.bind(window,"mousemove",r),Y.bind(window,"mouseup",a),c=e.clientY}),Y.bind(s.__input,"keydown",function(e){13===e.keyCode&&(l.__truncationSuspended=!0,this.blur(),l.__truncationSuspended=!1,o())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return R(t,J),j(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():function(e,t){var i=Math.pow(10,t);return Math.round(e*i)/i}(this.getValue(),this.__precision),z(t.prototype.__proto__||I()(t.prototype),"updateDisplay",this).call(this)}}]),t}(),ee=function(e){function t(e,i,n,o,r){function s(e){e.preventDefault();var t=p.__background.getBoundingClientRect();return p.setValue(a(e.clientX,t.left,t.right,p.__min,p.__max)),!1}function l(){Y.unbind(window,"mousemove",s),Y.unbind(window,"mouseup",l),p.__onFinishChange&&p.__onFinishChange.call(p,p.getValue())}function c(e){var t=e.touches[0].clientX,i=p.__background.getBoundingClientRect();p.setValue(a(t,i.left,i.right,p.__min,p.__max))}function d(){Y.unbind(window,"touchmove",c),Y.unbind(window,"touchend",d),p.__onFinishChange&&p.__onFinishChange.call(p,p.getValue())}O(this,t);var u=P(this,(t.__proto__||I()(t)).call(this,e,i,{min:n,max:o,step:r})),p=u;return u.__background=document.createElement("div"),u.__foreground=document.createElement("div"),Y.bind(u.__background,"mousedown",function(e){document.activeElement.blur(),Y.bind(window,"mousemove",s),Y.bind(window,"mouseup",l),s(e)}),Y.bind(u.__background,"touchstart",function(e){1===e.touches.length&&(Y.bind(window,"touchmove",c),Y.bind(window,"touchend",d),c(e))}),Y.addClass(u.__background,"slider"),Y.addClass(u.__foreground,"slider-fg"),u.updateDisplay(),u.__background.appendChild(u.__foreground),u.domElement.appendChild(u.__background),u}return R(t,J),j(t,[{key:"updateDisplay",value:function(){var e=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*e+"%",z(t.prototype.__proto__||I()(t.prototype),"updateDisplay",this).call(this)}}]),t}(),te=function(e){function t(e,i,n){O(this,t);var o=P(this,(t.__proto__||I()(t)).call(this,e,i)),r=o;return o.__button=document.createElement("div"),o.__button.innerHTML=void 0===n?"Fire":n,Y.bind(o.__button,"click",function(e){return e.preventDefault(),r.fire(),!1}),Y.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return R(t,U),j(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(),ie=function(e){function t(e,i){function n(e){d(e),Y.bind(window,"mousemove",d),Y.bind(window,"touchmove",d),Y.bind(window,"mouseup",r),Y.bind(window,"touchend",r)}function o(e){u(e),Y.bind(window,"mousemove",u),Y.bind(window,"touchmove",u),Y.bind(window,"mouseup",a),Y.bind(window,"touchend",a)}function r(){Y.unbind(window,"mousemove",d),Y.unbind(window,"touchmove",d),Y.unbind(window,"mouseup",r),Y.unbind(window,"touchend",r),c()}function a(){Y.unbind(window,"mousemove",u),Y.unbind(window,"touchmove",u),Y.unbind(window,"mouseup",a),Y.unbind(window,"touchend",a),c()}function l(){var e=S(this.value);!1!==e?(h.__color.__state=e,h.setValue(h.__color.toOriginal())):this.value=h.__color.toString()}function c(){h.__onFinishChange&&h.__onFinishChange.call(h,h.__color.toOriginal())}function d(e){-1===e.type.indexOf("touch")&&e.preventDefault();var t=h.__saturation_field.getBoundingClientRect(),i=e.touches&&e.touches[0]||e,n=i.clientX,o=i.clientY,r=(n-t.left)/(t.right-t.left),a=1-(o-t.top)/(t.bottom-t.top);return a>1?a=1:a<0&&(a=0),r>1?r=1:r<0&&(r=0),h.__color.v=a,h.__color.s=r,h.setValue(h.__color.toOriginal()),!1}function u(e){-1===e.type.indexOf("touch")&&e.preventDefault();var t=h.__hue_field.getBoundingClientRect(),i=1-((e.touches&&e.touches[0]||e).clientY-t.top)/(t.bottom-t.top);return i>1?i=1:i<0&&(i=0),h.__color.h=360*i,h.setValue(h.__color.toOriginal()),!1}O(this,t);var p=P(this,(t.__proto__||I()(t)).call(this,e,i));p.__color=new V(p.getValue()),p.__temp=new V(0);var h=p;p.domElement=document.createElement("div"),Y.makeSelectable(p.domElement,!1),p.__selector=document.createElement("div"),p.__selector.className="selector",p.__saturation_field=document.createElement("div"),p.__saturation_field.className="saturation-field",p.__field_knob=document.createElement("div"),p.__field_knob.className="field-knob",p.__field_knob_border="2px solid ",p.__hue_knob=document.createElement("div"),p.__hue_knob.className="hue-knob",p.__hue_field=document.createElement("div"),p.__hue_field.className="hue-field",p.__input=document.createElement("input"),p.__input.type="text",p.__input_textShadow="0 1px 1px ",Y.bind(p.__input,"keydown",function(e){13===e.keyCode&&l.call(this)}),Y.bind(p.__input,"blur",l),Y.bind(p.__selector,"mousedown",function(){Y.addClass(this,"drag").bind(window,"mouseup",function(){Y.removeClass(h.__selector,"drag")})}),Y.bind(p.__selector,"touchstart",function(){Y.addClass(this,"drag").bind(window,"touchend",function(){Y.removeClass(h.__selector,"drag")})});var f=document.createElement("div");return y.extend(p.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),y.extend(p.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:p.__field_knob_border+(p.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),y.extend(p.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),y.extend(p.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),y.extend(f.style,{width:"100%",height:"100%",background:"none"}),s(f,"top","rgba(0,0,0,0)","#000"),y.extend(p.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),function(e){e.style.background="",e.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",e.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}(p.__hue_field),y.extend(p.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:p.__input_textShadow+"rgba(0,0,0,0.7)"}),Y.bind(p.__saturation_field,"mousedown",n),Y.bind(p.__saturation_field,"touchstart",n),Y.bind(p.__field_knob,"mousedown",n),Y.bind(p.__field_knob,"touchstart",n),Y.bind(p.__hue_field,"mousedown",o),Y.bind(p.__hue_field,"touchstart",o),p.__saturation_field.appendChild(f),p.__selector.appendChild(p.__field_knob),p.__selector.appendChild(p.__saturation_field),p.__selector.appendChild(p.__hue_field),p.__hue_field.appendChild(p.__hue_knob),p.domElement.appendChild(p.__input),p.domElement.appendChild(p.__selector),p.updateDisplay(),p}return R(t,U),j(t,[{key:"updateDisplay",value:function(){var e=S(this.getValue());if(!1!==e){var t=!1;y.each(V.COMPONENTS,function(i){if(!y.isUndefined(e[i])&&!y.isUndefined(this.__color.__state[i])&&e[i]!==this.__color.__state[i])return t=!0,{}},this),t&&y.extend(this.__color.__state,e)}y.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var i=this.__color.v<.5||this.__color.s>.5?255:0,n=255-i;y.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+i+","+i+","+i+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,s(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),y.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+i+","+i+","+i+")",textShadow:this.__input_textShadow+"rgba("+n+","+n+","+n+",.7)"})}}]),t}(),ne=["-moz-","-o-","-webkit-","-ms-",""],oe=function(e,t){var i=t||document,n=document.createElement("style");n.type="text/css",n.innerHTML=e;var o=i.getElementsByTagName("head")[0];try{o.appendChild(n)}catch(e){}},re=function(e,t){var i=e[t];return y.isArray(arguments[2])||y.isObject(arguments[2])?new Q(e,t,arguments[2]):y.isNumber(i)?y.isNumber(arguments[2])&&y.isNumber(arguments[3])?y.isNumber(arguments[4])?new ee(e,t,arguments[2],arguments[3],arguments[4]):new ee(e,t,arguments[2],arguments[3]):y.isNumber(arguments[4])?new Z(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Z(e,t,{min:arguments[2],max:arguments[3]}):y.isString(i)?new K(e,t):y.isFunction(i)?new te(e,t,""):y.isBoolean(i)?new q(e,t):null},ae=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},se=function(){function e(){O(this,e),this.backgroundElement=document.createElement("div"),y.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),Y.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),y.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;Y.bind(this.backgroundElement,"click",function(){t.hide()})}return j(e,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),y.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,t=function t(){e.domElement.style.display="none",e.backgroundElement.style.display="none",Y.unbind(e.domElement,"webkitTransitionEnd",t),Y.unbind(e.domElement,"transitionend",t),Y.unbind(e.domElement,"oTransitionEnd",t)};Y.bind(this.domElement,"webkitTransitionEnd",t),Y.bind(this.domElement,"transitionend",t),Y.bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-Y.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-Y.getHeight(this.domElement)/2+"px"}}]),e}();oe(function(e){if("undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));var le="Default",ce=function(){try{return!!window.localStorage}catch(e){return!1}}(),de=void 0,ue=!0,pe=void 0,he=!1,fe=[],me=function e(t){var i=this,n=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),Y.addClass(this.domElement,"dg"),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=y.defaults(n,{closeOnTop:!1,autoPlace:!0,width:e.DEFAULT_WIDTH}),n=y.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),y.isUndefined(n.load)?n.load={preset:le}:n.preset&&(n.load.preset=n.preset),y.isUndefined(n.parent)&&n.hideable&&fe.push(this),n.resizable=y.isUndefined(n.parent)&&n.resizable,n.autoPlace&&y.isUndefined(n.scrollable)&&(n.scrollable=!0);var o=ce&&"true"===localStorage.getItem(h(0,"isLocal")),r=void 0,a=void 0;if(E()(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return i.parent?i.getRoot().preset:n.load.preset},set:function(e){i.parent?i.getRoot().preset=e:n.load.preset=e,function(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}(this),i.revert()}},width:{get:function(){return n.width},set:function(e){n.width=e,g(i,e)}},name:{get:function(){return n.name},set:function(e){n.name=e,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(t){n.closed=t,n.closed?Y.addClass(i.__ul,e.CLASS_CLOSED):Y.removeClass(i.__ul,e.CLASS_CLOSED),this.onResize(),i.__closeButton&&(i.__closeButton.innerHTML=t?e.TEXT_OPEN:e.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return o},set:function(e){ce&&(o=e,e?Y.bind(window,"unload",r):Y.unbind(window,"unload",r),localStorage.setItem(h(0,"isLocal"),e))}}}),y.isUndefined(n.parent)){if(n.closed=!1,Y.addClass(this.domElement,e.CLASS_MAIN),Y.makeSelectable(this.domElement,!1),ce&&o){i.useLocalStorage=!0;var s=localStorage.getItem(h(0,"gui"));s&&(n.load=JSON.parse(s))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=e.TEXT_CLOSED,Y.addClass(this.__closeButton,e.CLASS_CLOSE_BUTTON),n.closeOnTop?(Y.addClass(this.__closeButton,e.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(Y.addClass(this.__closeButton,e.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),Y.bind(this.__closeButton,"click",function(){i.closed=!i.closed})}else{void 0===n.closed&&(n.closed=!0);var c=document.createTextNode(n.name);Y.addClass(c,"controller-name"),a=l(i,c),Y.addClass(this.__ul,e.CLASS_CLOSED),Y.addClass(a,"title"),Y.bind(a,"click",function(e){return e.preventDefault(),i.closed=!i.closed,!1}),n.closed||(this.closed=!1)}n.autoPlace&&(y.isUndefined(n.parent)&&(ue&&(pe=document.createElement("div"),Y.addClass(pe,"dg"),Y.addClass(pe,e.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(pe),ue=!1),pe.appendChild(this.domElement),Y.addClass(this.domElement,e.CLASS_AUTO_PLACE)),this.parent||g(i,n.width)),this.__resizeHandler=function(){i.onResizeDebounced()},Y.bind(window,"resize",this.__resizeHandler),Y.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),Y.bind(this.__ul,"transitionend",this.__resizeHandler),Y.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&function(e){function t(t){return t.preventDefault(),e.width+=o-t.clientX,e.onResize(),o=t.clientX,!1}function i(){Y.removeClass(e.__closeButton,me.CLASS_DRAG),Y.unbind(window,"mousemove",t),Y.unbind(window,"mouseup",i)}function n(n){return n.preventDefault(),o=n.clientX,Y.addClass(e.__closeButton,me.CLASS_DRAG),Y.bind(window,"mousemove",t),Y.bind(window,"mouseup",i),!1}var o=void 0;e.__resize_handle=document.createElement("div"),y.extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),Y.bind(e.__resize_handle,"mousedown",n),Y.bind(e.__closeButton,"mousedown",n),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}(this),r=function(){ce&&"true"===localStorage.getItem(h(0,"isLocal"))&&localStorage.setItem(h(0,"gui"),N()(i.getSaveObject()))},this.saveToLocalStorageIfPossible=r,n.parent||function(){var e=i.getRoot();e.width+=1,y.defer(function(){e.width-=1})}()};me.toggleHide=function(){he=!he,y.each(fe,function(e){e.domElement.style.display=he?"none":""})},me.CLASS_AUTO_PLACE="a",me.CLASS_AUTO_PLACE_CONTAINER="ac",me.CLASS_MAIN="main",me.CLASS_CONTROLLER_ROW="cr",me.CLASS_TOO_TALL="taller-than-window",me.CLASS_CLOSED="closed",me.CLASS_CLOSE_BUTTON="close-button",me.CLASS_CLOSE_TOP="close-top",me.CLASS_CLOSE_BOTTOM="close-bottom",me.CLASS_DRAG="drag",me.DEFAULT_WIDTH=245,me.TEXT_CLOSED="Close Controls",me.TEXT_OPEN="Open Controls",me._keydownHandler=function(e){"text"===document.activeElement.type||72!==e.which&&72!==e.keyCode||me.toggleHide()},Y.bind(window,"keydown",me._keydownHandler,!1),y.extend(me.prototype,{add:function(e,t){return p(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return p(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;y.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&pe.removeChild(this.domElement);var e=this;y.each(this.__folders,function(t){e.removeFolder(t)}),Y.unbind(window,"keydown",me._keydownHandler,!1),c(this)},addFolder:function(e){if(void 0!==this.__folders[e])throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new me(t);this.__folders[e]=i;var n=l(this,i.domElement);return Y.addClass(n,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],c(e);var t=this;y.each(e.__folders,function(t){e.removeFolder(t)}),y.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=Y.getOffset(e.__ul).top,i=0;y.each(e.__ul.childNodes,function(t){e.autoPlace&&t===e.__save_row||(i+=Y.getHeight(t))}),window.innerHeight-t-20<i?(Y.addClass(e.domElement,me.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-20+"px"):(Y.removeClass(e.domElement,me.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&y.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:y.debounce(function(){this.onResize()},50),remember:function(){if(y.isUndefined(de)&&((de=new se).domElement.innerHTML='<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;y.each(Array.prototype.slice.call(arguments),function(t){0===e.__rememberedObjects.length&&function(e){var t=e.__save_row=document.createElement("li");Y.addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),Y.addClass(t,"save-row");var i=document.createElement("span");i.innerHTML="&nbsp;",Y.addClass(i,"button gears");var n=document.createElement("span");n.innerHTML="Save",Y.addClass(n,"button"),Y.addClass(n,"save");var o=document.createElement("span");o.innerHTML="New",Y.addClass(o,"button"),Y.addClass(o,"save-as");var r=document.createElement("span");r.innerHTML="Revert",Y.addClass(r,"button"),Y.addClass(r,"revert");var a=e.__preset_select=document.createElement("select");if(e.load&&e.load.remembered?y.each(e.load.remembered,function(t,i){f(e,i,i===e.preset)}):f(e,le,!1),Y.bind(a,"change",function(){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].innerHTML=e.__preset_select[t].value;e.preset=this.value}),t.appendChild(a),t.appendChild(i),t.appendChild(n),t.appendChild(o),t.appendChild(r),ce){var s=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage");document.getElementById("dg-save-locally").style.display="block","true"===localStorage.getItem(h(0,"isLocal"))&&l.setAttribute("checked","checked"),m(e,s),Y.bind(l,"change",function(){e.useLocalStorage=!e.useLocalStorage,m(e,s)})}var c=document.getElementById("dg-new-constructor");Y.bind(c,"keydown",function(e){!e.metaKey||67!==e.which&&67!==e.keyCode||de.hide()}),Y.bind(i,"click",function(){c.innerHTML=N()(e.getSaveObject(),void 0,2),de.show(),c.focus(),c.select()}),Y.bind(n,"click",function(){e.save()}),Y.bind(o,"click",function(){var t=prompt("Enter a new preset name.");t&&e.saveAs(t)}),Y.bind(r,"click",function(){e.revert()})}(e),-1===e.__rememberedObjects.indexOf(t)&&e.__rememberedObjects.push(t)}),this.autoPlace&&g(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=_(this)),e.folders={},y.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=_(this),d(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[le]=_(this,!0)),this.load.remembered[e]=_(this),this.preset=e,f(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){y.each(this.__controllers,function(t){this.getRoot().load.remembered?u(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),y.each(this.__folders,function(e){e.revert(e)}),e||d(this.getRoot(),!1)},listen:function(e){var t=0===this.__listening.length;this.__listening.push(e),t&&function e(t){0!==t.length&&ae.call(window,function(){e(t)}),y.each(t,function(e){e.updateDisplay()})}(this.__listening)},updateDisplay:function(){y.each(this.__controllers,function(e){e.updateDisplay()}),y.each(this.__folders,function(e){e.updateDisplay()})}});var ge={Color:V,math:L,interpret:S},ve={Controller:U,BooleanController:q,OptionController:Q,StringController:K,NumberController:J,NumberControllerBox:Z,NumberControllerSlider:ee,FunctionController:te,ColorController:ie},_e={dom:Y},be={GUI:me},we=me,ye={color:ge,controllers:ve,dom:_e,gui:be,GUI:we};e.color=ge,e.controllers=ve,e.dom=_e,e.gui=be,e.GUI=we,e.default=ye,Object.defineProperty(e,"__esModule",{value:!0})},"object"==("undefined"==typeof exports?"undefined":v()(exports))&&void 0!==e?y(exports):"function"==typeof define&&i("nErl")?define(["exports"],y):y(w.dat={});var P={components:{},data:function(){return{}},created:function(){this.init()},computed:{},methods:{init:function(){i.e(0).then(i.bind(null,"jUb+"))}}},V={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fullPage"},[t("canvas")])}]};var U=i("VU/8")(P,V,!1,function(e){i("YRnp")},"data-v-65152398",null).exports;r.default.use(a.a);var X=new a.a({routes:[{path:"/",name:"Index",meta:{title:"首页",keepAlive:!0,scrollTopApp:0},component:x},{path:"/fluidWallpaper",name:"FluidWallpaper",meta:{title:"流体墙纸"},component:U}]});X.beforeEach(function(e,t,i){e.meta.title&&(document.title=e.meta.title),i()}),X.afterEach(function(e,t){e.meta.scrollTopApp?setTimeout(function(){document.getElementById("app").scrollTop=e.meta.scrollTopApp},1):document.getElementById("app").scrollTop=0});var G=a.a.prototype.push;a.a.prototype.push=function(e){return G.call(this,e).catch(function(e){return e})};var Y=X,q=i("zL8q"),Q=i.n(q),K=(i("tvR6"),i("muQq"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view")],1)},staticRenderFns:[]});var J=i("VU/8")({name:"App"},K,!1,function(e){i("LVad")},null,null).exports,Z=i("Dd8w"),ee=i.n(Z),te=i("Zrlr"),ie=i.n(te),ne=i("wxAW"),oe=i.n(ne),re=i("OAwv"),ae=i.n(re),se=i("NC6I"),le=i.n(se),ce={name:"login",props:[],data:function(){return{dialogFormVisible:!1,form:{phone:"",vcode:""},rules:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{min:11,max:11,message:"请输入正确手机号",trigger:"blur"}],vcode:[{required:!0,message:"请输入验证码",trigger:"blur"}]},formLabelWidth:"120px",countDown:0,loading:!1}},watch:{dialogFormVisible:function(e,t){if(!e){var i=this;setTimeout(function(){document.body.removeChild(i.$el)},200)}}},created:function(){},methods:{handleSubmit:function(){var e=this;return d()(l.a.mark(function t(){var i,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e,""!=e.form.phone.length&&""!=e.form.vcode){t.next=4;break}return e.$message.error({message:"请填写完整内容",duration:2e3}),t.abrupt("return");case 4:return e.loading=!0,t.next=7,e.$apiClient.base.login({phone:e.form.phone,vcode:e.form.vcode});case 7:n=t.sent,e.loading=!1,1e4==n.status?(e.$message.success({message:"登录成功！",duration:2e3}),e.$user.setToken(n.body.token),window.setSessionStorage("login","login"),setTimeout(function(){i.dialogFormVisible=!1,location.reload()},1e3)):e.$message.error({message:n.msg,duration:2e3});case 10:case"end":return t.stop()}},t,e)}))()},getCode:function(){var e=this;return d()(l.a.mark(function t(){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(11==e.form.phone.length){t.next=3;break}return e.$message.error({message:"手机号码不完整",duration:2e3}),t.abrupt("return");case 3:if(!(e.countDown>0)){t.next=7;break}return t.abrupt("return");case 7:e.countDown=60,e.countFun();case 9:return i=parseInt((new Date).getTime()/1e3),t.next=12,e.$apiClient.base.vcode({phone:e.form.phone},{defaultToken:le()(i+"325e1fe67673f75185c38bddb0e92bb1")});case 12:t.sent;case 13:case"end":return t.stop()}},t,e)}))()},countFun:function(){var e=this;this.countDown<=0||setTimeout(function(){e.countDown--,e.countFun()},1e3)}}},de={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{id:"loginCompont",title:"登录/注册",visible:e.dialogFormVisible,width:"460px",center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{attrs:{model:e.form,rules:e.rules}},[i("el-form-item",{attrs:{label:"手机号码","label-width":e.formLabelWidth,prop:"phone"}},[i("el-input",{attrs:{autocomplete:"on"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"短信验证码","label-width":e.formLabelWidth}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{prop:"vcode"}},[i("el-input",{model:{value:e.form.vcode,callback:function(t){e.$set(e.form,"vcode",t)},expression:"form.vcode"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:11,offset:1}},[i("el-button",{staticStyle:{width:"100%"},attrs:{type:"success",disabled:!!e.countDown},on:{click:e.getCode}},[e._v(e._s(e.countDown>0?e.countDown+"秒后重新发送":"获取验证码"))])],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticStyle:{width:"320px"},attrs:{type:"primary",round:"",loading:e.loading},on:{click:e.handleSubmit}},[e._v("立即登录/注册")])],1)],1)},staticRenderFns:[]};var ue=i("VU/8")(ce,de,!1,function(e){i("Acid")},"data-v-2938e8e6",null).exports,pe=r.default.extend(ue);ue.install=function(e){var t=new pe({data:e}).$mount();document.body.appendChild(t.$el),r.default.nextTick(function(){t.dialogFormVisible=!0})};var he=ue,fe={globalData:new(function(){function e(){ie()(this,e),this.data={}}return oe()(e,[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}}]),e}()),tsFormatTime:function(e,t){var i=["Y","M","D","h","m","s"],n=[],o=new Date(e),r=o.getFullYear(),a=o.getMonth()+1,s=o.getDate(),l=o.getHours(),c=o.getMinutes(),d=o.getSeconds();for(var u in n.push(r,a,s,l,c,d),n=n.map(function(e){return(e=e.toString())[1]?e:"0"+e}))t=t.replace(i[u],n[u]);return t}},me=new(function(){function e(){ie()(this,e),this.fnsObj={}}return oe()(e,[{key:"on",value:function(e,t){this.fnsObj[e]||(this.fnsObj[e]=[]),this.fnsObj[e].push(t)}},{key:"emmit",value:function(e,t){if(this.fnsObj[e].length)for(var i=this.fnsObj[e],n=0;n<i.length;n++)i[n].call(this,t)}},{key:"remove",value:function(e){for(var t in this.fnsObj)t===e&&delete this.fnsObj[t]}}]),e}()),ge=function(){function e(){ie()(this,e)}return oe()(e,[{key:"init",value:function(){var e=ae.a.parse(window.location.search).token;"string"==typeof e&&this.setToken(e),this.token}},{key:"logout",value:function(){localStorage.removeItem("token"),localStorage.removeItem("avatar"),localStorage.removeItem("nickname"),me.emmit("userInfoObserve",1)}},{key:"login",value:function(){he.install()}},{key:"setToken",value:function(e){localStorage.setItem("token",e)}},{key:"getUserInfo",value:function(){var e=d()(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce.base.member({},{skipError:!0});case 2:1e4==(t=e.sent).status?(me.emmit("userInfoObserve",1),localStorage.setItem("avatar",t.body.avatar),localStorage.setItem("nickname",t.body.nickname)):(window.setSessionStorage&&window.setSessionStorage("login","logout"),this.logout);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"token",get:function(){return localStorage.getItem("token")}},{key:"authorized",get:function(){return!!this.token}}]),e}();function ve(){return[new ge]}var _e,be=(_e=d()(l.a.mark(function e(t,i,n,o){var r,a,s,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,a=n,"GET"===t?r=null:a=null,o.showLoading&&q.Loading.service(),s=o.defaultToken||ye.token,e.next=7,p()(i,{data:r,headers:{token:s||""},method:t,params:a});case 7:return c=e.sent,o.showLoading&&q.Loading.service().close(),80003===c.data.status&&(window.setSessionStorage&&window.setSessionStorage("login","logout"),ye.logout(),o.skipError||(q.Message.error({message:c.data.msg,duration:2e3}),setTimeout(function(){he.install()},1e3))),e.abrupt("return",c.data);case 11:case"end":return e.stop()}},e,this)})),function(e,t,i,n){return _e.apply(this,arguments)}),we=ve(),ye=o()(we,1)[0],xe={BASE_HOST:"https://rest.gyk.com",M_HOST:"Gdevil.github.io"};function ke(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments[3];return function(n,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n,s=ee()({},i,r),l=ee()({},t,o);return be(e,a,l,s)}}function Ee(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return ke(e,xe.BASE_HOST+t,i,n)}var Ce={base:{city:Ee("GET","/v1/city"),brand:Ee("GET","/v1/brand")},localRequest:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return ke(e,xe.M_HOST+t,i,n)}("GET")},Ae={bg:i("dZ/S"),preview:i("IjBW"),logo:i("4Uwr")},Se=i("wvfG"),Te=i.n(Se);r.default.config.productionTip=!1,r.default.use(Q.a),r.default.prototype.$apiClient=Ce,r.default.prototype.$assets=Ae;var Me=ve(),Ie=o()(Me,1)[0];r.default.prototype.$user=Ie,r.default.prototype.$store=fe,r.default.use(Te.a),new r.default({el:"#app",router:Y,components:{App:J},template:"<App/>",created:function(){Ie.token&&Ie.getUserInfo(),window.setSessionStorage=function(e,t){me.emmit("watchSesStore",{key:e,value:t})},me.on("watchSesStore",function(e){sessionStorage.setItem(e.key,e.value),"login"===e.key&&"login"===e.value&&Ie.getUserInfo()})}})},Nyee:function(e,t){```
<div class="siteSec" m-title="吾诺瀚卓" m-content="西湖区文三路华星时代广场2102" m-point="120.132076|30.282001"></div>
<div class="siteSec" m-title="吾诺瀚卓" m-content="西湖区文三路华星时代广场2102" m-point="120.130036|30.282797"></div>


<style>
div#dituContent label {
    max-width: none;
    margin: 0;
}

div#dituContent * {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}

.mapIcon {
    position: relative;
    padding-left: 22px;
    margin-left: -23px;
    line-height: 1.2;
    cursor: pointer;
}

.mapIcon .xinxi {
    padding: 4px 10px;
    background: #fff;
    box-shadow: 0 0 10px #aaa;
    border-radius: 50px;
    font-size: 12px;
    color: #000;
    transition:all 0.2s ease-in-out;
    -webkit-transition:all 0.2s ease-in-out;
    -moz-transition:all 0.2s ease-in-out;
    -ms-transition:all 0.2s ease-in-out;
    -o-transition:all 0.2s ease-in-out;
}




.mapIcon span.mapIconNum {
    position: absolute;
    width: 20px;
    top: -3px;
    left: 0;
    text-align: center;
    color: #fff;
    padding: 6px 0;
    background-image: url(../images/us_mk_icon.png);
    background-position: 1px -20px;
}

.mapIcon:hover .xinxi {
    background: #45a82f;
    color: #fff;
}
.bdLabelShow {
    visibility: visible !important;
}

.bdLabelHide {
    visibility: hidden !important;
}
</style>

<script>
    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(120.131227,30.283771);//定义一个中心点坐标
        map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_SMALL});
    map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:0});
    map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
    }
    
    var markerArrAll=[];
    $(".siteSec").each(function(ind,el){
        var lis={
            title:$(el).attr("m-title"),
            content:$(el).attr("m-content"),
            point:$(el).attr("m-point")
        }
        markerArrAll.push(lis);
    })

    //标注点数组
    var markerArr = [];
    markerArr=markerArrAll;
    // markerArr.push(markerArrAll[0]);
    /*var markerArr = [
        {title:"吾诺瀚卓",content:"西湖区文三路华星时代广场2102",point:"120.131114|30.283576"},
        {title:"我的标记",content:"我的备注",point:"120.129363|30.281877"},
        {title:"我的标记",content:"我的备注",point:"120.132076|30.282001"},
        {title:"我的标记",content:"我的备注",point:"120.130036|30.282797"}
    ];*/
    //创建marker

    var labelArr=[];
    function addMarker(){
        var positionArr=[];
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
            
            // json.icon={w:23,h:25,l:0,t:21,x:9,lb:12};
            json.icon={w:0,h:0,l:0,t:-100,x:9,lb:12};
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
            // var iw = createInfoWindow(i);
            var h = '<div class="mapIcon"><span class="mapIconNum">' + (i+1) + '</span><div class="xinxi" title="' + json.title + '">' + json.title + '<span class="s1"></span></div></div>';
            var label = new BMap.Label(h,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-25)});
            // var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                border: "none",
                backgroundColor: 'none'
            });
            labelArr.push(marker);
            if(i>0){
                label.setStyle({
                    display: 'none'
                });
            }else{
                positionArr.push(point);
            }
            (function(){
                var index = i;
                // var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click",function(){
                    // this.openInfoWindow(_iw);
                });
                // _iw.addEventListener("open",function(){
                   //  _marker.getLabel().hide();
                // })
                // _iw.addEventListener("close",function(){
                   //  _marker.getLabel().show();
                // })
                label.addEventListener("click",function(){
                    // _marker.openInfoWindow(_iw);
                })
                // if(!!json.isOpen){
                //  label.hide();
                //  _marker.openInfoWindow(_iw);
                // }
            })()
        }
        if (map) {
            map.setViewport(positionArr, {    //设置视窗位置
                margins: [10, 50, 10, 10]
            })
        }
    }
    //创建InfoWindow
    // function createInfoWindow(i){
    //     var json = markerArr[i];
    //     var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
    //     return iw;
    // }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    
    initMap();//创建和初始化地图


    $(window).scroll(function(){
        var scrollT=$(window).scrollTop();

        var markArr=[];
        $(".siteSec").each(function(i,el){
            var ofTop=$(el).offset().top;
            var h=$(el).outerHeight();
            if(labelArr[i]){
                labelArr[i].getLabel().setStyle({
                    display: 'none'
                });
            }
            if((ofTop-40)>scrollT && (scrollT+$(window).height())>(ofTop+h)){
                labelArr[i].getLabel().setStyle({
                    display: 'block'
                });
                markArr.push(new BMap.Point(labelArr[i].point.lng, labelArr[i].point.lat));
            }
        })
        if (map) {
            map.setViewport(markArr, {    //设置视窗位置
                margins: [10, 50, 10, 10]
            })
        }
        
    })
</script>
```},Oftn:function(e,t){```
-webkit-filter: grayscale(1);filter: grayscale(1);filter: gray;





//图片模糊
-webkit-filter: blur(10px); /* Chrome, Opera */
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);    
            filter: blur(10px); 
```},Osic:function(e,t){```
function GetRTime(){    
	var EndTime= new Date('2016/11/26 23:00:00');    
	var NowTime = new Date();    
	var t =EndTime.getTime() - NowTime.getTime();    
	var d=0;    
	var h=0;    
	var m=0;    
	var s=0;   
	if(t>=0){      
		//d=Math.floor(t/1000/60/60/24);      
		//h=Math.floor(t/1000/60/60%24); 
		h=Math.floor(t/1000/60/60);      
		m=Math.floor(t/1000/60%60);      
		s=Math.floor(t/1000%60);    
	}      
	//document.getElementById("t_d").innerHTML = d + "天";    
	document.getElementById("t_h").innerHTML = h<10? "0"+h : h;    
	document.getElementById("t_m").innerHTML = m<10? "0"+m : m;    
	document.getElementById("t_s").innerHTML = s<10? "0"+s : s;  
}  
setInterval(GetRTime,0);
```},PJPm:function(e,t){```$('.banner_imgbox img').stop().animate({top:-100},1000,'swing');

	setInterval(function(){
		 scrollTop = $(window).scrollTop();	
	},1);
	var _h = $('html').height()-$(window).innerHeight();
	

var t1=$('.banner_imgbox img').css('top');
var scrollFunc = function (e) {
	//scrollTop = $(window).scrollTop();	
	
   scrollTop = -e.wheelDelta/2+scrollTop;
   if(scrollTop<=0||scrollTop>=_h){
		scrollTop =  parseInt($(window).scrollTop());
	}
	if($(window).scrollTop()>0 && $(window).scrollTop()<($('.main').offset().top)){
		var set1=$('.banner_imgbox').offset().top;
		$('.banner_imgbox img').stop().animate({top:-parseInt(t1)-(scrollTop-set1)*0.8-150},1500,'swing');
		
		console.log(-parseInt(t1)-(scrollTop-set1)-150)
	}else{
		$('.banner_imgbox img').stop().animate({top:-parseInt(t1)-150},500,'swing');
	}	
    //ScrollText(direct);
 }	 
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
window.onmousewheel = document.onmousewheel = scrollFunc; ```},"Q+/1":function(e,t){```
var splitLineBreak = function splitLineBreak(elt) {
	var para = elt;

	$(window).on({
		resize: function resize() {
			para.each(function () {
				var current = $(this);
				var text = current.text();
				var newText = '<span><span>';
				var _length = text.length;
				var cursor = 0;

				var words = text.split(' ');
				current.text(words[0]);
				var height = current.height();
				var infoWords = [{
					length: words[0].length,
					pos: 0
				}];

				for (var j = 1; j < words.length; j++) {
					infoWords.push({
						length: words[j].length,
						pos: infoWords[j - 1].pos + infoWords[j - 1].length + 1
					});
				}
				for (var i = 1; i < words.length; i++) {
					var chars = '';
					current.text(current.text() + ' ' + words[i]);

					if (current.height() > height) {
						height = current.height();
						var index = text.indexOf(words[i - 1]) + words[i - 1].length;
						newText += text.substring(infoWords[cursor].pos, infoWords[i - 1].pos + infoWords[i - 1].length) + '</span></span> <span><span>';
						cursor = i;
						// for( var j = 0; j < words[i-1].length; j++ ) chars += 'j';
						// text = text.replace(new RegExp(words[i-1]), chars);
						//console.log(words[i-1]);
					}
				}
				newText += text.substring(infoWords[cursor].pos, _length) + '</span></span>';
				current.html('').html(newText);
			});
		}
	}).trigger('resize');
};
```},QDte:function(e,t){```<div class="amountBox">
    <span class="sp1">-</span>
    <input type="text" value="1" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
    <span class="sp2">+</span>
</div>





<style>
.amountBox {
    border: solid 1px #eaeaea;
    border-right: none;
}
.amountBox input {
    border: none;
    border-right: solid 1px #eaeaea;
    padding: 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 60px;
    color: #666;
}
.amountBox:after {content: "";display: table;clear: both;}
.amountBox * {
    float: left;
}
.amountBox span {
    line-height: 30px;
    font-size: 16px;
    color: #888;
    width: 28px;
    cursor: pointer;
    text-align: center;
    border-right: solid 1px #eaeaea;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
</style>

<script>
$("body").on("click",".amountBox .sp1",function(){
    var val=$(this).parent(".amountBox").find("input").val();
    if(val<=1){return;}
    val--;
    $(this).parent(".amountBox").find("input").val(val)
})
$("body").on("click",".amountBox .sp2",function(){
    var val=$(this).parent(".amountBox").find("input").val();
    val++;
    $(this).parent(".amountBox").find("input").val(val)
})
</script>```},Rcri:function(e,t){```
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
``````
if (!!window.ActiveXObject || "ActiveXObject" in window){
    var tar=$(".career1_txt p");
    for(i=0;i<$(".career1_txt p").length;i++){
        var txt=$(".career1_txt p").eq(i).html();
        var span=$('<span></span>');
        span.html(txt);
        $(".career1_txt p").eq(i).html(span);
    }
    $(".career1_txt p").each(function(i){
    var divH = $(this).height();
    var $p = $("span", $(this)).eq(0);
    while ($p.outerHeight() > divH) {
    $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    };
    });
}
```},S25q:function(e,t){```
    $('.qrzf_sl_xzs1 .xdsl1').bind('input propertychange', function() {
        alert($(this).val());
    });







<input type="text" placeholder="输入" onblur="this.placeholder='输入'" onfocus="this.placeholder=''">
```},SNN1:function(e,t){},THhh:function(e,t){},ULFb:function(e,t){},"UN/r":function(e,t){```var ua = navigator.userAgent.toLowerCase();    
    if (/iphone|ipad|ipod/.test(ua)) {
            alert("iphone");        
    } else if (/android/.test(ua)) {
            alert("android");    
    }```},WaHj:function(e,t){```
function Cookie(key,value){
    this.key=key;
    if(value!=null)
    {
        this.value=escape(value);
    }
    this.expiresTime=null;
    this.domain=null;
    this.path="/";
    this.secure=null;
}
Cookie.prototype.setValue=function(value){this.value=escape(value);}
Cookie.prototype.getValue=function(){return (this.value);}
Cookie.prototype.setExpiresTime=function(time){this.expiresTime=time;}
Cookie.prototype.getExpiresTime=function(){return this.expiresTime;}
Cookie.prototype.setDomain=function(domain){this.domain=domain;}
Cookie.prototype.getDomain=function(){return this.domain;}
Cookie.prototype.setPath=function(path){this.path=path;}
Cookie.prototype.getPath=function(){return this.path;}
Cookie.prototype.Write=function(v){
    if(v!=null){
        this.setValue(v);
    }
    var ck=this.key+"="+this.value;
    if(this.expiresTime!=null){
        try {
            ck+=";expires="+this.expiresTime.toUTCString();;
        }
        catch(err){
            alert("expiresTime参数错误");
        }
    }
    if(this.domain!=null){
        ck+=";domain="+this.domain;
    }
    if(this.path!=null){
        ck+=";path="+this.path;
    }
    if(this.secure!=null){
        ck+=";secure";
    }
    document.cookie=ck;
}
Cookie.prototype.Read=function(){
    try{
        var cks=document.cookie.split("; ");
        var i=0;
        for(i=0;i <cks.length;i++){
            var ck=cks[i];
            var fields=ck.split("=");
            if(fields[0]==this.key){
                this.value=fields[1];
                return (this.value);
            }
        }
        return null;
    }
    catch(err){
        alert("cookie读取错误");
        return null;
    }
}
    
    var ck = new Cookie("HasLoaded");  //每个页面的new Cookie名HasLoaded不能相同
    if (ck.Read() == null) {//未加载过，Cookie内容为空
        alert("首次打开页面");
        var dd = new Date();
        dd = new Date(dd.getYear() + 1900, dd.getMonth(), dd.getDate());
        dd.setDate(dd.getDate() + 365);
        ck.setExpiresTime(dd);
        ck.Write("true");  //设置Cookie。只要IE不关闭，Cookie就一直存在
    }
    else {
        alert("页面刷新");
    }
```},YRnp:function(e,t){},YaB1:function(e,t){```if(navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.match(/7./i)=="7." || navigator.appVersion.match(/8./i)=="8.")) 
{ 

}




function isIE() { //ie?
if (!!window.ActiveXObject || "ActiveXObject" in window){
$('video').css({'height':$(window).height()*1.2,'width':'auto','margin-left':-($('video').width()-$(window).width())/2,'margin-top':-$(window).height()*0.1})
}
}

isIE()
```},"Yam+":function(e,t,i){var n={"./HEX转RGBA.md":"KloM","./a标签 拨打电话.md":"bEoa","./a标签文件下载.md":"ULFb","./base64加密解密.md":"qqys","./bootstrap-tooltip~title样式.md":"ucWA","./bootstrap与ie兼容问题.md":"bo5X","./chrome背景fixed问题.md":"t5XF","./cookie判断页面第一次加载还是第二次刷新.md":"WaHj","./css3图片样式效果.md":"6XVr","./css背景平铺代码.md":"u0jC","./date日期.md":"geHx","./flex.md":"EGUY","./html5视频播放代码.md":"Bud5","./iframe调用父级页面元素.md":"GWvm","./img Onload事件.md":"Aapr","./index不同父元素下获取索引值.md":"93JW","./input值改变事件 + placeholder问题.md":"S25q","./ios视频自动弹出全屏 解决方法.md":"5PSd","./jq修改input值并触发v-model的更新.md":"/pgu","./js-dom对象与jq对象的转换.md":"drtw","./loading 三个点动画.md":"5MAM","./opacity自适应.md":"ffny","./push合并两个数组.md":"6arv","./scroll方向.md":"+eTH","./splitLineBreak - 文本span换行分割.md":"Q+/1","./splitLineBreak - 文本换行分割.md":"pboA","./svg用法代码.md":"I192","./svg降级.md":"g6Iq","./tab切换.md":"w71h","./touch事件坐标.md":"duH1","./ul li类 菜单自适应宽度 平均分配.md":"rKvw","./window,open传参.md":"4sNM","./产品数量加减框.md":"QDte","./倒计时.md":"Osic","./公众号转二维码.md":"SNN1","./判断ie.md":"YaB1","./判断ios 安卓.md":"UN/r","./判断手机横竖屏.md":"FZZH","./包裹元素内所有内容.md":"dQUM","./华创案例无缝滚动.md":"DMRB","./向上不间断滚动代码鼠标经过暂停.md":"n88H","./回到顶部JQ带滑动效果.md":"Gj0/","./图片去色，模糊.md":"Oftn","./图片跟随滚轮移动（animate缓慢）.md":"PJPm","./在线聊天代码.md":"YsMN","./多行文本超出影藏 + 兼容.md":"Rcri","./字符串拼接 执行方法.md":"6U/P","./强制qq聊天 打开聊天窗口.md":"nwSU","./微软雅黑的字体使用.md":"HWNN","./文字垂直居中.md":"p88P","./文字竖排显示.md":"DXvt","./文字超出部分省略号.md":"hGIa","./文字透明显示背景   蒙版遮罩.md":"btN4","./文本域输入框形式.md":"gXBi","./时间戳转换时间.md":"ldoW","./正则查找.md":"+WKg","./滚动条样式修改.md":"b9zl","./滚动消息.md":"haMt","./滚轮事件兼容写法.md":"ymI+","./点击跳到对应位置的缓动效果（可跳页面）.md":"85OA","./用css样式编写渐变.md":"Ys7p","./百度地图-控制点显示隐藏，视窗位置跟随.md":"Nyee","./禁用右键.md":"nzE6","./背景+图片变透明 背景渐变.md":"vUHX","./背景+图片变透明.md":"/5Hm","./自定义select框.md":"G8F2","./自适应柱状图.md":"9eJL","./订单支付，选择支付方式页面.md":"ir0C","./输入框绑定回车键执行事件.md":"Itf0","./逆转字符串.md":"THhh","./阻止启用滚动事件.md":"l470","./除某些元素以外的元素绑定事件.md":"7W9c"};function o(e){return i(r(e))}function r(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="Yam+"},Ys7p:function(e,t){```

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






```},YsMN:function(e,t){```
 1. 对话窗口地址（1.什么情况加此代码：如果网站上已提前做好咨询按钮，则加此代码到网站已做好放咨询按钮上面）
                
http://chat32.live800.com/live800/chatClient/chatbox.jsp?companyID=668243&configID=93300&jid=1923114016
  

  2. 跟踪代码 手机网站上直接加这个代码，然后在软件后台配置管理，开启手机端邀请就可以生成咨询按钮（把此代码加到所有页面最后一个/body上）

<!-- Live800默认跟踪代码: 开始-->
<script language="javascript" src="http://chat32.live800.com/live800/chatClient/monitor.js?jid=1923114016&companyID=668243&configID=93299&codeType=custom"></script>
<!-- Live800默认跟踪代码: 结束-->
  
  
  3.图标代码（1.什么情况加此代码：如果网站上没有提前做好咨询按钮，则加此代码到网站想要放咨询按钮的页面）
            （2.加到网站想要放咨询按钮的页面的后台最后一个/body上，此代码可以在后台配置管理修改调整类型和样式）
              
<!-- Live800在线客服图标:默认图标[浮动图标] 开始-->
<div style='display:none;'><a href='http://www.live800.com'>live800Link.webchat2</a></div><script language="javascript" src="http://chat32.live800.com/live800/chatClient/floatButton.js?jid=1923114016&companyID=668243&configID=93300&codeType=custom"></script><div style='display:none;'><a href='http://en.live800.com'>live chat</a></div>
<!-- 在线客服图标:默认图标 结束-->
```},b9zl:function(e,t){```::-webkit-scrollbar-track-piece{width:10px;background-color:#f2f2f2}
::-webkit-scrollbar{width:5px;height:6px}
::-webkit-scrollbar-thumb{height:50px;background-color:#0752a4;}
::-webkit-scrollbar-thumb:hover{background:#0752a4}
```},bEoa:function(e,t){},bo5X:function(e,t){```
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> 

<link rel="stylesheet" type="text/css" href="css/bootstrap.css">

<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/bootstrap.js"></script>


<!--[if lt IE 9]>
   <script src="js/respond.min.js"></script>
   <script src="js/html5shiv.js"></script>
<![endif]-->
```},btN4:function(e,t){```
.home_pro_right h2 {
    background: url(../images/bg.jpg);
    font-weight: 600;
    letter-spacing: 2px;
    background-size: 150% 150%;
    font-size: 4.7rem;
    line-height: 5rem;
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    padding-bottom: 30px;
}
```},dQUM:function(e,t){```$("body").wrapInner("<div id='all'></div>")```},"dZ/S":function(e,t,i){e.exports=i.p+"static/img/bg.79fb44b.jpg"},drtw:function(e,t){```
var v = document.getElementById("v"); //DOM对象
var $v = $(v); //jQuery 对象





var $v = $("#v"); //jQuery 对象
var v = $v[0]; //DOM 对象
```},duH1:function(e,t){```
function load (){
 
    document.addEventListener('touchstart',touch,false);
    document.addEventListener('touchmove',touch,false);
    document.addEventListener('touchend',touch,false);
     
    function touch (event){
        var event = event || window.event;
         
        var oInp = document.getElementById("inp");
 
        switch(event.type){
            case "touchstart":
                oInp.innerHTML ="Touch started (" + event.touches[0].clientX +"," + event.touches[0].clientY +")";
                break;
            case "touchend":
                oInp.innerHTML ="<br>Touch end (" + event.changedTouches[0].clientX +"," + event.changedTouches[0].clientY +")";
                break;
            case "touchmove":
                event.preventDefault();
                oInp.innerHTML ="<br>Touch moved (" + event.touches[0].clientX +"," + event.touches[0].clientY +")";
                break;
        }
         
    }
}
window.addEventListener('load',load,false);










//某一元素上touch事件时阻止body的touch事件
touchstart时
$('body').bind('touchmove',function(e){
            
                e.preventDefault();
});
touchend时
$('body').unbind('touchmove');
```},ffny:function(e,t){```
filter:alpha(opacity=0); -moz-opacity:0; -khtml-opacity:0; opacity:0;
filter:alpha(opacity=100); -moz-opacity:1; -khtml-opacity:1;opacity:1;

IE8,7,6 下版本这样写
-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"; 
-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
filter:progid:DXImageTransform.Microsoft.Alpha(opacity=100); 
```},g6Iq:function(e,t){```<svg width="40" height="40">
    <image xlink:href="images/famt1.svg" src="images/famt1.png" width="40" height="40" />
</svg>```},gXBi:function(e,t){```1.鼠标点击是原来的提示   自动消失

<input  onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = '张某某';}"  value="张某某"  type="text" class="">


或者

<input class="input1" type="text" value="请填写您的手机号码" onfocus="this.value=''" onblur="if(this.value==''){this.value='请填写您的手机号码'}" />





<input type="text" placeholder="请填写充值金额" onblur="this.placeholder='请填写充值金额'" onfocus="this.placeholder=''"/>

.wallet_c_box input::-webkit-input-placeholder { 
color: #777; 
} 
.wallet_c_box input:-moz-placeholder { 
color: #777; 
} 
.wallet_c_box input::-moz-placeholder { 
color: #777; 
} 
.wallet_c_box input:-ms-input-placeholder { 
color: #777; 
} 

(针对placeholder原始文字变色)



<textarea  onfocus="if(this.value=='文明上网，理性发言') {this.value='';}this.style.color='#ff0000';" onblur="if(this.value=='') {this.value='文明上网，理性发言';this.style.color='#333';}"maxlength="20">文明上网，理性发言</textarea>

(提示条变色)





2.鼠标点击是原来的提示   手动删除

<input   value="张某某"  type="text" class="">





required 属性规定必需在提交之前填写输入字段（不然会有提示）

<form action="/example/html5/demo_form.asp" method="get">
Name: <input type="text" name="usr_name" required="required" />
<input type="submit" value="提交" />
</form>


readonly 属性规定输入字段为只读。

Country:<input type="text" name="country" value="China" readonly="readonly" />










```},geHx:function(e,t){```
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
```},hGIa:function(e,t){```white-space:nowrap; overflow:hidden; text-overflow:ellipsis;



    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;```},hNpa:function(e,t){},haMt:function(e,t){```
<div class="bulletin">
	<ul>
		<li>
			<a href="#">文艺范早安晚安心语：黑夜里代替阳光的东西是信念——写的真好，详情点击这里</a>
		</li>
		<li>
			<a href="#">关于青春、海边唯美的图片——我想给你全部全部的希望及光芒，免你忧伤赐你一腔孤勇闯向远方</a>
		</li>
		<li>
			<a href="#">[优美文章]过一个冷暖自知的冬天——守着自己的小小天地，过着属于自己的小日子，亦可清欢。</a>
		</li>
	</ul>
</div>



<script>
$(document).ready(function(){
	$(".bulletin").adScroll({line:1,speed:1000,timer:1000});
})



(function($){
    $.fn.extend({
	    adScroll:function(opt,callback){
	    	if(!opt) var opt={};
	    	var oo;
	    	var _this=this.eq(0).find("ul:first");
	    	var lineH=_this.find("li:first").height(),//23
	    	line = opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10),
	    	speed=opt.speed?parseInt(opt.speed,10):7000, //卷动速度，数值越大，速度越慢（毫秒）
	    	timer=opt.timer?parseInt(opt.timer,10):7000; //滚动的时间间隔（毫秒）
	    	if(line==0) line=1;
	    	var upHeight = 0-line*lineH;//-总高度
		    scrollUp=function(){
			    _this.animate({
			    marginTop:upHeight // <li>的margin-top
			    },speed,function(){
				    for(i=1;i<=line;i++){
				    _this.find("li:first").appendTo(_this);
				    }
			    	_this.css({marginTop:0});
			    	}
			    );
		    };
		    var timerID = function(){
		    	oo =setInterval("scrollUp()",timer);
		    };
		   	timerID();
	    _this.hover(function(){
		    clearInterval(oo);
		    },function(){
				timerID();
		    }).mouseout(function(){
		    	
		    });
	    }
    });
})(jQuery);

</script>
```},ir0C:function(e,t){```<div class="orderPayMain">
    <div class="orderPay_sec orderPay_sec1">
        <h2><img src="images/myConfirm.png"/><b>订单提交成功，现在只差最后一步啦！</b></h2>
        <h3>请您在提交订单后1小时00分内完成支付，否则订单会自动取消！</h3>
        <hr />
        <p>Led摄影灯灯光补光灯 等<b>4</b>件商品</p>
        <p>收货信息：浙江省,杭州市,西湖区,华星时代广场,小豆豆，手机：158****8888</p>
    </div>
    <div class="orderPay_sec orderPay_sec2">
        <h2><span>支付金额：</span><b>¥13676.00</b></h2>
        <hr />
        <div class="orderPayWay">
            <div class="orderPayWay_l">
                <ul>
                    <li data-id="op0">
                        <label>
                            <input type="radio" name="d1" checked="checked" />
                            <span>
                                <img src="images/pay_alipay.png"/>
                                <b>支付宝</b>
                            </span>
                        </label>
                    </li>
                    <li data-id="op1">
                        <label>
                            <input type="radio" name="d1"/>
                            <span>
                                <img src="images/pay_wechat.png"/>
                                <b>微信支付</b>
                            </span>
                        </label>
                    </li>
                    <li data-id="op2">
                        <label>
                            <input type="radio" name="d1" />
                            <span>
                                <img src="images/pay_ext.png"/>
                                <b>余额支付</b>
                            </span>
                        </label>
                    </li>
                    <li data-id="op3">
                        <label>
                            <input type="radio" name="d1" />
                            <span>
                                <img src="images/pay_bank.png"/>
                                <b>银行卡支付</b>
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
            <div class="orderPayWay_r">
                <div class="orderPayWay_r_sec active" id="op0">
                    <a href="#" class="btn btn-gr">确认支付</a>
                </div>
                <div class="orderPayWay_r_sec" id="op1">
                    <div class="wechat_op">
                        <img src="images/ewm.png"/>
                        <h6>使用微信扫一扫，扫描二维码</h6>
                    </div>
                </div>
                <div class="orderPayWay_r_sec" id="op2">
                    <div class="yue_op">
                        <h5>可用余额：<b>300.00</b>元</h5>
                        <p><span>支付密码：</span><input type="password" /></p>
                        <a href="#" class="btn btn-gr">确认支付</a>
                    </div>
                </div>
                <div class="orderPayWay_r_sec" id="op3">
                    <div class="yue_op">
                        <p>
                            <span>选择银行卡：</span><select>
                                <option value="0">建设 ****8888</option>
                                <option value="0">工商 ****6666</option>
                                <option value="0">招商 ****1111</option>
                            </select>
                        </p>
                        <p><span>输入支付密码：</span><input type="password" /></p>
                        <a href="#" class="btn btn-gr">确认支付</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>






<style>

.orderPay_sec1 h2 img{
    width: 36px;
    margin-right: 10px;
    vertical-align: middle;
}
.orderPay_sec1 h2 b{
    vertical-align: middle;
}
.orderPay_sec {
    background: #fafafa;
    border: solid 1px #eee;
    margin: 0 0 15px;
    padding: 15px;
}
.orderPay_sec1 h2 {
    margin: 0 0 15px;
    font-size: 20px;
    line-height: 30px;
    color: #333;
}
.orderPay_sec1 h3 {
    margin: 0 0 0;
    font-size: 14px;
    line-height: 22px;
    color: #888;
}
.orderPay_sec1 p {
    margin: 0;
    font-size: 13px;
    line-height: 22px;
    color: #333;
}
.orderPay_sec1 p b {
    color: #ff5a00;
}
.orderPay_sec2 h2 {
    margin: 0;
    font-size: 16px;
    line-height: 30px;
    color: #333;
}
.orderPay_sec2 h2 b {
    font-size: 26px;
    color: #ff5a00;
}
.orderPayWay_l li label {
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    color: #333;
    cursor: pointer;
}
.orderPayWay_l li label input {
    margin: 0;
    vertical-align: middle;
}
.orderPayWay_l li label span {
    vertical-align: middle;
    margin-left: 10px;
}
.orderPayWay_l li label img {
    width: 32px;
    margin-right: 5px;
}
.orderPayWay_l ul li {
    padding: 5px 0;
}
.orderPayWay {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: flex-end;
    -webkit-align-items: flex-end;
    box-align: end;
    -moz-box-align: end;
    -webkit-box-align: end;
}
.orderPayWay_r {
    flex: 1;
    text-align: right;
}
.orderPayWay_r_sec {
    display:none;
}
.orderPayWay_r_sec.active {
    display:inline-block;
}
.wechat_op {text-align: center;}
.wechat_op img {
    width: 140px;
}
.wechat_op h6 {
    margin: 5px 0 0;
    font-size: 16px;
    line-height: 24px;
    color: #888;
}
.yue_op {
    text-align: left;
}
.yue_op h5 {
    margin: 0 0 10px;
    font-size: 16px;
    line-height: 26px;
    color: #333;
}
.yue_op p {
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 24px;
    color: #333;
}
.yue_op .btn {
    margin: 25px 0 0;
}
.yue_op p * {
    vertical-align: middle;
}
.yue_op p input {
    padding: 0 5px;
    background: transparent;
    border: solid 1px #ccc;
    min-width: 180px;
}
.yue_op p span {
    display: inline-block;
    min-width: 100px;
}

.yue_op p select {
    padding: 0 5px;
    height: 26px;
    background: transparent;
    border: solid 1px #ccc;
    min-width: 180px;
}
</style>





<script>
$("body").on("click",".orderPayWay_l ul li",function(){
        var id=$(this).attr("data-id");
        var tar=$("#"+id);
        if($(this).find("input").is(":checked")){
            $(".orderPayWay_r_sec").not(tar).removeClass("active");
            tar.addClass("active");
        }
    })
    
</script>


```},l2AQ:function(e,t){},l470:function(e,t){```; !function () {
        var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
        }

        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }
        var oldonwheel, oldonmousewheel1, oldonmousewheel2, oldontouchmove, oldonkeydown
        , isDisabled;
        function disableScroll() {
            if (window.addEventListener) // older FF
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            oldonwheel = window.onwheel;
            window.onwheel = preventDefault; // modern standard

            oldonmousewheel1 = window.onmousewheel;
            window.onmousewheel = preventDefault; // older browsers, IE
            oldonmousewheel2 = document.onmousewheel;
            document.onmousewheel = preventDefault; // older browsers, IE

            oldontouchmove = window.ontouchmove;
            window.ontouchmove = preventDefault; // mobile

            oldonkeydown = document.onkeydown;
            document.onkeydown = preventDefaultForScrollKeys;
            isDisabled = true;
        }

        function enableScroll() {
            if (!isDisabled) return;
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);

            window.onwheel = oldonwheel; // modern standard

            window.onmousewheel = oldonmousewheel1; // older browsers, IE
            document.onmousewheel = oldonmousewheel2; // older browsers, IE

            window.ontouchmove = oldontouchmove; // mobile

            document.onkeydown = oldonkeydown;
            isDisabled = false;
        }
        window.scrollHanlder = {
            disableScroll: disableScroll,
            enableScroll: enableScroll
        };
        
        
        disableScroll();
        //enableScroll();
    }();




































```},ldoW:function(e,t){```
function getMyDate(str){  
            var oDate = new Date(str),  
            oYear = oDate.getFullYear(),  
            oMonth = oDate.getMonth()+1,  
            oDay = oDate.getDate(),  
            oHour = oDate.getHours(),  
            oMin = oDate.getMinutes(),  
            oSen = oDate.getSeconds(),  
            oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间  
            return oTime;  
        }; 
        //补0操作
      function getzf(num){  
          if(parseInt(num) < 10){  
              num = '0'+num;  
          }  
          return num;  
      }
```},muQq:function(e,t){},n88H:function(e,t){```
<script>

     $(function(){
			$('.cpbk_con ul li').clone().appendTo('.cpbk_con ul');
			var fybh=$('.cpbk_con ul').height();
			var fybh2=fybh/2;
			var fybhindex=0;
			var timer_fybh=setInterval(fybhanimate,30);
			$('.cpbk_con').hover(
					function(){
						clearInterval(timer_fybh)
					},function(){
						timer_fybh=setInterval(fybhanimate,30);
					}
			)
			function fybhanimate(){
				fybhindex+=1;
				if(fybhindex>fybh2){
					fybhindex=0;
				}
				$('.cpbk_con ul').css({top:-fybhindex})
			}
		})



</script>


注意：ul设相对定位
```},nwSU:function(e,t){```http://wpa.qq.com/msgrd?V=1&Uin=********&Site=ioshenmue&Menu=yes



tencent://message/?uin=********&Site=im.qq.com&Menu=yes```},nzE6:function(e,t){```document.oncontextmenu=new Function("event.returnValue=false"); 
document.onselectstart=new Function("event.returnValue=false"); ```},p88P:function(e,t){```<div class="casewen" style="display:table; width:100%">
        <a href="#" style="display:table-cell; vertical-align:middle; text-align:center;">啊啊啊啊啊</a>
</div>```},pboA:function(e,t){```
var splitLineBreak = function splitLineBreak(elt) {
	var para = elt;

	$(window).on({
		resize: function resize() {
			para.each(function () {
				var current = $(this);
				var text = current.text();
				var newText = '<span><span>';
				var _length = text.length;
				var cursor = 0;

				var words = text.split(' ');   //中文用''分割
				current.text(words[0]);
				var height = current.height();
				var infoWords = [{
					length: words[0].length,
					pos: 0
				}];

				for (var j = 1; j < words.length; j++) {
					infoWords.push({
						length: words[j].length,
						pos: infoWords[j - 1].pos + infoWords[j - 1].length + 1
						//英文有space +1 中文+0
					});
				}
				for (var i = 1; i < words.length; i++) {
					var chars = '';
					current.text(current.text() + ' ' + words[i]);

					if (current.height() > height) {
						height = current.height();
						var index = text.indexOf(words[i - 1]) + words[i - 1].length;
						newText += text.substring(infoWords[cursor].pos, infoWords[i - 1].pos + infoWords[i - 1].length) + '</span></span> <span><span>';
						cursor = i;
						// for( var j = 0; j < words[i-1].length; j++ ) chars += 'j';
						// text = text.replace(new RegExp(words[i-1]), chars);
						//console.log(words[i-1]);
					}
				}
				newText += text.substring(infoWords[cursor].pos, _length) + '</span></span>';
				current.html('').html(newText);
			});
		}
	}).trigger('resize');
};
```},pw1w:function(e,t){},qqys:function(e,t){```
//1.加密解密方法使用：

//1.加密  
var str = '124中文内容';  
var base = new Base64();  
var result = base.encode(str);  
//document.write(result);  

//2.解密  
var result2 = base.decode(result);  
document.write(result2);  
//2.加密、解密算法封装：

function Base64() {  

    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  

    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  

    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  

    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  

        }  
        return utftext;  
    }  

    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}
```},rKvw:function(e,t){```ul.menu_nav {
    text-align: center;
    width: 100%;
    -js-display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
}

ul.menu_nav li{
    display:inline-block;
}
```},t5XF:function(e,t){```
使用 Swiper 插件时，在 swiper.css 中的 .swiper-container 有一段css

-webkit-backface-visibility:hidden;
-moz-backface-visibility:hidden;
-ms-backface-visibility:hidden;
-o-backface-visibility:hidden;
backface-visibility:hidden;

这段css会影响chrome浏览器上背景图片的fixed属性，可以注释掉；
```},tvR6:function(e,t){},u0jC:function(e,t){```

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
```},ucWA:function(e,t){```
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
```},vUHX:function(e,t){```opacity: 0.8; 
/* For IE 5-7 */
filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
/* For IE 8 */
-MS-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";





filter:alpha(opacity=20); /* IE 透明度20% 
*/ -moz-opacity:0.9; /* Moz + FF 透明度20%*/
opacity: 0.9; /* 支持CSS3的浏览器（FF 1.5也支持）透明度20%*/



透明必须是图片（背景不能实现）


img {opacity:0.4;filter:alpha(opacity=40); /* For IE8 and earlier */}

img:hover {opacity:1.0;filter:alpha(opacity=100); /* For IE8 and earlier */}






背景变透明写法：

 background:rgba(255,255,255,0.9);   兼容最高版本IE或者极速模式
filter:Alpha(opacity=80); background:#fff;

filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#E5ffffff,endColorstr=#E5ffffff);    兼容IE8和以上的版本及极速模式


rgba的值：                      IEfilter值：
0.1                                19
0.2                                33
0.3                                4C
0.4                                66
0.5                    7F
0.6                99
0.7                                B2
0.8                                CC
0.9                                E5
....                               ...


直接取整数计算，没有任何进位直接省去
Alpha*255再转换成16进制即可







或者：
 filter:alpha(opacity=0); -moz-opacity:0; -khtml-opacity:0; opacity:0;








背景渐变：
background: -moz-linear-gradient(left,#007942 0,#00ac7b 100%);
    background: -webkit-gradient(linear,left top,right top,color-stop(0,#007942),color-stop(100%,#00ac7b));
    background: -webkit-linear-gradient(left,#007942 0,#00ac7b 100%);
    background: -o-linear-gradient(left,#007942 0,#00ac7b 100%);
    background: -ms-linear-gradient(left,#007942 0,#00ac7b 100%);
    background: linear-gradient(to right,#007942 0,#00ac7b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#007942',endColorstr='#00ac7b',GradientType=1);













```},w71h:function(e,t){```
    
    
function fnTabBoxShow(Focus,Hide,Show){
    $(Focus).siblings().removeClass("active");
    $(Focus).addClass("active");
    $(".TabHide"+Hide).hide();
    $("#TabShow"+Show).show();
};

function fnTabBoxSlide(Focus,Hide,Show){
    $(Focus).siblings().removeClass("active");
    $(Focus).addClass("active");
    $(".TabHide"+Hide).hide();
    $("#TabShow"+Show).slideDown("fast");
};

function fnTabBoxFade(Focus,Hide,Show){
    $(Focus).siblings().removeClass("active");
    $(Focus).addClass("active");
    $(".TabHide"+Hide).hide();
    $("#TabShow"+Show).fadeIn("fast");
};





onclick="fnTabBoxFade(this,5,1);"
onclick="fnTabBoxSlide(this,5,1);"







            <div id="TabShow1" class="TabHide5">
                
            </div>
            <div id="TabShow2" class="TabHide5"  style=" display:none;" >
                
            </div>
```},"ymI+":function(e,t){```
var addMouseWheelHandler = function(){
    if (document.addEventListener) {
        document.addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
        document.addEventListener('wheel', MouseWheelHandler, false); //Firefox
        document.addEventListener('DOMMouseScroll', MouseWheelHandler, false); //Old Firefox
    } else {
        document.attachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
    }
},
removeMouseWheelHandler = function(){
    if (document.addEventListener) {
        document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
        document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
        document.removeEventListener('DOMMouseScroll', MouseWheelHandler, false); //old Firefox
    } else {
        document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
    }
},
stopDefault = function(e) { 
    //W3C
    if ( e && e.preventDefault ) 
        e.preventDefault(); 
    //IE 
    else
        window.event.returnValue = false; 
    return false; 
},
MouseWheelHandler = function(e) {//滚动后的处理函数
    stopDefault(e);
    var e = e || window.event,
        value = e.wheelDelta || -e.deltaY || -e.detail,
        delta = Math.max(-1, Math.min(1, value));
    if (delta < 0) {//scrolling down
         
     
    }else {//scrolling up
         
    }
};
 
//调用
addMouseWheelHandler();









////////////////////////////////////////////////////////////////////////////////////







///////阻止窗口滚动事件


function disabledMouseWheel() {
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
  }//W3C
  window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
}
function scrollFunc(evt) {
  evt = evt || window.event;
    if(evt.preventDefault) {
    // Firefox
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      // IE
      evt.cancelBubble=true;
      evt.returnValue = false;
  }
  return false;
}
window.onload=disabledMouseWheel;













////////////////////////////////////////////////////////////////////////////////////////////////////////









////对部分元素阻止窗口滚轮事件



var firefox = navigator.userAgent.indexOf('Firefox') != -1;
function MouseWheel(e) {
///对img按下鼠标滚路，阻止视窗滚动
 console.log(e);
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                alert("滑轮向上滚动");
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                alert("滑轮向下滚动");
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail< 0) { //当滑轮向上滚动时
                alert("滑轮向上滚动");
            }
            if (e.detail> 0) { //当滑轮向下滚动时
                alert("滑轮向下滚动");
            }
        }
 
 
    e = e || window.event;
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;

    //其他代码
}
window.onload = function () {
    var img = document.getElementById('body_fixed');
    firefox ? img.addEventListener('DOMMouseScroll', MouseWheel, false) : (img.onmousewheel = MouseWheel);
}

```}},["NHnr"]);