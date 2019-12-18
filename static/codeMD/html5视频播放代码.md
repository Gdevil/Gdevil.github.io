```

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

```