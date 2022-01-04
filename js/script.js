$(document).ready(function(){
    //header
    $("header li a").click(function(){
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    //window app
    var homeOffset = $(".home").offset().top
    console.log(homeOffset);
    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop();

        if(windowScroll > 150){
            $("header").addClass("changeHeader");
            $(".scrollTop").show();

        }else{
            $("header").removeClass("changeHeader")
            $(".scrollTop").hide();

        }
    });


    //dynamic taps
    // $("header a").click(function(){
        // var myId = $(this).attr("id");
        //  $("body section").hide();
        // $("." + myId).fadeIn(1500);
    // });


    //filter img  //mixitup jQuery plugin
    $(".tabs button").click(function(){
        var myClass =$(this).attr("class");

        if(myClass == "all")  $(".images img").fadeIn();
        else{
            $(".images img").hide();
            $(".images ." + myClass).fadeIn();
        };
    });



    //smooth scroll header app
    var headerHeight =$("header").height();
    $("header a").click(function() {
        var id = $(this).attr("id");
        console.log(id);
        $("body,html").animate({
            scrollTop: $("." + id).offset().top-headerHeight
        });
    });


    //Scroll Top
    // $("window").scroll(function(){
        // var topBtn = $(this).scrollTop();
        // if( topBtn > 200){
            // $(".scrollTop").show();
        // }else{
            // $(".scrollTop").hide();
        // }
    // });

    $(".scrollTop").click(function(){
        $("body,html").animate({
            scrollTop: 0
        }, 700);
    });


    // calculate characters of textarea app
    $("textarea").keyup(function(e){
        console.log(e.target.value.length);
        if (e.target.value.length  >= 100){
           e.target.value = e.target.value.substr(0,100);
        }else{

        }
    })


});// End jQuery