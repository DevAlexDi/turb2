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
                breakpoint: 768,
                settings: {
                    dots:false
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
    $('.slider-wrapp-rev').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendArrows: $('.dots-in'),
        appendDots: $('.dots-in')
        
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
    
    $('header form').click(function(e){
        e.stopPropagation();
        if(!$(this).hasClass('opened')){
            $(this).addClass('opened');
            
        }
        
    });
    $('body,html').click(function(){
        if($('header form').hasClass('opened')){
            $('header form').removeClass('opened');
        }
    });
    
    
//====
   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});

