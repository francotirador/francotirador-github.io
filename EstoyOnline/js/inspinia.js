// INSPINIA Landing Page Custom scripts
$(document).ready(function () {



    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    })

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 70
        }, 500);
        event.preventDefault();
    });

    $("#btn-toogle").click(function(e){
        e.stopPropagation();
        $("#sidebar-wrapper").addClass("active");
    })

    $("#btn-remove").click(function(e){
        e.stopPropagation();
        $("#sidebar-wrapper").removeClass("active");
    })

    $(document).click(function(){
       if($("#sidebar-wrapper").hasClass('active')){
          $("#sidebar-wrapper").removeClass("active");
       }
    })

    $('.fancybox').fancybox();

});

$('ul.sidebar-nav li a[href*=#]').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

// Activate WOW.js plugin for animation on scrol
new WOW().init();