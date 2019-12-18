```
    
    
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
```