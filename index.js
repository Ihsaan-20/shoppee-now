$(document).ready(function(){
    // Banner owl carousel;
    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items: 1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        mouseDrag:true,
        responsiveClass:true,
        nav:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
    // Top sale carouel;
    $("#top-sale .owl-carousel").owlCarousel({
        dots:false,
        loop:true,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
                
            },
            1000:{
                items:5,
                nav:true
            }
        }
    });

     // isotope filter;
     var $grid = $(".grid").isotope({
        itemSelector: '.grid-item', // Add a dot before the class name
        layoutMode: 'fitRows'
    });

    // filter items on button click;
    $('.button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // New Phones carouel;
    $("#new-phones .owl-carousel").owlCarousel({
        dots:true,
        loop:true,
        nav:false,
        // responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
                
            },
            1000:{
                items:5
            }
        }
    });

    // Blogs carouel;
      $("#blogs .owl-carousel").owlCarousel({
        dots:true,
        loop:true,
        nav:false,
        // responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3   
            }
        }
    });

    // Product quantity;
    let qty_up = $('.qty .btn-up');
    let qty_down = $('.qty .btn-down');
    // let input = $('.qty .qty_input');

    // up click button;
    qty_up.click(function(e){
        let input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if(input.val() >= 1 && input.val() <= 9 ){
            input.val(function(i, oldval){
                return ++oldval;
            }) 
        }
    })
    // down click button;
    qty_down.click(function(e){
        let input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if(input.val() > 1 && input.val() <= 10 ){
            input.val(function(i, oldval){
                return --oldval;
            }) 
        }
    })

});




