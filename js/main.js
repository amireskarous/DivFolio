$(window).scroll(function(){
    if($(window).scrollTop()> offsetHight.top - outerHeight){
        $("nav").css("backgroundcolor", "#09c");
        $(".back").fadeIn(2000).css("display", "flex");
    }else{
        $("nav").css("backgroundcolor", "transparent");
    }
});
$(".back").click(function(){
    $("html ,body").animate({scrollTop:0},2000);
});