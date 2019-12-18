```<div class="selBox">
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
</script>```