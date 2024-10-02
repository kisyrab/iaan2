$(function(){
    
    $(document).scroll(function(){
        var t = $(document).scrollTop()
        console.log(t)
        if(t>100){
            $(".headerWrap").css("top" , "-100px")
        }else{
            $(".headerWrap").css("top" , "0px")
        }
    })


    //top버튼
    $(".topbutton a").click(function(){        
        $("html, body").animate({scrollTop : 0},500)
        console.log("aslkdjf")
    })

    //aos
    AOS.init();


    $(".s4Box li").hover(function(){
        $(this).siblings().addClass("dark")
    },function(){
        $(".s4Box li").removeClass("dark")
    })

})