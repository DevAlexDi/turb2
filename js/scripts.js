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
   
    $('.portfolio-slider').slick({
        infinite: true,
        speed: 250,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots:false
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
   

    
    
    
    
    
    

//var renderer = PIXI.autoDetectRenderer(800, 400, {
//      
//  transparent: true
//    
//});
//  
//
//document.body.appendChild(renderer.view);
//  
//var stage = new PIXI.Container();
//
//var hawaii = PIXI.Sprite.fromImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Google_web_search.png/640px-Google_web_search.png');
//hawaii.anchor.x = 0.5;
//hawaii.anchor.y = 0.5;
//hawaii.position.x = 200;
//hawaii.position.y = 200;
//
//stage.addChild(hawaii);
//
//var displacementTexture = PIXI.Sprite.fromImage('data:image/jpeg;base64,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');
//
//
//
//var displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture);
//
//
//stage.filters = [displacementFilter];
//
//
//render();
//
//var count = 0.5;
//var x = 5;
//
//function render(){
//  requestAnimationFrame(render);  
//  
//  displacementFilter.scale.x = 5 * Math.sin(count*1);
//  displacementFilter.scale.y = 5 * Math.sin(count*1.2);
//  
//  count += 0.05;
//  
//  renderer.render(stage);
//}
//    
//    
//    
    
    
    
    
    
    
    
});

