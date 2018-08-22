
 window.onload = function() {
    $("#w-1").addClass("js-hidden");
};


$(document).ready(function () {
   
    
    
    
    
    
    
    
    
    $('.slider-best-brands').slick({
        infinite: true,
        speed: 250,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
//    
//    $('.tel-init').inputmask({
//        "mask": "+7 (999) 999-99-99"
//        , "placeholder": "_"
//        , showMaskOnHover: false
//        , showMaskOnFocus: true
//    }); 
//   
   
    $('.portfolio-slider').slick({
        infinite: true,
        speed: 250,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 1
                }
            },
             {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    
  
    
    $(".cover-iframe").click(function () {
        var data_movie_link = $(this).attr("data-movielink");
        $(".cover-iframe-player").attr("style",$(this).attr("style")).fadeIn(0);
        $(".v-player iframe").attr({
            'src': data_movie_link
        });
    });

     $('.cover-iframe-player').on('click', function() {
        var src = $("#videoframe").attr("src");
        $("#videoframe").attr("src", src+"?autoplay=1" );
        $(this).fadeOut(1000);
    });
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('scrolled');
        }
        else{
            $('header').removeClass('scrolled');
        }
    });
    if($(window).scrollTop() > 0){
        $('header').addClass('scrolled');
    }
    else{
        $('header').removeClass('scrolled');
    }
    $('.click-open').click(function(){
        if(!$(this).hasClass('opened')){
            $(this).addClass('opened');
            $(this).find('.second-lvl-menu').slideDown(150);
        }
        else{
            $(this).removeClass('opened');
            $(this).find('.second-lvl-menu').slideUp(150);
        }
    });
    
    $(".nav-button-1").on("click", function (e) {
         e.preventDefault();
         $("body").addClass("has-active-menu");
         $(".nav-holder-4").addClass("is-active");
         $(".mask-nav-3").addClass("is-active")
     });
     $(".close-menu, .mask-nav-3").on("click", function (e) {
         e.preventDefault();
         $("body").removeClass("has-active-menu");
         $(".nav-holder-4").removeClass("is-active");
         $(".mask-nav-3").removeClass("is-active");
     });
    
    
    
//====
   

    
    $('.search-form input').focus(function(){
        $('.focus-visible').addClass('showed');
    });
    
    
    
     var win = $(window);
    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .slider-best-brands .white-block,.sec-lvl-5 .white-block,.portfolio-slider .white-block, .one-new .image .white-block").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : ""
        })
    }
    scrFunc();
    
    
    $(window).scroll(function () {
        scrFunc();
          
    });
    
    
    
    
    
});




