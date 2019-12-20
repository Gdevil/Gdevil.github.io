```
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
```