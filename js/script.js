$(document).ready(function(){

    $('#slides').superslides({
        animation: 'fade' ,
        play: 5000,
        pagination: false
    });
    var typed = new Typed(".typed", {
        strings: ["Sofware Engineer", "Web Developer", "WTC_Student"], 
        typeSpeed: 70,
        loop: true,
        startDelay: 1000, 
        showCursor: false, 
    });

    $('.owl-carousel').owlCarousel({
        loop:false,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });


    var skillsTopOffset = $(".skillsSection").offset().top;
    $(window).scroll(function()
    {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200)
        {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#2980b9',
                trackColor: '#000',
                scaleColor: 'false',
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

      $("[data-fancybox]").fancybox();

      $(".items").isotope({
         filter: '*',
         animationOptions: {
             duration: 1500,
             easing: 'linear',
            queue: false
         }
     });

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");

        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: 'false'
            }
        });

        return false;
    });

});