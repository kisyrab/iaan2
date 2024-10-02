$(function(){
    //인디케이터
    $(".main > li").hover(function(){
        // var n = $(this).index();
        var left1 = $(this).children("a").offset().left;        
        width = $(this).children("a").css("width");
        $("#indicator").css("width" , width).css("left" , left1);
    },function(){
        $("#indicator").css("width" , "0").css("left" , "0");
    });

    // 서브메뉴 떨어트리기
        $(".main").mouseenter(function(){
            $(".sub").slideDown()
            $(".headerWrap").addClass("bgON")
        });
        $(".main").mouseleave(function(){
            $(".sub").slideUp();
            $(".headerWrap").removeClass("bgON")
    });


        //반응형일때 메뉴

    ///hovermenu
    $(".btn").click(function(){
        $(".hoverMenu").animate({right : "0"} , 800 )
    });
    $(".xButton").click(function(){
        $(".hoverMenu").animate({right : "-300px"} , 800)
    });

    ///sub
    $(".hoverMainMenu > li").hover(function(){
        $(this).find(".hoverSub").stop().slideDown()
    },function(){
        $(this).find(".hoverSub").stop().slideUp()
    });

    //포트폴리오 이미지 & 텍스트 슬릭

    $(".portfolio_tree").slick({
        autoplay : true,
        autoplaySpeed: 2000,
        fade: true,
        arrows : true,
    })

    $(".portfolio_archi").slick({
        autoplay : true,
        autoplaySpeed: 2000,
        fade: true,
        arrows : true,
    })

    $(".portfolio_plant").slick({
        autoplay : true,
        autoplaySpeed: 2000,
        fade: true,
        arrows : true,
    })

    $(".portfolio_overseas").slick({
        autoplay : false,
        fade: false,
        arrows : true,
    })

    $("a").click(function(e){
        var attr = $(this).attr("href")
        if(attr == "#"){
            e.preventDefault()
        }
    })

    //포트폴리오 탭메뉴
    $(".portfolio_outer > div").eq(0).css("z-index" , "1000");
    $(".portfolio_title ul li").click(function(){
        var num = $(this).index(); //0 1 2 3
        $(".portfolio_title ul li a").css("background" , "#ddd").css("color" , "#333")
        $(this).find("a").css("background" , "#1c3899").css("color" , "#fff")
    $(".portfolio_outer > div").css("z-index" , "999");
    $(".portfolio_outer > div").eq(num).css("z-index" , "1000");
    
    

    })//

    // var array = ["../images/login.jpg", "../images/fintech.jpg", "../images/life.jpg", "../images/service_platform.png" , "../images/certification.jpg"]
    var array = ["url('../images/login.jpg')", "url('../images/fintech.jpg')", "url('../images/life-a.jpg')", "url('../images/service_platform.jpg')" ,"url('../images/certification-a.jpg')"]
    $(".section04 > div").mouseover(function(){
        var a_num = $(this).index();
        console.log(a_num)
        $(".section04").css("background-image" ,  array[a_num] )
    })

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

})//j

