```$('.banner_imgbox img').stop().animate({top:-100},1000,'swing');

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
window.onmousewheel = document.onmousewheel = scrollFunc; ```