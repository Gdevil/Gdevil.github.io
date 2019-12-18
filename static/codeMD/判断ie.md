```if(navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.match(/7./i)=="7." || navigator.appVersion.match(/8./i)=="8.")) 
{ 

}




function isIE() { //ie?
if (!!window.ActiveXObject || "ActiveXObject" in window){
$('video').css({'height':$(window).height()*1.2,'width':'auto','margin-left':-($('video').width()-$(window).width())/2,'margin-top':-$(window).height()*0.1})
}
}

isIE()
```