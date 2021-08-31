$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navebar').addClass("sticky");
        } else{
            $('.navebar').removeClass("sticky");

        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toogle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toogleClass("active");
        $('.menu-btn i').toogleClass("active");
    });

    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:false,
            }

        }

    });
});