$(document).ready(function(){
    $(".banner-ld-bebes").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 10000,
        margin: 25,
        navText: ['<img src="./arquivos/arrow-landing20-left.png" alt="" />','<img src="./arquivos/arrow-landing20-right.png" alt="" />'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(".moments").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        center: true,
    /*     autoplay: true,
        autoplayTimeout: 5000, */
        margin: 25,
        navText: ['<img src="./arquivos/arrow-landing20-left.png" alt="" />','<img src="./arquivos/arrow-landing20-right.png" alt="" />'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(".banner-ld-productos").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        center: true,
    /*     autoplay: true,
        autoplayTimeout: 5000, */
        margin: 25,
        navText: ['<img src="./arquivos/arrow-landing20-left.png" alt="" />','<img src="./arquivos/arrow-landing20-right.png" alt="" />'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

})